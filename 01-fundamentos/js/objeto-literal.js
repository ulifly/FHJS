let personaje = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
    direccion: {
        calle: "Malibu",
        pais: "USA",
    },
};

console.log('nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log(personaje);
//Tarea, obtner el numero de trajes 

console.log(personaje.trajes.length);

const x = "coords";
console.log(personaje[x].lat);
console.log(personaje[x].lng);
personaje.dinero = 423993488593;
console.log(personaje);

Object.freeze(personaje);

personaje.nombre = "Peter Parker";

console.log(personaje.nombre);

const propiedades= Object.getOwnPropertyNames(personaje);
console.log(propiedades);
const valores = Object.values( personaje );
console.log(valores);