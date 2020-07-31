 /*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
 
 // Ana Ablanedo

 function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio.");
			break;
		
		default: 
			alert("Hace calor");
			break;
		
	}

}//FIN DE LA FUNCIÓN