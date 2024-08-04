'use strict'
/*
JS que muestre todo los números divisores de un prompt 
*/

var numero = parseInt(prompt('Introduce un numero positivo', 0));

if (isNaN(numero) || numero < 0){
    alert("El dato fue ingresado mal se volverá a solicitar")
    window.location.reload();
} else if (numero > 0){
    document.write("<h1> Los divisores de " + numero + " son: </h1>")
    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            document.write(i + "<br>");
        }
    }
} 