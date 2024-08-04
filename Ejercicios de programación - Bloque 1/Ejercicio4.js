'use strict'
/*
JS que muestre todo los números impares entre dos números introducidos por el usuario
*/

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));


if (isNaN(numero1 || numero2)){
    alert("Los datos fueron ingresados mal se volverán a solicitar")
    window.location.reload();
} else if (numero1 < numero2){
    document.write("<h1> De " + numero1 + " a " + numero2 + " están los números impares: </h1>")
    for (var i = numero1; i <= numero2; i++) {
        if (i % 2 != 0) {
            document.write(i + "<br>");
        }
    }
} else if (numero1 > numero2){
    document.write("<h1> De " + numero2 + " a " + numero1 + " están los números impares: </h1>")
    for (var i = numero2; i <= numero1; i++) {
        if (i % 2 != 0) {
            document.write(i + "<br>");
        }
    }
} else {
    alert("Los datos deben de ser diferentes")
    window.location.reload();
}