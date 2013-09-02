// JavaScript Document

//Defino los caminos posibles
var rnd = 0;
var prod = Array();
prod[1]='pregunta1-protInic.php';
prod[2]='pregunta1-estarenforma.php';
prod[3]='pregunta1-sensible.php';
prod[4]='pregunta1-vitalidad.php';
prod[5]='pregunta1-vitalplus.php';


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
		var rand = Math.random();
		var nombre=$('#nombre').val();
		var apellido=$('#apellido').val();
		var email=$('#email').val();
		var provincia=$('#provincia').val();
		
		while(rnd<1 || rnd>5)
		{
			rnd= Math.floor((Math.random()*10)+1);
		}
		
		var loc =prod[rnd];
		
		try {
			$.ajax({
				type: "GET",
				url: "cargarDatos.php",
				dataType: "html",
				data: {
					nombre: nombre,
					apellido: apellido,
					email: email,
					provincia: provincia,
					tecnologia: loc,
					rand: rand
				},
				success:function(dati, textStatus, XMLHttpRequest){
					if(dati=='OK')
					{	
						setTimeout(function() {
							    document.location.href = loc;
						}, 200);

					}else if(dati>0){
						alert('Ya estás participando con el número '+dati+'.');
					}else{
						alert('error dat:'+dati);
					}
				},
				error:function (xhr, ajaxOptions, thrownError){
					alert('thrownError: '+thrownError);
				}    
			});
		} catch (err){
			alert('error en try');
		}
	}
}

function cargarRespuesta(pregunta,respuesta,location)
{
	var rand = Math.random();
	try {
		$.ajax({
			type: "GET",
			url: "cargarRespuesta.php",
			dataType: "html",
			data: {
				pregunta: pregunta,
				respuesta: respuesta,
				rand: rand
			},
			success:function(dati, textStatus, XMLHttpRequest){
				if(dati==1)
				{
					if(location!='')
					{
						$('.siguiente').css('display','block');
						$('.siguiente').click(function(){
							document.location.href = location;
						});
					}
				}else if(dati==0)
				{
					alert('error dat:'+dati);
				}
			},
			error:function (xhr, ajaxOptions, thrownError){
				alert(thrownError);
			}    
		});
	} catch (err){
		alert('error en try');
	}
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