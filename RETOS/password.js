const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const longitud_minima = 1;
const longitud_maxima = 25000;

let newPassword = '';

// Para verificar si una cadena es minúscula
const minuscula = (str) => /^[a-z]+$/.test(str) && /\d/.test(str);


// Acabar la función y mostrar la nueva contraseña
const finalizar = () => {
    rl.close();
    console.log(`Nueva contraseña generada: ${newPassword}`);
};

// Preguntas de las contraseñas
const passwords = () => {
    rl.question("Ingrese la primera contraseña: ", (password1) => {
        rl.question("Ingrese la segunda contraseña: ", (password2) => {
            if (password1.length !== password2.length) {
                console.clear()
                console.log("Las contraseñas no tienen la misma longitud");
                passwords(); // Volver a preguntar
            } else if ((password1.length < longitud_minima || password1.length > longitud_maxima) || (password2.length < longitud_minima || password2.length > longitud_maxima)) {
                console.clear()
                console.log("La contraseña debe tener más caracteres que 1 y menos que 25000");
                passwords(); // Volver a preguntar
            } else if (!minuscula(password1) || !minuscula(password2)) {
                console.clear()
                console.log('Las contraseñas solo deben tener letras minúsculas.');
                passwords(); // Volver a preguntar
            } else {
                for (let i = 0; i < password1.length; i++) {
                    newPassword += password1[i] + password2[i];
                }
                finalizar();
            }
        });
    });
};
console.clear()
passwords();