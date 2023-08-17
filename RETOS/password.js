////////////////////////////////////////////
//         TRABAJO DE CONTRASEÑAS         //
///////////////////////////////////////////

// Desarrollado por Mariana Acero Velasquez

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let newPassword = '';

// Para verificar si una cadena es minúscula
const minuscula = (str) => /^[a-z]+$/.test(str) && !/\d/.test(str);


// Acabar la función y mostrar la nueva contraseña
const finalizar = () => {
    rl.close();
    console.log({newPassword});
};

// Preguntas de las contraseñas
const passwords = () => {
    rl.question("Ingrese la primera contraseña: ", (password1) => {
        rl.question("Ingrese la segunda contraseña: ", (password2) => {
            // if (password1.length !== password2.length) {
            //     console.clear()
            //     console.log("Las contraseñas no tienen la misma longitud");
            //     passwords(); // Volver a preguntar
            // } 

            if ((password1.length < 1 || password1.length > 25000) || (password2.length < 1 || password2.length > 25000)) {
                console.clear()
                console.log("La contraseña debe tener más caracteres que 1 y menos que 25000");
                passwords(); // Volver a preguntar
            } else if (!minuscula(password1) || !minuscula(password2)) {
                console.clear()
                console.log('Las contraseñas solo deben tener letras minúsculas y no deben tener numeros.');
                passwords(); // Volver a preguntar
            } else {
                const longitud = Math.max(password1.length,password2.length)
                for (i = 0; i < longitud; i++) {
                    if(i<password1.length){
                        newPassword+=password1[i]
                    }
                    if (i<password2.length){
                        newPassword+=password2[i]
                    }
                }
                finalizar();
            }
        });
    });
};
console.clear()
passwords();