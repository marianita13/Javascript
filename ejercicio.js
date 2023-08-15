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
        for (p = 1; p < numeros.length; p++) { 
            if (numeros[i] + numeros[p] == suma) { 
                parejas.push([numeros[i], numeros[p]]);
            }
        }
    }
    
    return numbers;
}

console.log(arreglo([2, 4, 3, 6, 9, 8], 10));