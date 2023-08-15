// ###################################
// Ejercicio Numeros
//####################################

//Desarrolado por: Mariana Acero Velasquez

//Escribe una función que tome un array de números y un valor objetivo
//como entrada, y devuelva un array de arrays que contengan pares de
//números en el array original que sumen al valor objetivo.


function arreglo(numeros, suma) {
    let numbers = [];
    for (i = 0; i < numeros.length; i++) {
        for (p = i+1; p < numeros.length; p++) { 
            if (numeros[i] + numeros[p] == suma) { 
                numbers.push([numeros[i], numeros[p]]);
            }
        }
    }
    return numbers;
}

console.log(arreglo([2, 4, 3, 6, 9, 8], 10));

// Hay un artículo en promoción, si el cliente está entre los 20 primeros clientes, tiene 30%
// de descuento y entre los primeros 50 clientes, un 10% de descuento. Haga una
// función que permita saber cuánto descuento tiene el cliente, según el orden en que llegó.

function orden(numero){
    if (numero>=1 && numero<=20){
        descuento = console.log("Obtienes un descuento del 20%");
    }
    else if (numero>20 && numero<=50){
        descuento = console.log("Obtienes un descuento del 10%");
    }
    else{
        descuento = console.log("Obtienes un descuento del 0%");
    }
    return descuento
}
orden(90)
