<?php  
require "config/config.php";

$codeNumber = $_POST['codeNumber'];
$orderNumber = $_POST['orderNumber'];
$quantity = $_POST['quantity'];
$first_name = $_POST['first_name'];
$email = $_POST['email'];
$addres = $_POST['addres'];
$order_date = $_POST['order_date'];
$order_time = $_POST['order_time'];
$message= $_POST['message'];



$sql = "INSERT INTO orders (codeNumber, orderNumber, quantity, first_name, email, addres, order_date, order_time, message) 
VALUES (  '$codeNumber', '$orderNumber','$quantity', '$first_name', '$email', '$addres','$order_date' ,'$order_time', '$message')";
if($conn -> query($sql) === TRUE)
{

}

?>