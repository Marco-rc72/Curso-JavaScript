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

    class Heroe extends Persona {
        clan = 'sin clan';

        constructor(nombre,codigo,frase){

            super(nombre,codigo,frase);

            this.clan = 'Los Avengers'; 
        }
        quienSoy(){
            console.log(`Soy ${this.nombre}, del Clan ${this.clan}`);
            super.quienSoy();
        }
    }


const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');

console.log(spiderman);
spiderman.quienSoy();