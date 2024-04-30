let juegos = [ 'Zelda', 'Mario', 'Metroid', 'Chrono' ];
let largo = juegos.length
console.log('Largo: ', largo);
let primero = juegos[0];
console.log('Primero: ', primero);
let ultimo = juegos[largo - 1];
console.log('Ultimo: ', ultimo);


juegos.forEach(elemento => {
    console.log(elemento);
});

nuevaLongitud = juegos.push('F-Zero');
console.log(nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift('Mega Man');
console.log(nuevaLongitud, juegos);

let juegoEliminado = juegos.pop();
console.log(juegoEliminado, juegos);

console.log(juegos);

let jurgosBorradosS = juegos.splice(1,2);
console.log(jurgosBorradosS);
console.log(juegos);

let indiceJuego = juegos.indexOf('Metroid');
console.log(indiceJuego);