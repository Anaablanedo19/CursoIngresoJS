/* Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

//Ana Ablanedo

function mostrar() 
{
	//tomo el mes

	var mes = txtIdMes.value;

	switch(mes)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;

		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		
		default:
			alert("Ya pasamos el frio, ahora calor!!!");
	}


}//FIN DE LA FUNCIÓN