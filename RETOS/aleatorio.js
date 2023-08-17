////////////////////////////////////////////
//         TRABAJO DE CONTRASEÑAS         //
///////////////////////////////////////////

// Desarrollado por Mariana Acero Velasquez

function aleatorio(max) {
    return Math.floor(Math.random()*max+1)
}

let numeros = []
for (i=0;i<10;i++){
    number=aleatorio(10)
    numeros.push(number)
} 
let size = numeros.length
for (i=0;i<size;i++){
    console.log(`${i}: ${numeros[i]}`)
}

// let numeros = []
// function llenar() {
//     for (i=0;i<10;i++){
//         numeros.push(Math.floor(Math.random()*10))
//     }
//     return numeros
// }

// function imprimir(){
//     for (i=0;i<numeros;i++){
//         console.log("xd");
//         console.log(`Posición: [${i}] Valor: ${numeros[i]}` )
//     }
// }
// llenar()
// imprimir()