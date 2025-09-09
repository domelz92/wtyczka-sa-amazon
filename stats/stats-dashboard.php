<?php
// stats-dashboard.php
// Prosty dashboard do przeglądania statystyk wtyczki

// Proste zabezpieczenie hasłem
session_start();

if (!isset($_SESSION['stats_logged_in'])) {
    if (isset($_POST['password'])) {
        // Zmień to hasło na swoje!
        if ($_POST['password'] === 'Implemo2026!!') {
            $_SESSION['stats_logged_in'] = true;
        } else {
            $error = 'Nieprawidłowe hasło!';
        }
    }
    
    if (!isset($_SESSION['stats_logged_in'])) {
        ?>
        <!DOCTYPE html>
        <html>
        <head>
            <title>Logowanie - Statystyki</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 50px; text-align: center; }
                .login-form { max-width: 300px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
                input { width: 100%; padding: 10px; margin: 10px 0; }
                button { background: #009244; color: white; padding: 10px 20px; border: none; border-radius: 3px; cursor: pointer; }
                .error { color: red; margin: 10px 0; }
            </style>
        </head>
        <body>
            <div class="login-form">
                <h2>🔐 Dostęp do statystyk</h2>
                <?php if (isset($error)) echo "<div class='error'>$error</div>"; ?>
                <form method="POST">
                    <input type="password" name="password" placeholder="Hasło" required>
                    <button type="submit">Zaloguj</button>
                </form>
            </div>
        </body>
        </html>
        <?php
        exit;
    }
}

// Opcja wylogowania
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: ' . $_SERVER['PHP_SELF']);
    exit;
}

$csvFile = __DIR__ . '/extension_stats.csv';

if (!file_exists($csvFile)) {
    die('Brak danych statystycznych');
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

// Oblicz statystyki
$totalUsers = count(array_unique(array_column($stats, 'user_hash')));
$totalOrders = count(array_filter($stats, fn($s) => $s['action'] === 'order_processed'));
$dailyUsers = [];
$dailyOrders = [];

foreach ($stats as $stat) {
    $date = $stat['date'];
    
    if ($stat['action'] === 'extension_loaded') {
        $dailyUsers[$date] = ($dailyUsers[$date] ?? 0) + 1;
    }
    
    if ($stat['action'] === 'order_processed') {
        $dailyOrders[$date] = ($dailyOrders[$date] ?? 0) + 1;
    }
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Statystyki Wtyczki Amazon-Sellasist</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .stat-box { background: #f0f0f0; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .stat-number { font-size: 24px; font-weight: bold; color: #009244; }
        table { border-collapse: collapse; width: 100%; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #009244; color: white; }
    </style>
</head>
<body>
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <h1>📊 Statystyki Wtyczki Amazon-Sellasist</h1>
        <a href="?logout=1" style="background: #dc3545; color: white; padding: 8px 15px; text-decoration: none; border-radius: 3px;">🚪 Wyloguj</a>
    </div>
    
    <div class="stat-box">
        <h3>👥 Łączna liczba użytkowników</h3>
        <div class="stat-number"><?= $totalUsers ?></div>
    </div>
    
    <div class="stat-box">
        <h3>📦 Łączna liczba przetworzonych zamówień</h3>
        <div class="stat-number"><?= $totalOrders ?></div>
    </div>
    
    <h2>📈 Statystyki dzienne (ostatnie 30 dni)</h2>
    <table>
        <tr>
            <th>Data</th>
            <th>Aktywni użytkownicy</th>
            <th>Przetworzone zamówienia</th>
        </tr>
        <?php
        $last30Days = array_slice(array_keys($dailyUsers + $dailyOrders), -30);
        rsort($last30Days);
        
        foreach ($last30Days as $date): ?>
        <tr>
            <td><?= $date ?></td>
            <td><?= $dailyUsers[$date] ?? 0 ?></td>
            <td><?= $dailyOrders[$date] ?? 0 ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
    
    <p><small>Ostatnia aktualizacja: <?= date('Y-m-d H:i:s') ?></small></p>
</body>
</html>
