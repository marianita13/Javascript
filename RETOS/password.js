const readline = require('readline');

const pregunta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

newPassword = ""

const preguntas = () => {
    rl.question("Ingrese la primera contraseña: ", (pass1) => {
        const isLower1 = (str) => pass1 === str.toLowerCase();
        if (isLower1 == true){
            rl.question("Ingrese la segunda contraseña: ", (pass2) => {
                const isLower2 = (str) => pass2 === str.toLowerCase();
                
            })
        }else{
            console.log("La primera contraseña contiene mayusculas")
            preguntas()
        }
        
    })
}