<?php
// stats-export.php
// API do eksportu statystyk w formacie JSON

header('Content-Type: application/json');

// Proste zabezpieczenie tokenem
$validToken = 'Ypl2oH4Mu0KXKtX32MgJhFaC59OkFrARRhQWYE58'; // Zmień na swój token!

if (!isset($_GET['token']) || $_GET['token'] !== $validToken) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized - invalid token']);
    exit;
}

$csvFile = __DIR__ . '/extension_stats.csv';

if (!file_exists($csvFile)) {
    echo json_encode(['error' => 'Brak danych']);
    exit;
}

$stats = [];
$lines = file($csvFile, FILE_IGNORE_NEW_LINES);

foreach ($lines as $line) {
    $data = str_getcsv($line);
    if (count($data) >= 5) {
        $stats[] = [
            'timestamp' => $data[0],
            'action' => $data[1],
            'version' => $data[2],
            'user_hash' => $data[3],
            'date' => $data[4]
        ];
    }
}

// Oblicz podstawowe statystyki
$totalUsers = count(array_unique(array_column($stats, 'user_hash')));
$totalOrders = count(array_filter($stats, fn($s) => $s['action'] === 'order_processed'));

$summary = [
    'total_users' => $totalUsers,
    'total_orders' => $totalOrders,
    'last_30_days' => []
];

// Statystyki z ostatnich 30 dni
$dailyStats = [];
foreach ($stats as $stat) {
    $date = $stat['date'];
    if (!isset($dailyStats[$date])) {
        $dailyStats[$date] = ['users' => 0, 'orders' => 0];
    }
    
    if ($stat['action'] === 'extension_loaded') {
        $dailyStats[$date]['users']++;
    }
    if ($stat['action'] === 'order_processed') {
        $dailyStats[$date]['orders']++;
    }
}

$summary['last_30_days'] = array_slice($dailyStats, -30, null, true);

echo json_encode($summary, JSON_PRETTY_PRINT);
?>
