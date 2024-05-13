
const palos = ['H','C','S','D'];
const especiales = ['A','J','Q','K'];
let deck = [];
let puntosJugador = 0, puntosDealer = 0;

//referencias html

const btnPedirCarta = document.querySelector('#pedirCarta');
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
    console.log(deck);
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

// Turno del dealer (logica de juego de la casa) ------------------------------------

// ** -------------------------------------------------------------------------------


//botones

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
        alert('Perdiste Zoquete');
    } else if (puntosJugador == 21 ) {
        btnPedirCarta.disabled = true;
        alert('sacaste 21');
    }
});