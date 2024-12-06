<?php 
require "orders_db/config/config.php";

if($_SERVER['REQUEST_METHOD'] == "POST" )

{
    $first_name = $_POST['first_name'];
$pwd = $_POST['pwd'];
$email = $_POST['email'];
$upadte_first_name = $_POST['upadte_first_name'];

try
{
   
$sql ="UPDATE users SET first_name = :first_name, pwd = :pwd, email = :email WHERE first_name = :upadte_first_name  ";

$stmt = $pdo -> prepare( $sql);

$stmt -> bindParam(":first_name", $first_name);

$stmt -> bindParam(":pwd", $pwd);

$stmt -> bindParam(":email", $email);

$stmt -> bindParam(":upadte_first_name", $upadte_first_name);

$stmt -> execute();
$pdo = null;
$stmt = null;

die();

}
catch(PDOException $e)
{
"Error update user". $e -> getMessage(). "br";
};



}
else
{

};










?>

