<?php  
require "config/config.php";

$codeNumber = $_POST['codeNumber'];
$orderNumber = $_POST['orderNumber'];
$quantity = $_POST['quantity'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$addres = $_POST['addres'];
$data = $_POST['data'];
$time = $_POST['time'];
$message= $_POST['message'];
$sql = "INSERT INTO orders (codeNumber, orderNumber, quantity, lastName, email, addres, data, time, message) 
VALUES (  '$codeNumber', '$orderNumber','$quantity', '$lastName', '$email', '$addres','$data' ,'$time', '$message')";
if($conn -> query($sql) === TRUE)
{

}
$conn -> close();
?>