
// Ana Ablanedo 

function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	if(edad>12) 
	{ 
		if(edad<18)
	  {
		alert("Esa persona es adolescente.");
	  }
	}

}//FIN DE LA FUNCIÓN


/*el 4
function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	//test 15 , 12 , 18 ,2, 33
	if(edad<18)
	{
		if(edad>12)
		{
			alert("adolescente");
		}
	}

	if(edad<18 && edad>12)
	{
		alert("adolescente");
	}

	// error forzado
	if(edad<18 || edad>12)// todos entra siempre
	{
		alert("adolescente");
	}
	
	*/


