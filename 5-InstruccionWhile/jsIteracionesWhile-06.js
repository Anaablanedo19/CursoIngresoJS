function mostrar()
{
    var suma;
	var promedio;
	var contador;
	var numero;
	var acumulador;
	var i = 0;
	
	contador=0;
	acumulador=0;
	
	/*numero1 = prompt("Ingrese el primer numero");
	numero1 = parseInt(numero1);

	numero2 = prompt("Ingrese el segundo numero");
	numero2 = parseInt(numero2);

	numero3 = prompt("Ingrese el tercer numero");
	numero3 = parseInt(numero3);

	numero4 = prompt("Ingrese el cuarto numero");
	numero4 = parseInt(numero4);

	numero5 = prompt("Ingrese el quinto numero");
	numero5 = parseInt(numero5);
	suma = numero1+numero2+numero3+numero4+numero5; 
	*/

	while(i<5)
	{
		numero = parseInt(prompt("Ingrese un numero"));

		acumulador = acumulador  + numero;

		i = i + 1; //i++
	}

	promedio = acumulador/5;

	txtIdSuma.value=acumulador;

	txtIdPromedio.value=promedio;



	

}//FIN DE LA FUNCIÓN