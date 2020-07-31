/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra 
Norte, Sur, Este u Oeste*/

//Ana Ablanedo

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("punto cardinal sur.");
			break;
		
		case "Ushuaia":
			alert("punto cardinal sur.");
			break;

		case "Mar del plata":
			alert("punto cardinal este.");
			break;

		case "Cataratas":
			alert("punto cardinal norte.");
			break;
	}

}//FIN DE LA FUNCIÓN

