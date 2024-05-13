const heroes = ['Batman', 'Superman', 'Flash'];

console.warn('Ciclo for');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('ciclo for in');

for (let i in heroes) {
        console.log(heroes[i]);
    };

console.warn('Ciclo for of');

for (const heroe of heroes) {
    console.log(heroe);
}