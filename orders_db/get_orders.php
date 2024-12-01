<?php  
require "config/config.php";
$sql = "SELECT * FROM orders";
$orders =  $conn -> query($sql) -> fetch_all(MYSQLI_ASSOC); 
$conn -> close();
?>