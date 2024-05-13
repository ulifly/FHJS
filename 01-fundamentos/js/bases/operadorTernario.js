/*
entre semana se abre a las 11 am
fin de semana se abre a las 9 am 

vamos a consultar el dia y la hora para saber si esta abierto
*/

const hora = 10;//new Date().getHours();
const dia = 0;//new Date().getDay();


// if (dia === 0 || dia === 6) {
//     if ( hora >= 9){
//         console.log("Abierto");
//     } else {
//         console.log("Cerrado");
//     }
// } else {
//     if (hora >= 11){
//         console.log("Abierto");
//     } else {
//         console.log("Cerrado");
//     }
// }

//refactorizamos el codigo para disminuir lineas utilizando el operador termario

let horaApertura; 
horaApertura = ( [0,6]. includes ( dia )) ? 9 : 11 ;

hora >= horaApertura ? console.log('Esta abierto') : console.log('Esta cerrado');