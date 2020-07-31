/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta= "si";
	promedio = 0;

	do
	{
		contador = prompt("Agregue un numero.");
		contador = parseInt(contador);
		acumulador = acumulador + contador;

		promedio++;
		//promedio = parseInt(promedio);

		respuesta = prompt("Quiere agregar otro numero?");

	} while(respuesta == "si");

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/promedio;

}//FIN DE LA FUNCIÓN