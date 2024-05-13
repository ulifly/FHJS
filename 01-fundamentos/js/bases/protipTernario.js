const numeroMayor= (a,b) => ( a>b )? a : b;

console.log(numeroMayor(6000, 2123));

const costoAcceso = (miembro) => (miembro)? 'Costo 5 pesos' : 'Costo 10 pesos';

console.log(costoAcceso(false));

// se puede utilizar el operador ternario con multiples opciones

let calificacion = 60;

const nota = calificacion >= 95 ? 'A+' :
             calificacion >= 90 ? 'A'  :
             calificacion >= 85 ? 'B+' :
             calificacion >= 80 ? 'B'  :
             calificacion >= 70 ? 'C'  :
             calificacion >= 65 ? 'D'  :
             calificacion >= 60 ? 'E'  : 'F';
console.log({calificacion, nota});