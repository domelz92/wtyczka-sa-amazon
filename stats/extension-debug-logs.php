<?php
// extension-debug-logs.php
// Prosty endpoint do zbierania logów debugowych wtyczki

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
mb_internal_encoding('UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['action']) || $input['action'] !== 'debug_logs') {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid data - expected debug_logs action']);
    exit;
}

// Proste zabezpieczenie przed spamem
$userIP = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateLimitFile = __DIR__ . '/debug_rate_limit_' . hash('sha256', $userIP) . '.tmp';

if (file_exists($rateLimitFile)) {
    $lastRequest = (int)file_get_contents($rateLimitFile);
    if (time() - $lastRequest < 5) { // Max 1 request na 5 sekund dla logów
        http_response_code(429);
        echo json_encode(['error' => 'Rate limit exceeded']);
        exit;
    }
}

file_put_contents($rateLimitFile, time());

// Wyczyść stare pliki rate limit (starsze niż 1 godzina)
$files = glob(__DIR__ . '/debug_rate_limit_*.tmp');
foreach ($files as $file) {
    if (filemtime($file) < time() - 3600) {
        unlink($file);
    }
}

// Przygotuj dane do zapisu
$logData = [
    'timestamp' => date('Y-m-d H:i:s'),
    'action' => $input['action'],
    'version' => $input['version'] ?? 'unknown',
    'amazon_order_id' => $input['amazon_order_id'] ?? 'unknown',
    'sellasist_order_id' => $input['sellasist_order_id'] ?? 'unknown',
    'processing_status' => $input['processing_status'] ?? 'unknown',
    'logs_count' => $input['logs_count'] ?? 0,
    'logs' => json_encode($input['logs'] ?? []),
    'metadata' => json_encode($input['metadata'] ?? []),
    'user_ip' => hash('sha256', $userIP), // Anonimizuj IP
    'unix_timestamp' => time()
];

// Zapisz do pliku CSV z logami debugowymi
$csvFile = __DIR__ . '/extension_debug_logs.csv';
$csvLine = implode(',', [
    $logData['timestamp'],
    $logData['action'],
    $logData['version'],
    $logData['amazon_order_id'],
    $logData['sellasist_order_id'],
    $logData['processing_status'],
    $logData['logs_count'],
    '"' . str_replace('"', '""', $logData['logs']) . '"', // Escape quotes in JSON
    '"' . str_replace('"', '""', $logData['metadata']) . '"', // Escape quotes in JSON
    $logData['user_ip'],
    $logData['unix_timestamp']
]) . "\n";

file_put_contents($csvFile, $csvLine, FILE_APPEND | LOCK_EX);

// Ogranicz rozmiar pliku - zostaw tylko ostatnie 1000 wpisów
if (file_exists($csvFile)) {
    $lines = file($csvFile);
    if (count($lines) > 1000) {
        $recentLines = array_slice($lines, -1000);
        file_put_contents($csvFile, implode('', $recentLines), LOCK_EX);
    }
}

// Zwróć sukces
echo json_encode([
    'success' => true,
    'logs_received' => $logData['logs_count'],
    'order_id' => $logData['sellasist_order_id']
]);
?>
