<?php
// download-and-clear-logs.php - Pobierz i wyczyść logi debugowe
header('Content-Type: text/csv; charset=UTF-8');
header('Content-Disposition: attachment; filename="extension_debug_logs_' . date('Y-m-d_H-i-s') . '.csv"');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: 0');

$csvFile = __DIR__ . '/extension_debug_logs.csv';

if (!file_exists($csvFile)) {
    // Jeśli plik nie istnieje, wyślij pusty CSV z nagłówkami
    echo "timestamp,action,version,amazon_order_id,sellasist_order_id,processing_status,logs_count,logs,metadata,user_ip,unix_timestamp\n";
    exit;
}

// Odczytaj i wyślij zawartość pliku
$handle = fopen($csvFile, 'r');
if ($handle) {
    // Użyj blokady aby zapobiec problemom podczas zapisu
    if (flock($handle, LOCK_SH)) {
        $lineNumber = 0;
        while (($line = fgets($handle)) !== false) {
            $lineNumber++;
            
            // Pomiń pierwszy wiersz jeśli to nagłówki CSV
            if ($lineNumber === 1 && strpos($line, 'timestamp,action,version') === 0) {
                continue; // Pomiń nagłówki
            }
            
            echo $line;
        }
        flock($handle, LOCK_UN);
    }
    fclose($handle);
}

// Wyczyść plik po wysłaniu
$clearHandle = fopen($csvFile, 'w');
if ($clearHandle) {
    if (flock($clearHandle, LOCK_EX)) {
        // Zostaw tylko nagłówki CSV
        ftruncate($clearHandle, 0);
        fwrite($clearHandle, "timestamp,action,version,amazon_order_id,sellasist_order_id,processing_status,logs_count,logs,metadata,user_ip,unix_timestamp\n");
        flock($clearHandle, LOCK_UN);
    }
    fclose($clearHandle);
}

// Loguj informację o pobraniu
$logEntry = [
    'timestamp' => date('Y-m-d H:i:s'),
    'action' => 'csv_downloaded_and_cleared',
    'user_ip' => hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown'),
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown'
];

$downloadLog = __DIR__ . '/download_log.json';
file_put_contents($downloadLog, json_encode($logEntry) . "\n", FILE_APPEND | LOCK_EX);
?>
