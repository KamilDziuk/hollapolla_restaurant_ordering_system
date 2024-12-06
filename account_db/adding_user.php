<?php 
require "orders_db/config/config.php";

if($_SERVER['REQUEST_METHOD'] == "POST" )

{
    $first_name = $_POST['first_name'];
$pwd = $_POST['pwd'];
$email = $_POST['email'];
 
try
{
   


$sql ="INSERT INTO users (first_name, pwd, email)  VALUES (:first_name, :pwd, :email);";

$stmt = $pdo -> prepare( $sql);

$stmt -> bindParam(":first_name", $first_name);

$stmt -> bindParam(":pwd", $pwd);

$stmt -> bindParam(":email", $email);

$stmt -> execute();
$pdo = null;
$stmt = null;

die();

}
catch(PDOException $e)
{
"Error adding user". $e -> getMessage(). "br";
};



}
else
{

};










?>

