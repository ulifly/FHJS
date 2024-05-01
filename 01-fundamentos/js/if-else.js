let a = 10;

if (a >= 5) {
    console.log("a es mayor o igual a 5");
} else {
    console.log("a es menor a 5");
}

const hoy = new Date();
let dia = hoy.getDay();
console.log({ dia });

if (dia == 0 || dia == 6){
    console.log('Buen fin de semana 🤣');
} else if (dia == 1){
    console.log('odio los lunes 😾');
} else {
    console.log('ni pedo a trabajar 😎');
}

// sin usar if elso solo objetos los dias de la semana

// 0: Domingo 01: Lunes
dia = 2;

diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

console.log(diaLetras[dia]);