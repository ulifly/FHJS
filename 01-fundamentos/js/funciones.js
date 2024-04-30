function saludar() {
    console.log("Hola mundo");
}

const saludar2 = function() {
    console.log("Hola mundo2");
}

const saludarFlecha = (nombre) => {
    console.log("Hola " + nombre);
}

saludar();
saludar2();
saludarFlecha("Peter Parker");