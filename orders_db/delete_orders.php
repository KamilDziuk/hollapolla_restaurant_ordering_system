<?php  
require "config/config.php";

$currentDateResult = $_POST['currentDateResult'];
$display = $_POST['display'];



    if($currentDateResult === $display)
    {


}
else
{
    $sql = "DELETE FROM orders WHERE order_date = '$display'";

$orders = $stmt = $pdo->query($sql) -> fetchAll(MYSQLI_ASSOC); 


};

?>




