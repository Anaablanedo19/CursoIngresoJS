/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre = prompt('Ingrese su nombre');
	txtIdNombre.value=nombre;  // Si lo pongo al reves da igual al tres
	//document.getElementById('txtIdNombre').value=nombre;
    alert(txtIdNombre.value);
}

