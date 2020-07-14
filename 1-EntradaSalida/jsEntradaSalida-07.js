/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);
	 
    var resultado = numeroUno+numeroDos
	alert("La suma es "+ resultado);	
}

function restar()
{
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);
	 
    var resultado = numeroUno-numeroDos
	alert("La resta es "+ resultado);
	
}

function multiplicar()
{ 
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);
	 
    var resultado = numeroUno*numeroDos
	alert("La multiplicación es "+ resultado);
	
}

function dividir()
{
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);
	 
    var resultado = numeroUno/numeroDos
	alert("La division es "+ resultado);
}

