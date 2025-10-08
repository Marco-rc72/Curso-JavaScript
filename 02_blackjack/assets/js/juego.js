

(() => {
    'use strict'



    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];


    // let puntosJugador = 0,
    //     puntosComputadora = 0;
    let puntosJugadores = [];


    // Referencias de hmtl
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHtml = document.querySelectorAll('small');

    // Esta funcion inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

    }

    // Esta funcion crea una nueva baraja
    const crearDeck = () => {

        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }

        return _.shuffle(deck);
    }


    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'Ya no hay cartas en la baraja';
        }

        return deck.pop();
    }

    // Funcion para tener el valor de la carta y evaluar si es numero
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;

    }


    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);

    }

    // Turno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHtml[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];

    }

    // turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length -1);
            crearCarta(carta, puntosJugadores.length - 1);

            if(puntosMinimos > 21)
                break;


        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Nadie gana :(');
            } else if (puntosMinimos > 21) {
                alert('Computadora gana')
            } else if (puntosComputadora > 21) {
                alert('Jugador gana!')
            } else {
                alert('Computadora Gana')
            }
        }, 100);

    }


    // Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            console.warn('Lo siento, perdiste!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);


        } else if (puntosJugador === 21) {
            console.warn('21, Genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });



    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugadores);
    });



    btnNuevo.addEventListener('click', () => {

        console.clear();
        inicializarJuego();
        // deck = [];
        // deck = crearDeck();

        // puntosJugador = 0;
        // puntosComputadora = 0;

        // puntosHtml[0].innerText = 0;
        // puntosHtml[1].innerText = 0;

        // divCartasComputadora.innerHTML = '';
        // divCartasJugador.innerHTML = '';

        // btnPedir.disabled = false;
        // btnDetener.disabled = false;
    });

})();




