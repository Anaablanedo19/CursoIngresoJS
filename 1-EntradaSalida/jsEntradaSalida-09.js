/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	/*var sueldo =parseInt(txtIdSueldo.value);

	var aumento = sueldo * 1.1

	txtIdResultado.value= aumento;*/

	var sueldo;
	var aumento;
	
    var sueldo = txtIdSueldo.value;
	var sueldo = parseInt(sueldo);

	//var aumento = txtIdResultado.value;
	//var aumento = sueldo/10+sueldo;
	// porcentaje = sueldo * 0.1
	//resultado = porcentaje + 100

	var aumento = sueldo * 1.1;
	txtIdResultado.value= aumento; 
}
