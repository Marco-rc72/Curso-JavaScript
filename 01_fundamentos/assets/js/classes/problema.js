
const mar = {
    nombre: 'Marco',
    edad: 22,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 35,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}


function Persona(nombre, edad) {
    console.log('Se ejecuto esta línea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const marco = new Persona('Marco', 22);
const peter = new Persona('Pedo', 35);
marco.imprimir();
peter.imprimir();