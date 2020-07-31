/* al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */

//Ana Ablanedo

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch(mesDelAño)
	{
		case "Febrero":
			alert("tiene 28 días.");
			break;

		case "Septiembre":
		case "Abril":
		case "Junio":
		case "Noviembre":
			alert("tiene 30 días");
			break;
		
		default:
			alert("tiene 31 días.");
	}
	
}//FIN DE LA FUNCIÓN