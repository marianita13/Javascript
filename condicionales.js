// ###################################
// Condicionales, bucles y arrays
//####################################

//Desarrolado por: Mariana Acero Velasquez

//Ejemplos con condicionales if y else 

let booleano = false
if (booleano==true){
    console.log("Real One")
} else{
    console.log("Fake One")
} 


let numero=21
if (numero==21){
    console.log("Eres un 21")
}
else if (numero==13){
    console.log("Eres un 13")
}
else{
    console.log("No es un numero")
}


//bucle while con break
let booleanito =true
while (booleanito==true){
    console.log("Hola")
break

}

//bucle for
for (let i=0; i<21; i++) {
    console.log(i)
}


//Arrays
let arreglo = ["Marianita", "Duban", "Campus"]
console.log(arreglo[0])
//Se insertan elementos 
arreglo.push("lands")
console.log(arreglo)
//se eliminan elementos
arreglo.pop()
console.log(arreglo)
//buscar un elemento en el array
console.log(arreglo.indexOf("lands"))
