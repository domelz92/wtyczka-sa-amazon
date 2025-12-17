<?php
// debug-logs.php - alternatywny endpoint w głównym katalogu
header('Content-Type: application/json; charset=UTF-8');
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

if (!$input || !isset($input['action']) || $input['action'] !== 'debug_logs') {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid data']);
    exit;
}

// Loguj do pliku tymczasowego
$logFile = __DIR__ . '/debug_logs_temp.json';
$logEntry = [
    'timestamp' => date('Y-m-d H:i:s'),
    'data' => $input
];

file_put_contents($logFile, json_encode($logEntry) . "\n", FILE_APPEND | LOCK_EX);

echo json_encode(['success' => true, 'message' => 'Debug log received']);
?>
