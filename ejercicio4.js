let monto = parseInt(prompt("ingrese el monto por el que se efectúa la fianza"));
let cuota;

if (monto < 50000){
    cuota = monto * 0.3;
    console.log("tiene una cuota del 3%");

}else if (monto > 50000 ){
    cuota = monto * 0.2;
    console.log("tiene una cuota del 2%");

}
console.log(`la cuota a pagar es de ${cuota}`);