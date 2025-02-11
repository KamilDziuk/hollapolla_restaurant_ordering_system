<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/displaying_orders.css">
    <link rel="stylesheet" type="text/css" href="css/orders.css">
    <link rel="icon" type="image/png" href="image/browserpictogram.png">
  <link rel="apple-touch-icon" href="image/icon-96x96.png">
  <link rel="apple-touch-icon" sizes="152x152" href="image/icon-152x152.png">
  <link rel="apple-touch-icon" sizes="167x167" href="image/icon-167x167.png">
  <link rel="apple-touch-icon" sizes="180x180" href="image/icon-180x180.png">
  <link rel="manifest" href="manifest.json">
  
    <title>Displaying Orders</title>
</head>
<body>
<div id="ordersForm">
    <div id="printOrders"></div>
    </div>
    <div id="contenerImage">
  


<img id="imageOrders0"  src="image/menu_image_nl_0.webp">
<img id="imageOrders1"  src="image/menu_image_nl_1.webp">
<img id="imageOrders2"  src="image/menu_image_nl_2.webp">
<img id="imageOrders3"  src="image/menu_image_nl_3.webp">
<img id="imageOrders4"  src="image/menu_image_nl_4.webp">
<img id="imageOrders5"  src="image/menu_image_nl_5.webp">



</div>
<?php require "orders_db/get_orders.php";

?>
<script>
let date = new Date();
  
  let currentDateResult =  date.getFullYear() + "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;
let orders =  <?php echo json_encode($orders)  ?>






let display =  orders.map( allOrders => {
    return `${allOrders.order_date}`;
})


let displayOrders =  orders.map( displayOrders => {
    return `<br>|<br> 
   Code number: ${displayOrders.codeNumber},<br>
    Order number: ${displayOrders.orderNumber},<br>
  Quantity: ${displayOrders.quantity},<br>
  First name: ${displayOrders.first_name},<br>
  Email: ${displayOrders.email},<br>
   Addres: ${displayOrders.addres},<br>
  Order date: ${displayOrders.order_date},<br>
  Order time: ${displayOrders.order_time},<br>
Message: ${displayOrders.message} <br> |`;
}).join(`\n`)

document.querySelector("#printOrders").innerHTML = displayOrders;
formDataDate = new FormData()

formDataDate.append('currentDateResult',currentDateResult);
formDataDate.append('display',display[0]);

fetch('orders_db/delete_orders.php',
    {
method: "POST",
body: formDataDate
    }
)

setInterval(() => {
    location.reload();
},15000)
</script>
</body>
</html>
