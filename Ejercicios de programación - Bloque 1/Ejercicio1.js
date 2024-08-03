'use strict'
/*
JS que pida dos números y nos diga cual es el mayor, el menor O si son iguales 
*/

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    alert("Los datos fueron ingresados mal se volverán a solicitar")
    numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}

if (numero1 == numero2) {
    alert("Los números son iguales")
} else if (numero1 > numero2) {
    alert("El numero mayor es: " + numero1 + ", y el numero menor es: " + numero2);
} else if (numero1 < numero2) {
    alert("El numero mayor es: " + numero2 + ", y el numero menor es: " + numero1);
} else {
    alert("Introduce un numero valido")
}