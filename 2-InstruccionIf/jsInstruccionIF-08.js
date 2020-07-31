/*
Hacerlo en el ejercicio 08 del IF:

Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
	
	Ablanedo Ana
*/

function mostrar() 
{
	var edad;
	var estadoCivil;
	var mayorDeEdad;
	var menorDeEdad;

	mayorDeEdad = "Se responsable.";
	menorDeEdad = "Respeta a tus mayores.";

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad < 18) 
	{
		if (edad > 12) 
		{
			switch (estadoCivil) 
			{
				case "Soltero":
					alert(menorDeEdad);
					break;
				default:
					alert("Sos muy joven para no ser soltero. " + menorDeEdad);
					break;
			}
		}
		else 
		{
			alert("Hagan la tarea. " + menorDeEdad);
		}
	}
	else if (edad > 17) 
	{
		if (edad > 59) 
		{
			alert("Sos persona de riesgo. " + mayorDeEdad);
		}

		else 
		{
			switch (estadoCivil) 
			{
				case "Soltero":
					alert("A vivir la vida. " + mayorDeEdad);
					break;

				case "Divorciado":
					alert("A intentarlo nuevamente. " + mayorDeEdad);
					break;

				case "Casado":
					alert("A disfrutar la pareja. " + mayorDeEdad);
					break;
			}
		}
	}
}   
