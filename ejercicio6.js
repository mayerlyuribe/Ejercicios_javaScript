let puntos = 0;
let suma = 0;

for (i = 0; i < 5; i++){
    puntos = parseInt(prompt("Ingrese el punto IMECA del día " + i)); 
    suma += puntos;
}

let dinero_semana = parseInt(prompt("Ingrese las ganancias de la fabrica en la semana."));
let promedio = suma / 5;

console.log('El promedio de puntos IMECA producidos por la fábrica son: ' + promedio);

if (promedio > 170){
    let multa = dinero_semana * 0.5;
    let total = multa + dinero_semana;
    console.log("la fabrica deberá pagar una multa de " + multa);
    console.log("Además, la fabrica debe para su producción durante una semana. El total de dinero que perderá es: " + total);
    //el total de dinero que pierde la fabrica es la suma de la semana de trabajo que deben suspender y la multa
}
else{
    console.log("La fabrica no tiene sanciones, todo está nice :)")
}