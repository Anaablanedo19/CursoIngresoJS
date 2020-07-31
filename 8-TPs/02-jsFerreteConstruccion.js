/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () //txtIdLargo txtIdAncho txtIdRadio 
{
    var largo;
    var ancho;
    var perimetro;
    var totalalambre;

    var largo = txtIdLargo.value;
    var largo = parseInt(largo);

    var ancho = txtIdAncho.value;
    var ancho = parseInt(ancho);

    var perimetro = 2*(largo+ancho);
    var totalalambre = perimetro * 3;
    alert('Se necesita '+totalalambre+' m de alambre para el rectangulo.');
}
function Circulo () 
{
    var radio;
    var perimetro;
    var totalalambre;

    var radio = txtIdRadio.value;
    var radio = parseInt(radio);

    var perimetro  = 2 * Math.PI * radio;
    var totalalambre = perimetro * 3;
    alert("Se necesita "+totalalambre+" total de alambre.");
}
function Materiales () 
{
    var largo;
    var ancho;
    var cemento;
    var cal;

    var largo = txtIdLargo.value;
    var largo = parseInt(largo);

    var ancho = txtIdAncho.value;
    var ancho = parseInt(ancho);

    var cemento = ancho*2; 
    var cal = largo*3;

    alert('Para este rectangulo se necesita '+cemento+' bolsas de cemento y ' +cal+' bolsas de cal.');

}