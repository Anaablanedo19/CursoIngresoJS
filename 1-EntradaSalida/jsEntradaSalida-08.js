/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;

	var dividendo = txtIdNumeroDividendo.value;
	var dividendo = parseInt(dividendo)

	var divisor = txtIdNumeroDivisor.value;
	var divisor = parseInt(divisor);

    var resto = dividendo%divisor;
	alert("El resto es "+ resto);

}
