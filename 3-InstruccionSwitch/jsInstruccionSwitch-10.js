/*una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
 informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/

//Ana Ablanedo

function mostrar()
{
	var destino;  
	var estacion;

	var destino =txtIdDestino.value;
	var estacion =txtIdEstacion.value;

	switch(destino)
	{
		case "Bariloche":
			switch(estacion)
			{
				case "Invierno":
				case "Otoño":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Mar del plata":
		case "Cataratas":
			switch(estacion)
			{
				case "Invierno":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
					break;
			}
			break;
		case "Cordoba":
			switch(estacion)
			{
				case "Otoño":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
		
	}
	 

}//FIN DE LA FUNCIÓN