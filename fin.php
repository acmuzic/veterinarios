<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

session_start();
$id = $_SESSION['id'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<title>Pro Plan</title>
<meta name="description" content="">
<meta name="author" content="">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
<?php
if (preg_match('/iphone|ipod|android/',strtolower($_SERVER['HTTP_USER_AGENT'])))
{
?>
<script type='text/javascript' charset='utf-8'>
    // Hides mobile browser's address bar when page is done loading.
      window.addEventListener('load', function(e) {
        setTimeout(function() { window.scrollTo(0, 1); }, 1);
      }, false);
</script>
<?php
}
?>
<link href="css/style.css" rel="stylesheet">
<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
<script type="text/javascript" src="js/jquery.transit.min"></script>
<script type="text/javascript" src="js/funciones.js"></script>
</head>

<body>
<div class="main" onClick="window.location.href='index.php';" style="cursor:pointer;">
 <div class="header"> <img src="img/titulo.jpg" width="1111" height="118" alt="ProPlan"></div>
 
 <div class="finPerro"><img src="img/finPerro.png" ></div>
 <div class="finTexto">
 <h1>¡Gracias por jugar con<br> ProPlan!</h1>
 <h2>Ya estas participando por el sorteo de la 3 netbooks. </h2>
 <h2>Tu número para el sorteo es: <span style="color:#F00;"><?=$id?></span></h2>
 <img src="img/finPaquetes.png" ></div>
</div>
<!---main--> 

</body>
</html>