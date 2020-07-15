/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var Fahrenheit;
    var conversion;

    var Fahrenheit = txtIdTemperatura.value;

    var conversion = (Fahrenheit - 32)* 5/9;
    var conversion = parseInt(conversion);
    
    alert(Fahrenheit+" grados Fahrenheit son "+conversion+" centrigados.");

    //Como hacer que redondee para arriba¿?
    
}

function CentigradosFahrenheit () 
{
    var Centígrados;
    var conversion;

    var Centígrados = txtIdTemperatura.value;

    var conversion = (Centígrados* 9/5) + 32;
    var conversion = parseInt(conversion);
    
    alert(Centígrados+" centígrados son "+conversion+" Fahrenheit.");
}
