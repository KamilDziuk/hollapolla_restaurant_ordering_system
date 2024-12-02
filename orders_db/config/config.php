


<?php

$config = array(
    'servername' => '',
    'username' => '',
    'password' => '',
    'dbname' => ''
);

try {
 
    $dsn = "mysql:host=" . $config['servername'] . ";dbname=" . $config['dbname'] . ";charset=utf8mb4";
    $pdo = new PDO($dsn, $config['username'], $config['password']);


    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    
} catch (PDOException $e) {
  
    echo "Error: " . $e->getMessage();
}
?>


