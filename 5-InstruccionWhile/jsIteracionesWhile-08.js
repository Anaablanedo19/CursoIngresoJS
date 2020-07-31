/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.

perdir numero dentro del bucle
analizar si el numero es postivo o negativo dentro del bucle
acumularlo dentro del acumulador correspondiente
mostrar resultado fuera del bucle 
*/
function mostrar()
{
	//declarar variable
	var contador; //numero
	var positivos = 0; // va a sumar 
	var negativos = 1; // va a multiplcar 
	var seguir;
	
	// armar do while
	do
	{
		contador = prompt("Ingrese el numero");
		contador = parseInt(contador);
		//analizar si son positivos o negativos los numeros
		
		if(contador > 0)
		{ 
			positivos = positivos + contador; //acumular los numeros 
		}
		else
		{
			negativos = negativos *  contador;
        }
		 
		seguir = prompt("Quiere ingresar otro numero");
	}
	while (seguir == "si"); // condicionar si seguir o no


    txtIdSuma.value = positivos; // mostrar resultado fuera del bucle
	txtIdProducto.value = negativos; 

}//FIN DE LA FUNCIÓN



