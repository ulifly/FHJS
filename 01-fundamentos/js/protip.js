// function crearPersona(nombre, apellido){
//     return { nombre,apellido }
// }

const crearPersona = (nombre, apellido ) => ({nombre, apellido})

persona = crearPersona("Ulises", "Desentis");
console.log(persona);


function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log(edad, args);
    return args;
};

imprimeArgumentos('Hola', 'aqui', 'hay', 'multiples', 'argumentos');
imprimeArgumentos2(40, 'tony', 'stark', 'Ironman',);

const [ nombre, apellidox, clave ] =imprimeArgumentos2 (40, 'tony', 'stark', 'Ironman');
console.log( {nombre, apellidox, clave} );

const {apellido: nombreDeFamilia} = crearPersona ('Isabela', 'Rodriguez');
console.log(nombreDeFamilia);


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: true,
    edad: 40,
}