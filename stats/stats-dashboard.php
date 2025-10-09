<?php
// stats-dashboard.php
// Prosty dashboard do przeglądania statystyk wtyczki

// Ustaw kodowanie UTF-8
header('Content-Type: text/html; charset=UTF-8');
mb_internal_encoding('UTF-8');

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
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                <?php if (isset($error)) echo "<div class='error'>" . htmlspecialchars($error, ENT_QUOTES, 'UTF-8') . "</div>"; ?>
                <form method="POST" accept-charset="UTF-8">
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
$versions = [];
$hourlyActivity = [];
$weeklyStats = [];

foreach ($stats as $stat) {
    $date = $stat['date'];
    $hour = date('H', strtotime($stat['timestamp']));
    $weekDay = date('N', strtotime($stat['timestamp'])); // 1=Poniedziałek, 7=Niedziela
    
    // Statystyki dzienne
    if ($stat['action'] === 'extension_loaded') {
        $dailyUsers[$date] = ($dailyUsers[$date] ?? 0) + 1;
    }
    
    if ($stat['action'] === 'order_processed') {
        $dailyOrders[$date] = ($dailyOrders[$date] ?? 0) + 1;
    }
    
    // Statystyki wersji
    if (!isset($versions[$stat['version']])) {
        $versions[$stat['version']] = ['users' => 0, 'orders' => 0];
    }
    if ($stat['action'] === 'extension_loaded') {
        $versions[$stat['version']]['users']++;
    }
    if ($stat['action'] === 'order_processed') {
        $versions[$stat['version']]['orders']++;
    }
    
    // Aktywność godzinowa (tylko z ostatnich 7 dni)
    if (strtotime($stat['timestamp']) > strtotime('-7 days')) {
        $hourlyActivity[$hour] = ($hourlyActivity[$hour] ?? 0) + 1;
    }
    
    // Statystyki tygodniowe (tylko z ostatnich 30 dni)
    if (strtotime($stat['timestamp']) > strtotime('-30 days')) {
        $weeklyStats[$weekDay] = ($weeklyStats[$weekDay] ?? 0) + 1;
    }
}

// Oblicz średnie
$avgOrdersPerUser = $totalUsers > 0 ? round($totalOrders / $totalUsers, 1) : 0;
$last7Days = array_slice($dailyOrders, -7);
$avgOrdersPerDay = count($last7Days) > 0 ? round(array_sum($last7Days) / count($last7Days), 1) : 0;

// Aktywność w ostatnich 7 dniach
$recentActivity = array_slice($dailyUsers, -7);
$activeUsersLast7Days = array_sum($recentActivity);

// Najpopularniejsza wersja
$mostPopularVersion = '';
$maxOrders = 0;
foreach ($versions as $version => $data) {
    if ($data['orders'] > $maxOrders) {
        $maxOrders = $data['orders'];
        $mostPopularVersion = $version;
    }
}

// Nazwy dni tygodnia
$weekDayNames = [
    1 => 'Poniedziałek',
    2 => 'Wtorek', 
    3 => 'Środa',
    4 => 'Czwartek',
    5 => 'Piątek',
    6 => 'Sobota',
    7 => 'Niedziela'
];

// Analiza danych - sprawdź czy są realistyczne
$dataAnalysis = [
    'total_events' => count($stats),
    'first_event' => !empty($stats) ? min(array_column($stats, 'timestamp')) : 'Brak danych',
    'last_event' => !empty($stats) ? max(array_column($stats, 'timestamp')) : 'Brak danych',
    'unique_days' => count(array_unique(array_column($stats, 'date'))),
    'events_per_day' => count($stats) > 0 && count(array_unique(array_column($stats, 'date'))) > 0 ? 
                       round(count($stats) / count(array_unique(array_column($stats, 'date'))), 1) : 0
];

// Sprawdź czy dane wyglądają na testowe
$isTestData = false;
if ($avgOrdersPerUser > 50) {
    $isTestData = true;
    $testWarning = "⚠️ Wysokie wartości mogą wskazywać na dane testowe lub intensywne testowanie wtyczki.";
}

// Top użytkownicy (anonimowi)
$userActivity = [];
foreach ($stats as $stat) {
    $hash = substr($stat['user_hash'], 0, 8);
    if (!isset($userActivity[$hash])) {
        $userActivity[$hash] = ['loaded' => 0, 'orders' => 0];
    }
    if ($stat['action'] === 'extension_loaded') {
        $userActivity[$hash]['loaded']++;
    }
    if ($stat['action'] === 'order_processed') {
        $userActivity[$hash]['orders']++;
    }
}

// Sortuj użytkowników po aktywności
uasort($userActivity, fn($a, $b) => $b['orders'] <=> $a['orders']);

?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    
    <?php if ($isTestData): ?>
    <div style="background: #fff3cd; border: 1px solid #ffeaa7; color: #856404; padding: 15px; margin: 15px 0; border-radius: 5px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div><strong>⚠️ Uwaga:</strong> <?= $testWarning ?></div>
            <a href="?clear_test_data=1" onclick="return confirm('Czy na pewno chcesz wyczyścić wszystkie dane? Ta operacja jest nieodwracalna!')" 
               style="background: #dc3545; color: white; padding: 5px 10px; text-decoration: none; border-radius: 3px; font-size: 12px;">
               🗑️ Wyczyść dane testowe
            </a>
        </div>
    </div>
    <?php endif; ?>
    
    <?php 
    // Obsługa czyszczenia danych testowych
    if (isset($_GET['clear_test_data']) && $_GET['clear_test_data'] == '1') {
        if (file_exists($csvFile)) {
            unlink($csvFile);
            echo '<div style="background: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 15px; margin: 15px 0; border-radius: 5px;">
                    <strong>✅ Sukces:</strong> Wszystkie dane zostały wyczyszczone. Odśwież stronę.
                  </div>';
        }
    }
    ?>
    
    <div class="stat-box">
        <h3>👥 Łączna liczba użytkowników</h3>
        <div class="stat-number"><?= htmlspecialchars($totalUsers, ENT_QUOTES, 'UTF-8') ?></div>
    </div>
    
    <div class="stat-box">
        <h3>📦 Łączna liczba przetworzonych zamówień</h3>
        <div class="stat-number"><?= htmlspecialchars($totalOrders, ENT_QUOTES, 'UTF-8') ?></div>
    </div>

    <!-- Nowe statystyki -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 20px 0;">
        <div class="stat-box">
            <h3>📊 Średnia zamówień na użytkownika</h3>
            <div class="stat-number"><?= $avgOrdersPerUser ?></div>
        </div>
        
        <div class="stat-box">
            <h3>📅 Średnia zamówień dziennie (7 dni)</h3>
            <div class="stat-number"><?= $avgOrdersPerDay ?></div>
        </div>
        
        <div class="stat-box">
            <h3>🔥 Aktywni użytkownicy (7 dni)</h3>
            <div class="stat-number"><?= $activeUsersLast7Days ?></div>
        </div>
        
        <div class="stat-box">
            <h3>🏆 Najpopularniejsza wersja</h3>
            <div class="stat-number"><?= htmlspecialchars($mostPopularVersion, ENT_QUOTES, 'UTF-8') ?></div>
        </div>
    </div>

    <h2>📊 Statystyki wersji</h2>
    <table>
        <tr>
            <th>Wersja</th>
            <th>Użytkownicy</th>
            <th>Przetworzone zamówienia</th>
            <th>Średnia zam./użytkownik</th>
        </tr>
        <?php foreach ($versions as $version => $data): 
            $avgPerUser = $data['users'] > 0 ? round($data['orders'] / $data['users'], 1) : 0;
        ?>
        <tr>
            <td><?= htmlspecialchars($version, ENT_QUOTES, 'UTF-8') ?></td>
            <td><?= $data['users'] ?></td>
            <td><?= $data['orders'] ?></td>
            <td><?= $avgPerUser ?></td>
        </tr>
        <?php endforeach; ?>
    </table>

    <h2>🕐 Aktywność godzinowa (ostatnie 7 dni)</h2>
    <div style="display: flex; align-items: end; height: 200px; gap: 5px; margin: 20px 0; padding: 20px; background: #f9f9f9; border-radius: 5px;">
        <?php for ($h = 0; $h < 24; $h++): 
            $activity = $hourlyActivity[sprintf('%02d', $h)] ?? 0;
            $height = $activity > 0 ? max(20, ($activity / max($hourlyActivity ?: [1])) * 150) : 5;
        ?>
        <div style="background: #009244; width: 20px; height: <?= $height ?>px; display: flex; flex-direction: column; justify-content: end; position: relative;">
            <div style="position: absolute; bottom: -25px; font-size: 10px; text-align: center; width: 20px;"><?= $h ?></div>
            <?php if ($activity > 0): ?>
            <div style="position: absolute; top: -20px; font-size: 10px; text-align: center; width: 20px; color: #009244; font-weight: bold;"><?= $activity ?></div>
            <?php endif; ?>
        </div>
        <?php endfor; ?>
    </div>
    <p style="text-align: center; font-size: 12px; color: #666;">Godziny (0-23) - Łączna aktywność</p>

    <h2>📅 Aktywność w dniach tygodnia (ostatnie 30 dni)</h2>
    <table>
        <tr>
            <th>Dzień tygodnia</th>
            <th>Łączna aktywność</th>
            <th>Procent</th>
        </tr>
        <?php 
        $totalWeeklyActivity = array_sum($weeklyStats);
        for ($day = 1; $day <= 7; $day++): 
            $activity = $weeklyStats[$day] ?? 0;
            $percentage = $totalWeeklyActivity > 0 ? round(($activity / $totalWeeklyActivity) * 100, 1) : 0;
        ?>
        <tr>
            <td><?= $weekDayNames[$day] ?></td>
            <td><?= $activity ?></td>
            <td><?= $percentage ?>%</td>
        </tr>
        <?php endfor; ?>
    </table>

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
            <td><?= htmlspecialchars($date, ENT_QUOTES, 'UTF-8') ?></td>
            <td><?= htmlspecialchars($dailyUsers[$date] ?? 0, ENT_QUOTES, 'UTF-8') ?></td>
            <td><?= htmlspecialchars($dailyOrders[$date] ?? 0, ENT_QUOTES, 'UTF-8') ?></td>
        </tr>
        <?php endforeach; ?>
    </table>

    <h2>🏅 Top 10 użytkowników (anonimowi)</h2>
    <table>
        <tr>
            <th>Użytkownik (hash)</th>
            <th>Uruchomienia</th>
            <th>Przetworzone zamówienia</th>
            <th>Wydajność</th>
        </tr>
        <?php 
        $topUsers = array_slice($userActivity, 0, 10, true);
        foreach ($topUsers as $hash => $activity): 
            $efficiency = $activity['loaded'] > 0 ? round($activity['orders'] / $activity['loaded'], 1) : 0;
        ?>
        <tr>
            <td style="font-family: monospace;"><?= $hash ?>...</td>
            <td><?= $activity['loaded'] ?></td>
            <td><?= $activity['orders'] ?></td>
            <td><?= $efficiency ?> zam./sesja</td>
        </tr>
        <?php endforeach; ?>
    </table>

    <h2>🔍 Analiza danych</h2>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
            <div><strong>Łączne zdarzenia:</strong> <?= $dataAnalysis['total_events'] ?></div>
            <div><strong>Pierwsze zdarzenie:</strong> <?= htmlspecialchars($dataAnalysis['first_event'], ENT_QUOTES, 'UTF-8') ?></div>
            <div><strong>Ostatnie zdarzenie:</strong> <?= htmlspecialchars($dataAnalysis['last_event'], ENT_QUOTES, 'UTF-8') ?></div>
            <div><strong>Unikalne dni:</strong> <?= $dataAnalysis['unique_days'] ?></div>
            <div><strong>Zdarzeń dziennie:</strong> <?= $dataAnalysis['events_per_day'] ?></div>
            <div><strong>Stosunek zam./użytk.:</strong> <?= $avgOrdersPerUser ?></div>
        </div>
    </div>

    
    <div style="margin-top: 30px; padding: 15px; background: #e8f5e9; border-radius: 5px; border-left: 4px solid #009244;">
        <h3 style="margin-top: 0; color: #009244;">📋 Podsumowanie</h3>
        <ul style="margin: 0; padding-left: 20px;">
            <li><strong>Łącznie użytkowników:</strong> <?= $totalUsers ?></li>
            <li><strong>Łącznie zamówień:</strong> <?= $totalOrders ?></li>
            <li><strong>Aktywność ostatnie 7 dni:</strong> <?= $activeUsersLast7Days ?> użytkowników</li>
            <li><strong>Najpopularniejsza wersja:</strong> <?= htmlspecialchars($mostPopularVersion, ENT_QUOTES, 'UTF-8') ?></li>
            <li><strong>Średnia wydajność:</strong> <?= $avgOrdersPerUser ?> zamówień/użytkownik</li>
        </ul>
    </div>
    
    <p><small>Ostatnia aktualizacja: <?= date('Y-m-d H:i:s') ?></small></p>
</body>
</html>
