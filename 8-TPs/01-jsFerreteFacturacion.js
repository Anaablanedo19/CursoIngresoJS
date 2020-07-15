/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () // txtIdPrecioUno txtIdPrecioDos txtIdPrecioTres
{
    var precio1;
    var precio2;
    var precio3;
    var resultado;

    var precio1 = txtIdPrecioUno.value;
    var precio1 = parseInt(precio1)

    var precio2 = txtIdPrecioDos.value;
    var precio2 = parseInt(precio2);

    var precio3 = txtIdPrecioTres.value;
    var precio3 = parseInt(precio3);

    var resultado = precio1 + precio2 + precio3;
    alert("La suma de los tres numeros ingresados es: "+resultado);
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var promedio;

    var precio1 = txtIdPrecioUno.value;
    var precio1 = parseInt(precio1)

    var precio2 = txtIdPrecioDos.value;
    var precio2 = parseInt(precio2);

    var precio3 = txtIdPrecioTres.value;
    var precio3 = parseInt(precio3);

    var promedio = (precio1+precio2+precio3) / 3;

    alert("El promedio es: "+promedio); 
}

function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var sumaprecios;
    var Iva;
    var total;

    var precio1 = txtIdPrecioUno.value;
    var precio1 = parseInt(precio1)

    var precio2 = txtIdPrecioDos.value;
    var precio2 = parseInt(precio2);

    var precio3 = txtIdPrecioTres.value;
    var precio3 = parseInt(precio3);

    var sumaprecios = precio1+precio2+precio3;
    var Iva = sumaprecios * 21/100; // 0.21
    
    var total = sumaprecios + Iva;
    alert("El precio final mas Iva es: "+total);

}