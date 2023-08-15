//########################################
//Tipos de funciones
//########################################

//Desarrolado por: Mariana Acero Velasquez

//funcion que no retorna ni recibe parametros
function mensaje(){
    console.log("Esto es un mensaje")
}
mensaje()
console.log(mensaje())

//funcion que retorna pero no recibe parametros
function retorno(){
    return "Hola world"
}
retorno()
console.log(typeof retorno())

//funcion que no retorna pero recibe parametros
function area(b,h)
{
    resultado=b*h
    console.log(resultado)
}
area(3,8)

//funcion que retorna y recibe parametros
function concatenacion (a,b){
    return a+b
}
console.log(concatacion("campus", "lands"))
function calcular(x){
    actual=2023
    final=2023-x
    console.log("El año en el que naciste fue:"+final)
}
calcular(23)

//celcius a fahrenheit
function calcular(x){
    valor=32+(9*x/5)
    console.log("La conversion de celcius a fahrenheit es:"+val )
}
calcular(21)