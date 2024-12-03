<?php  
require "config/config.php";

try {
    
    $sql = "SELECT * FROM orders";
    $stmt = $pdo->prepare($sql);


    $stmt->execute();


    $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);


} catch (PDOException $e) {

    echo "Error downloading to MySQL database" . $e->getMessage();
}
?>
