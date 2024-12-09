<?php 


ini_set('session.use_only_cookies', 1);
ini_set('session.use_strict_mode', 1);


session_set_cookie_params([
    
    'lifetime' => 3600, 
    'domain' => 'localhost', 
    'path' => '/', 
    'secure' => false,
    'httponly' => false 
]);


session_start();

$_SESSION["username"] = "test";

echo $_SESSION["username"];

session_regenerate_id(true); 


if (!isset($_SESSION['last_regeneration'])) {

    session_regenerate_id(true);
    $_SESSION['last_regeneration'] = time(); 
} else {
  
    $interval = 3600; 

 
    if (time() - $_SESSION['last_regeneration'] >= $interval) {
   
        session_regenerate_id(true);
        $_SESSION['last_regeneration'] = time();
    }
}



?>