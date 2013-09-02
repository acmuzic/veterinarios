<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

//Chequeo si están todo los campos
if(!isset($_GET['nombre']) || !isset($_GET['apellido']) || !isset($_GET['email']) || !isset($_GET['provincia']))
{
	die('Error: faltan campos');
}
else
{
	//Inicio sesión
	session_start();
	
	//Incluyo los scripts necesarios
	include('ddbb/db.inc.php');

	$db = new db();
	
	$response = $db->checkParticipante($_GET['email']);
	
	if($response!=false)
	{
		echo $response;
	}else{
		$response = $db->cargarDatos($_GET['nombre'],$_GET['apellido'],$_GET['email'],$_GET['provincia'],$_GET['tecnologia']);
		
		if($response){
			$_SESSION['id'] = $response;
			echo 'OK';
		}else{
			echo 'Error: insert';
		}
	}
} 
?>