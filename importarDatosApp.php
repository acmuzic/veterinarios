<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

//Chequeo si están todo los campos
if(!isset($_GET['datos']))
{
	die('Error: faltan campos');
}
else
{
	//Incluyo los scripts necesarios
	include('ddbb/db.inc.php');
	$db = new db();
	
	$lineas=split('|',$_GET['datos']);
	
	for($i=0;$i<count($lineas);$i++)
	{
		//Tomo los valores
		
		$val=split(';',$lineas[$i]);
		
		$nombre=$val[0];
		$apellido=$val[1];
		$email=$val[2];
		$provincia=$val[3];
		$tecnologia=$val[4];
		$carga_fecha=$val[5];
		$pregunta1=$val[6];
		$pregunta2=$val[7];
		$pregunta3=$val[8];
		
		$response = $db->checkParticipante($email);
		
		if($response!=false)
		{
			echo $response;
		}else{
			$response = $db->cargarDatosApp($nombre,$apellido,$email,$provincia,$tecnologia);
			
			if($response){
				echo 'OK';
			}else{
				echo 'Error: insert';
			}
		}
	}//cierro for i
} 
?>