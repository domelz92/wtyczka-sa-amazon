<?php
// extension-stats-endpoint.php
// Prosty endpoint do zbierania statystyk wtyczki

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['action'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid data']);
    exit;
}

// Proste zabezpieczenie przed spamem
$userIP = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateLimitFile = __DIR__ . '/rate_limit_' . hash('sha256', $userIP) . '.tmp';

if (file_exists($rateLimitFile)) {
    $lastRequest = (int)file_get_contents($rateLimitFile);
    if (time() - $lastRequest < 10) { // Max 1 request na 10 sekund
        http_response_code(429);
        echo json_encode(['error' => 'Rate limit exceeded']);
        exit;
    }
}

file_put_contents($rateLimitFile, time());

// Wyczyść stare pliki rate limit (starsze niż 1 godzina)
$files = glob(__DIR__ . '/rate_limit_*.tmp');
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
    'user_ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown'
];

// Zapisz do pliku CSV (lub bazy danych)
$csvFile = __DIR__ . '/extension_stats.csv';
$csvLine = implode(',', [
    $logData['timestamp'],
    $logData['action'],
    $logData['version'],
    hash('sha256', $logData['user_ip']), // Anonimizuj IP
    date('Y-m-d') // Tylko data dla grupowania
]) . "\n";

file_put_contents($csvFile, $csvLine, FILE_APPEND | LOCK_EX);

// Zwróć sukces
echo json_encode(['success' => true]);
?>
