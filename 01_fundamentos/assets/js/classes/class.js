
// Clase persona con parametros
class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log('Hola a todos, soy un metodo stático');
    }

    // Paametros
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    // Constructor inicializada con los parametros de la clase persona
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        // Referencia a los parametros de la clase
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }


    // setter
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    // getter
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    // Metodo dentro de la clase para imprimir quienSoy
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }
    // Metodo dentro de la clase para imprimir miFrase
    miFrase() {
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}


// Constantes para crear una nueva persona asignadoles valores
const spiderman = new Persona('Peter Parker', 'Spideman', 'Soy tu amigable amigo el hombre araña');
// const batman = new Persona('Bruce Wayne', 'Batman', 'El señor de la noche, mitad hombre mitad animal');


// Llamada a los metodos de la clase 
spiderman.miFrase();


spiderman.setComidaFavorita = 'El pie de cereza de la tía May';


// console.log(spiderman.getComidaFavorita);

console.log('Conteo statico', Persona._conteo);
console.log(Persona.conteo);

Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);