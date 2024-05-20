
const palos = ['H','C','S','D'];
const especiales = ['A','J','Q','K'];
let deck = [];
let puntosJugador = 0, puntosDealer = 0;

//referencias html

const btnPedirCarta = document.querySelector('#pedirCarta');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
const puntuacionJugador = document.querySelectorAll('small');
const divPlayerCards = document.querySelector('#player-cards');
const divDealerCards = document.querySelector('#dealer-cards');



//**  Esta funcion crea un nuevo deck y lo mezcla----------------------------------
const crearDeck = () => {
    for(let i = 2; i <= 10; i++){
        for(let palo of palos){
            deck.push(i+palo);
        }
    }
    for(let palo of palos){
        for(let especial of especiales){
            deck.push(especial+palo);
        }
    }
    deck = _.shuffle(deck); //utilizamos la libreria underscore
    return deck;
};
crearDeck();
//**  -------------------------------------------------------------------------------



//**  funcion para sacar una carta del deck------------------------------------------
const pedirCarta = () => {
    const carta = deck.pop();
    return carta;
};
//**  -------------------------------------------------------------------------------



//**  funcion para obtener el valor en puntos de la carta----------------------------
const cardValue = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
        : valor * 1;
}
//**  -------------------------------------------------------------------------------


// **  Turno del dealer (logica de juego de la casa) --------------------------------
const turnoDealer = (puntosJugador) => {
    do {
        // TODO timeout entre carta y carta
        const carta = pedirCarta();
        puntosDealer += cardValue(carta);
        puntuacionJugador[1].innerText = puntosDealer;

        const cartaGrafica = document.createElement('img');
        cartaGrafica.src = `assets/cartas/${carta}.png`;
        cartaGrafica.classList ='carta'
        divDealerCards.append(cartaGrafica);

    } while ((puntosDealer < puntosJugador) && (puntosJugador <= 21));
    setTimeout(() => {
        if ((puntosJugador > 21) || ((puntosJugador < puntosDealer) && (puntosDealer<=21))) {
            alert('Perdiste');
        } else if(( puntosJugador == 21 ) && ( puntosDealer != 21) ){
            alert('Ganaste');
        } else if( puntosDealer > 21 ){
            alert('Ganaste');
        } else {
            alert('Empate');
        }
    }, 500);
}


// ** -------------------------------------------------------------------------------

// ** botones --------------------------------------------------------------------

btnPedirCarta.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador += cardValue(carta);
    puntuacionJugador[0].innerText = puntosJugador;

    const cartaGrafica = document.createElement('img');
    cartaGrafica.src = `assets/cartas/${carta}.png`;
    cartaGrafica.classList ='carta'
    divPlayerCards.append(cartaGrafica);

    if (puntosJugador > 21) {
        btnPedirCarta.disabled = true;
        turnoDealer(puntosJugador);
    } else if (puntosJugador == 21 ) {
        btnPedirCarta.disabled = true;
        turnoDealer(puntosJugador);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;
    turnoDealer(puntosJugador);
});

btnNuevoJuego.addEventListener('click', () => {
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosDealer = 0;
    puntuacionJugador[0].innerText = 0;
    puntuacionJugador[1].innerText = 0;
    divPlayerCards.innerHTML = '';
    divDealerCards.innerHTML = '';
    btnPedirCarta.disabled = false;
    btnDetener.disabled = false;

});

