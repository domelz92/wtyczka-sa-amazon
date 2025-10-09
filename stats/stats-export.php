<?php
// stats-export.php
// API do eksportu statystyk w formacie JSON

header('Content-Type: application/json; charset=UTF-8');
mb_internal_encoding('UTF-8');

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

// Oblicz statystyki dzienne
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

// Przekształć w tablicę z datami jako wartościami
$last30DaysArray = [];
foreach ($dailyStats as $date => $data) {
    $last30DaysArray[] = [
        'date' => $date,
        'users' => $data['users'],
        'orders' => $data['orders']
    ];
}

// Sortuj po dacie (najnowsze pierwsze) i ogranicz do 30 dni
usort($last30DaysArray, fn($a, $b) => strtotime($b['date']) - strtotime($a['date']));
$last30DaysArray = array_slice($last30DaysArray, 0, 30);

// Finalna struktura
$result = [
    'total_users' => $totalUsers,
    'total_orders' => $totalOrders,
    'last_30_days' => $last30DaysArray
];

echo json_encode($result, JSON_PRETTY_PRINT);
?>
