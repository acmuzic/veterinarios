// JavaScript Document

//Defino los caminos posibles
var prod = Array();
prod[1]='pregunta1-optistart.html';
prod[2]='pregunta1-optilife.html';
prod[3]='pregunta1-optiage.html';
prod[4]='pregunta1-optifit.html';
prod[5]='pregunta1-optiderma.html';
prod[6]='pregunta1-optifortis.html';
prod[7]='pregunta1-optienrich.html';


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
	storage.clear();
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
		
		storage.setItem(itemActual, nombre+';'+apellido+';'+email+';'+provincia+';'+tecnologia+';'+carga_fecha);
		
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
	var nuevoValor = anteriorValor+';'+respuesta;
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

//pregunta1optistart

function pregunta1optistart(rta)
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
	cargarRespuesta('pregunta1',respuesta,'pregunta2-optistart.html');
}

function pregunta2optistart(rta)
{
	if(rta==1)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado2optistart').css('display','block');
	$('.resultado2optistart').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta2',respuesta,'pregunta3-optistart.html');
}

function pregunta3optistart(rta)
{
	if(rta==4)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado3optistart').css('display','block');
	$('.resultado3optistart').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta3',respuesta,'pregunta4-optistart.html');
}







//pregunta1optilife

function pregunta1optilife(rta)
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
	cargarRespuesta('pregunta1',respuesta,'pregunta2-optilife.html');
}

function pregunta2optilife(rta)
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
	cargarRespuesta('pregunta2',respuesta,'pregunta3-optilife.html');
}

function pregunta3optilife(rta)
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
	cargarRespuesta('pregunta3',respuesta,'pregunta4-optilife.html');
}



//pregunta1optiage

function pregunta1optiage(rta)
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
	cargarRespuesta('pregunta1',respuesta,'pregunta2-optiage.html');
}

function pregunta2optiage(rta)
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
	cargarRespuesta('pregunta2',respuesta,'pregunta3-optiage.html');
}

function pregunta3optiage(rta)
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
	cargarRespuesta('pregunta3',respuesta,'pregunta4-optiage.html');
}




//pregunta1optifit

function pregunta1optifit(rta)
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
	cargarRespuesta('pregunta1',respuesta,'pregunta2-optifit.html');
}

function pregunta2optifit(rta)
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
	cargarRespuesta('pregunta2',respuesta,'pregunta3-optifit.html');
}

function pregunta3optifit(rta)
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
	cargarRespuesta('pregunta3',respuesta,'pregunta4-optifit.html');
}








//pregunta1optiderma

function pregunta1optiderma(rta)
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
	cargarRespuesta('pregunta1',respuesta,'pregunta2-optiderma.html');
}

function pregunta2optiderma(rta)
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
	cargarRespuesta('pregunta2',respuesta,'pregunta3-optiderma.html');
}

function pregunta3optiderma(rta)
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
	cargarRespuesta('pregunta3',respuesta,'pregunta4-optiderma.html');
}








//pregunta1optifortis

function pregunta1optifortis(rta)
{
	if(rta==6)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado').css('display','block');
	$('.resultado').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta1',respuesta,'pregunta2-optifortis.html');
}

function pregunta2optifortis(rta)
{
	if(rta==5)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado2optifortis').css('display','block');
	$('.resultado2optifortis').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta2',respuesta,'pregunta3-optifortis.html');
}

function pregunta3optifortis(rta)
{
	if(rta==4)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado3optifortis').css('display','block');
	$('.resultado3optifortis').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta3',respuesta,'pregunta4-optifortis.html');
}



//pregunta1optienrich

function pregunta1optienrich(rta)
{
	if(rta==7)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado').css('display','block');
	$('.resultado').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta1',respuesta,'pregunta2-optienrich.html');
}

function pregunta2optienrich(rta)
{
	if(rta==3)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado2optienrich').css('display','block');
	$('.resultado2optienrich').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta2',respuesta,'pregunta3-optienrich.html');
}

function pregunta3optienrich(rta)
{
	if(rta==5)
	{
		respuesta=1;
	}else{
		respuesta=0;
	}
	//Animación respuesta
	$('.resultado3optienrich').css('display','block');
	$('.resultado3optienrich').transition({opacity:100}, 1500, 'ease');
	cargarRespuesta('pregunta3',respuesta,'pregunta4-optienrich.html');
}

/*-------------------------------- EXPORTACION -----------------------------------*/
function exportarDatos()
{
	var len = storage.length;
	
	if(len == 0)
	{
		alert('No hay datos para exportar.');
	}else{
		var confirma = confirm('¿Está seguro de exportar '+len+' los datos?');
		
		if(confirma==true)
		{
			var datos = '';
			alert('Se exportarán '+len+' datos.');
			
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
								alert('Los datos fueron exportados correctamente.');
								//Limpiar el local storage
								storage.clear();
							}else{
								alert('Error: '+dati+'. Puede que no esté conectado a internet.');
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
	}