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
carga_fecha = curr_year + "-" + curr_month + "-" + curr_date;



//Abro el storage
var storage = window.localStorage;
var itemActual = storage.length;

function consultarRegistros(){
	var len = storage.length;
	alert("Local storage: " + len + " items found.");
	alert('itemActual: '+itemActual);
	for (var i=0; i<len; i++){
		alert('Item '+i+': '+storage.getItem(i));
	}
	//Limpiar el local storage
	//storage.clear();
}

//consultarRegistros();

//alert('random: '+rnd);
//alert('carga_fecha: '+carga_fecha);

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
		//Cargo los datos
		var nombre = $('#nombre').val();
		var apellido = $('#apellido').val();
		var email = $('#email').val();
		var provincia = $('#provincia').val();
		var tecnologia = prod[rnd];
		
		//alert('itemActual: '+itemActual+' - nombre="'+nombre+'";apellido="'+apellido+'";email="'+email+'";provincia="'+provincia+'"');
		
		storage.setItem(itemActual, 'nombre="'+nombre+'";apellido="'+apellido+'";email="'+email+'";provincia="'+provincia+'";tecnologia="'+tecnologia+'";carga_fecha="'+carga_fecha+'"');
		
		setTimeout(function() {
			document.location.href = loc;
		}, 200);
	}
}


function cargarRespuesta(pregunta,respuesta,location)
{
	itemActual=itemActual-1;
	var anteriorValor = storage.getItem(itemActual);
	//alert('anteriorValor: '+anteriorValor);
	var nuevoValor = anteriorValor+';'+pregunta+'="'+respuesta+'"';
	//alert('nuevoValor: '+nuevoValor);
	
	storage.setItem(itemActual, nuevoValor);
	
	//alert('Valor actualizado: '+storage.getItem(itemActual));
	
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
	cargarRespuesta('pregunta1',respuesta,'pregunta2-protInic.html');
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
	cargarRespuesta('pregunta2',respuesta,'pregunta3-protInic.html');
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
	cargarRespuesta('pregunta3',respuesta,'pregunta4-protInic.html');
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
	cargarRespuesta('pregunta1',respuesta,'pregunta2-estarenforma.html');
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
	cargarRespuesta('pregunta2',respuesta,'pregunta3-estarenforma.html');
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
	cargarRespuesta('pregunta3',respuesta,'pregunta4-estarenforma.html');
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
	cargarRespuesta('pregunta1',respuesta,'pregunta2-sensible.html');
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
	cargarRespuesta('pregunta2',respuesta,'pregunta3-sensible.html');
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
	cargarRespuesta('pregunta3',respuesta,'pregunta4-sensible.html');
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
	cargarRespuesta('pregunta1',respuesta,'pregunta2-vitalidad.html');
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
	cargarRespuesta('pregunta2',respuesta,'pregunta3-vitalidad.html');
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
	cargarRespuesta('pregunta3',respuesta,'pregunta4-vitalidad.html');
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
	cargarRespuesta('pregunta1',respuesta,'pregunta2-vitalplus.html');
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
	cargarRespuesta('pregunta2',respuesta,'pregunta3-vitalplus.html');
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
	cargarRespuesta('pregunta3',respuesta,'pregunta4-vitalplus.html');
}

/*-------------------------------- EXPORTACION -----------------------------------*/
function exportarDatos()
{
	var confirma = confirm('¿Está seguro de exportar los datos?');
	
	if(confirma==true)
	{
		var datos = '';
		var len = storage.length;
		for (var i=0; i<len; i++){
			datos = datos+"|"+storage.getItem(i);
		}
		
		try {
				$.ajax({
					type: "GET",
					url: "http://proplan.qaserver5.com/app/importarDatosApp.php",
					dataType: "html",
					data: {
						datos: datos
					},
					success:function(dati, textStatus, XMLHttpRequest){
						if(dati=='OK')
						{
							alert('Datos exportados');
							//Limpiar el local storage
							storage.clear();
						}else{
							alert('Error intente nuevamente. Puede que no esté conectado a internet.');
						}
					},
					error:function (xhr, ajaxOptions, thrownError){
						alert('Error: '+thrownError);
					}    
				});
			} catch (err){
				alert('Error intente nuevamente. Puede que no esté conectado a internet (try).');
			}
		}
	}