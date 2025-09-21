let precio_inicial = parseInt(prompt("¿cuánto cuesta el producto (auto/terreno)"));

let valorAuto = precio_inicial;
let valorTerreno = precio_inicial;

let devaluacion = parseInt(prompt("¿cuál es el procentaje de devaluación del automóvil anualmente?"));
let incremento = parseInt(prompt("¿cuánto es el porcentaje de incremento del terreno anualmente?"));

for (let i = 0; i < 3; i++) {
    valorAuto *= (1 - devaluacion/100);
    valorTerreno *= (1 + incremento/100);
}
    
const devaluacionAuto = precio_inicial - valorAuto;
const incrementoTerreno = valorTerreno - precio_inicial;

if (devaluacionAuto > incrementoTerreno/2) {
    console.log("debe comprar el automóvil");
} else {
    console.log("debe comprar el terreno");
}