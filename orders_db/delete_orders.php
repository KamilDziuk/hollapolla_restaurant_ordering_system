<?php  
require "config/config.php";

$currentDateResult = $_POST['currentDateResult'];
$display = $_POST['display'];

try{

    if($currentDateResult === $display)
    {


}
else
{
   
    $sql = "DELETE FROM orders WHERE order_date = '$display'";

    $stmt = $pdo->prepare($sql);
 
    $stmt->execute();
   
   
    $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
 

};

} catch (PDOException $e) {
   
    echo "Error deleting to MySQL database" . $e->getMessage();
};
?>




