
function saludar(nombre) {
    // console.log(arguments)
    // console.log('Hola ' + nombre);
    return [1, 2];

    // Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return');
}


const saludar2 = function (nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

// const tuEdad = (edad) => {
//     console.log('Tu edad es : ' + edad + ' años');
// }

// const programacion = (respuesta) => {
//     console.log('Aprendiendo a programar : ' + respuesta);
// }

const retornoDeSaludar = saludar('Marco', 22, false, 'México');
// console.log(retornoDeSaludar[0], retornoDeSaludar[1]
// ); // 1
// saludar2('Marco');
// saludarFlecha();
// saludarFlecha2('Marco Rocha');
// tuEdad(22);
// programacion(true);

function sumar(a, b) {
    return a + b;

}

const sumar2 = ( a, b) =>  a + b;




function getAleatorio(){
    return Math.random();
}

// En una función de flecha, que no tenga llaves{}
// getAleatorio2()

const getAleatorio2 = () => Math.random();


console.log(getAleatorio2());
