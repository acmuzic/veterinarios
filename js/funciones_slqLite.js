// JavaScript Document

//Defino los caminos posibles
var prod = Array();
prod[1]='pregunta1-protInic.html';
prod[2]='pregunta1-estarenforma.html';
prod[3]='pregunta1-sensible.html';
prod[4]='pregunta1-vitalidad.html';
prod[5]='pregunta1-vitalplus.html';

//Busco el valor de random de 1 a 5
var rnd = Math.floor((Math.random()*10)+1);

while(rnd<1 || rnd>5)
{
	rnd= Math.floor((Math.random()*10)+1);
}
var loc = prod[rnd];

var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1; //Months are zero based
var curr_year = d.getFullYear();
fecha = curr_year + "-" + curr_month + "-" + curr_date;



//Abro la BBDD
var db = window.openDatabase("ProPlanVeterinarios", "1.0", "ProPlanVeterinarios", 400000);
db.transaction(consultarRegistrosDB, errorSeleccionDB, successDB);

function consultarRegistrosDB(tx){
	tx.executeSql('SELECT ALL FROM SUSCRIPTORES');
	var len = results.rows.length;
	alert("DEMO table: " + len + " rows found.");
	for (var i=0; i<len; i++){
		alert("Row = " + i + " email = " + results.rows.item(i).email + " nombre = " + results.rows.item(i).nombre + " apellido = " + results.rows.item(i).apellido + " provincia = " + results.rows.item(i).provincia + " fecha = " + results.rows.item(i).fecha + " tecnologia = " + results.rows.item(i).tecnologia + " pregunta1 = " + results.rows.item(i).pregunta1);
	}
}

//alert('random: '+rnd);
//alert('fecha: '+fecha);

// Populate the database
//
function cargarParticipanteDB(tx) {
	
	//tx.executeSql('DROP TABLE IF EXISTS SUSCRIPTORES');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS SUSCRIPTORES (nombre, apellido, email unique, provincia, tecnologia, pregunta1, pregunta2, pregunta3, fecha)');
	
	//Cargo los datos
	var nombre=$('#nombre').val();
	var apellido=$('#apellido').val();
	var email=$('#email').val();
	var provincia=$('#provincia').val();
	var tecnologia =prod[rnd];
	var pregunta1 = '';
	var pregunta2 = '';
	var pregunta3 = '';
	
	alert('INSERT INTO SUSCRIPTORES (nombre, apellido, email, provincia, tecnologia, pregunta1, pregunta2, pregunta3, fecha) VALUES ("'+nombre+'","'+apellido+'","'+email+'","'+provincia+'","'+tecnologia+'","'+pregunta1+'","'+pregunta2+'","'+pregunta3+'","'+fecha+'")');
	
	tx.executeSql('INSERT INTO SUSCRIPTORES (nombre, apellido, email, provincia, tecnologia, pregunta1, pregunta2, pregunta3, fecha) VALUES ("'+nombre+'","'+apellido+'","'+email+'","'+provincia+'","'+tecnologia+'","'+pregunta1+'","'+pregunta2+'","'+pregunta3+'","'+fecha+'")');
}

// Transaction error callback
//
function errorAlmacenamientoDB(tx, err) {
	alert("Error almacenando datos: "+err);
}

function errorActualizacionDB(tx, err) {
	alert("Error actualizando datos: "+err);
}

function errorActualizacionDBTX(tx, err) {
	alert("Error actualizando datos: "+err);
}

function errorSeleccionDB(tx, err) {
	alert("Error seleccionando datos: "+err);
}

// Transaction success callback
//
function successDB() {
	alert("Datos guardados");
	setTimeout(function() {
			document.location.href = loc;
	}, 200);
}

// Populate the database
//
function cargarRespuestaDB(tx) {
	tx.executeSql('SELECT * FROM SUSCRIPTORES ORDER BY fecha DESC LIMIT 1', [], obtenerEmailDB, errorSeleccionDB);
}

//Obtener ultimo email cargado

var emailGlobal = '';

function obtenerEmailDB(tx, results) {
	var len = results.rows.length;
	alert("DEMO table: " + len + " rows found.");
	for (var i=0; i<len; i++){
		alert("Row = " + i + " ID = " + results.rows.item(i).email);
		emailGlobal=results.rows.item(i).email;
	}
	alert('emailGlobal: '+emailGlobal);
	alert('UPDATE SUSCRIPTORES SET '+preguntaGlobal+'='+respuestaGlobal+' WHERE email='+emailGlobal);
	tx.executeSql('UPDATE SUSCRIPTORES SET '+preguntaGlobal+'='+respuestaGlobal+' WHERE email='+emailGlobal, [], [], errorActualizacionDB);
}


function cargarDatos()
{
	if($('#email').val()=='' || !isEmail($('#email').val()))
	{
		$('#email').focus();
	}
	else if($('#nombre').val()=='')
	{
		$('#nombre').focus();
	 
	}
	else if($('#apellido').val()=='')
	{
		$('#apellido').focus();
	}
	else if($('#provincia').val()=='' || $('#provincia').val()=='PROVINCIA')
	{
		$('#provincia').focus();
	}else{
		db.transaction(cargarParticipanteDB, errorAlmacenamientoDB, successDB);
	}
}

//Variables globales
var preguntaGlobal = '';
var respuestaGlobal = '';
var locationGlobal = '';

function cargarRespuesta(pregunta,respuesta,location)
{
	preguntaGlobal = pregunta;
	respuestaGlobal = respuesta;
	locationGlobal = location;
	
	db.transaction(cargarRespuestaDB, errorActualizacionDBTX, successDB);

	$('.siguiente').css('display','block');
	$('.siguiente').click(function(){
		document.location.href = location;
	});
}


function isEmail(str)
{
	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	if (filter.test(str))
	{
		testresults=true;
	}else{
		testresults=false;
	}
	return testresults;
}

/*
			-----------------------------------------  Preguntas  ---------------------------------------------
			
*/

//pregunta1ProtInic

function pregunta1ProtInic(rta)
{
	if(rta==1)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado').css('display','block');
	$('.resultado').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta1',respuesta,'pregunta2-protInic.php');
}

function pregunta2ProtInic(rta)
{
	if(rta==1)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado2ProtInic').css('display','block');
	$('.resultado2ProtInic').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta2',respuesta,'pregunta3-protInic.php');
}

function pregunta3ProtInic(rta)
{
	if(rta==4)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado3ProtInic').css('display','block');
	$('.resultado3ProtInic').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta3',respuesta,'pregunta4-protInic.php');
}

//pregunta1estarenforma

function pregunta1estarenforma(rta)
{
	if(rta==3)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado').css('display','block');
	$('.resultado').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta1',respuesta,'pregunta2-estarenforma.php');
}

function pregunta2estarenforma(rta)
{
	if(rta==2)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado2Forma').css('display','block');
	$('.resultado2Forma').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta2',respuesta,'pregunta3-estarenforma.php');
}

function pregunta3estarenforma(rta)
{
	if(rta==5)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado3Forma').css('display','block');
	$('.resultado3Forma').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta3',respuesta,'pregunta4-estarenforma.php');
}


//pregunta1sensible

function pregunta1sensible(rta)
{
	if(rta==4)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado').css('display','block');
	$('.resultado').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta1',respuesta,'pregunta2-sensible.php');
}

function pregunta2sensible(rta)
{
	if(rta==3)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado2Sen').css('display','block');
	$('.resultado2Sen').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta2',respuesta,'pregunta3-sensible.php');
}

function pregunta3sensible(rta)
{
	if(rta==4)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado3Sen').css('display','block');
	$('.resultado3Sen').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta3',respuesta,'pregunta4-sensible.php');
}




//pregunta1vitalidad

function pregunta1vitalidad(rta)
{
	if(rta==2)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado').css('display','block');
	$('.resultado').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta1',respuesta,'pregunta2-vitalidad.php');
}

function pregunta2vitalidad(rta)
{
	if(rta==2)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado2Vita').css('display','block');
	$('.resultado2Vita').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta2',respuesta,'pregunta3-vitalidad.php');
}

function pregunta3vitalidad(rta)
{
	if(rta==4)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado3Vita').css('display','block');
	$('.resultado3Vita').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta3',respuesta,'pregunta4-vitalidad.php');
}



//pregunta1vitalplus

function pregunta1vitalplus(rta)
{
	if(rta==5)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado').css('display','block');
	$('.resultado').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta1',respuesta,'pregunta2-vitalplus.php');
}

function pregunta2vitalplus(rta)
{
	if(rta==1)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado2Plus').css('display','block');
	$('.resultado2Plus').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta2',respuesta,'pregunta3-vitalplus.php');
}

function pregunta3vitalplus(rta)
{
	if(rta==6)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado3PlusInic').css('display','block');
	$('.resultado3PlusInic').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta3',respuesta,'pregunta4-vitalplus.php');
}