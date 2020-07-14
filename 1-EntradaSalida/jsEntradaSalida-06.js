/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;

	primerNumero= parseInt(txtIdNumeroUno.value);
	segundoNumero= parseInt(txtIdNumeroDos.value);

	// primerNumero = parseInt(primernumero)

	var resultado = primerNumero + segundoNumero;
	alert("La suma es "+ resultado);
}

