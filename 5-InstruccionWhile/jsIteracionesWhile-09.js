/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{	
	/*var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;*/

	// declarar variables
	var numeroIngresado;
	var maximo;
	var minimo;
	var respuesta;

	do{  // crear bucle do while mientras usuario quiera
		 
		// durante bucle...
	    // pedir numero
	    numero = parseInt(prompt("Ingrese un numero"));

		// debo reconocer que estoy pidiendo por primera vez 
		

	// si es asi analizamos si es mayor al maximo o minimo
	// caso contrario me fijo si tengo un nuevo maximo o nuevo minimo 
	// y los actualizo de ser necesario 

		numeroIngresado = prompt("Quiere ingresar otro numero?");

	} while(respuesta == "si");

	// despues del bucle
	// muestro informacion (osea max y minimo)



}//FIN DE LA FUNCIÓN