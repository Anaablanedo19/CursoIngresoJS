/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{ 
	var importe;
	var resultado;
	var porcentaje;

	var importe = txtIdImporte.value;
	var importe = parseInt(importe)

	//var porcentaje = importe * 0.25;
	var porcentaje = importe * 25 / 100;
	var resultado = importe - porcentaje;
	
	//var resultado= txtIdResultado.value;
	//var resultado= importe * 0.75;

	txtIdResultado.value= resultado;
	
}
