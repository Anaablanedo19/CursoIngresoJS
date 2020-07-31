/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");

	while(!(claveIngresada == "utn750"))
	{
		alert("Reingresar contraseña");
		claveIngresada = prompt("ingrese el número clave.");
	}
	
	alert("INGRESO");
}//FIN DE LA FUNCIÓN
