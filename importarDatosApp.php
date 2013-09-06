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
	
	$lineas=explode('|',$_GET['datos']);
	
	//echo $_GET['datos'];
	//echo '<br>lineas: '.count($lineas);
	
	for($i=1;$i<count($lineas);$i++)
	{
		//Tomo los valores
		$val=explode(';',$lineas[$i]);
		
		if(isset($val[0]) && isset($val[1]) && isset($val[2]) && isset($val[3]) && isset($val[4]) && isset($val[5]))
		{	
			$nombre=$val[0];
			$apellido=$val[1];
			$email=$val[2];
			$provincia=$val[3];
			$tecnologia=$val[4];
			$carga_fecha=$val[5];
			$pregunta1='';
			$pregunta2='';
			$pregunta3='';
			
			if(isset($val[6]))
			{
				$pregunta1=$val[6];
			}
			if(isset($val[7]))
			{
				$pregunta2=$val[7];
			}
			if(isset($val[8]))
			{
				$pregunta3=$val[8];
			}
			
			$response = $db->checkParticipante($email);
			
			if($response!=false)
			{
				//echo $response;
			}else{
				$response = $db->cargarDatosApp($nombre,$apellido,$email,$provincia,$tecnologia,$carga_fecha,$pregunta1,$pregunta2,$pregunta3);
				
				if(!$response)
				{
					echo 'Error: insert';
				}
			}
		}
	}//cierro for i
	
	echo 'OK';
} 
?>