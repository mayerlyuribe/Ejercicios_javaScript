const precio =11000;
let cantidad = parseInt(prompt("ingrese la cantidad de computadoras que desea comprar"));

let total = cantidad * precio;

if (cantidad < 5){
    let total_descuento = total*0.9;
    console.log(`el total a pagar, aplicando al descuento del 10% es: ${total_descuento}  `);
}else if (cantidad >= 5 && cantidad < 10){
    let total_descuento = total*0.8;
    console.log(`el total a pagar, aplicando al descuento del 20% es: ${total_descuento}`);
}else{
    let total_descuento = total*0.6;
    console.log(`el total a pagar, aplicando al descuento del 40% es: ${total_descuento}`)
}
