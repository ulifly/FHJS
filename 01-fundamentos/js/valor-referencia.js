let a = 10;
let b = 20;

b= 10;

console.log({a, b});

let juan = { nombre: 'Juan' };
let ana = {...juan};

ana.nombre = 'Ana';

console.log(juan, ana);

const cambiaNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

//arreglos

const frutas = ['pera', 'Manzana', 'Mango']
const otrasFrutas = [...frutas];

otrasFrutas.push('Uva');
console.table({frutas, otrasFrutas});