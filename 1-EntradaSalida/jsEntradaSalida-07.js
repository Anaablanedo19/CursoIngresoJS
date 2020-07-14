/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	/*var numero1 = parseInt(txtIdNumeroUno.value);
	  var numero2 = parseInt(txtIdNumeroDos.value); MAL*/
	  
	  var numero1;
	  var numero2;
	  var suma;

	  var numero1=txtIdNumeroUno.value;
	  var numero2=txtIdNumeroDos.value;
	  
	  numero1=parseInt(numero1);
	  numero2=parseInt(numero2);
	  var suma = numero1+numero2;
	  
      alert("La suma es "+ suma);	
}

function restar()
{
	var numero1;
	var numero2;
	var resta;

	var numero1=txtIdNumeroUno.value;
	var numero2=txtIdNumeroDos.value;
	
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	var resta = numero1-numero2;
	
	alert("La resta es "+ resta);
	 
}

function multiplicar()
{ 
	  var numero1;
	  var numero2;
	  var multiplicacion;

	  var numero1=txtIdNumeroUno.value;
	  var numero2=txtIdNumeroDos.value;
	  
	  numero1=parseInt(numero1);
	  numero2=parseInt(numero2);
	  var multiplicacion = numero1*numero2;
	  
      alert("La multiplicacion es "+ multiplicacion);
	
}

function dividir()
{
	  var numero1;
	  var numero2;
	  var dividir;

	  var numero1=txtIdNumeroUno.value;
	  var numero2=txtIdNumeroDos.value;
	  
	  numero1=parseInt(numero1);
	  numero2=parseInt(numero2);
	  var dividir = numero1/numero2;
	  
      alert("La divison es "+ dividir);
}

