<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

//Inicio sesión
session_start();

//Chequeo si están todo los campos
if(!isset($_SESSION['id']) || !isset($_GET['pregunta']) || !isset($_GET['respuesta']))
{
	die('Error: faltan campos');
}
else
{	
	//Incluyo los scripts necesarios
	include('ddbb/db.inc.php');

	$db = new db();
	
	$response = $db->cargarRespuesta($_SESSION['id'],$_GET['pregunta'],$_GET['respuesta']);
	
	if($response)
	{
		echo 1;
	}else{
		echo 'Error: update';
	}
} 
?>