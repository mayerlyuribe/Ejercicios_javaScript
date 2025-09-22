let descuento = 0;
while (true){
    let numero = parseInt(prompt("ingrese un numero al azar: (digite 0 para salir)"));
    if (numero <= 0) break;

    let total_compra = parseInt(prompt("ingrese el total de la compra: "));
    if (numero < 74){
        descuento = 0.85;

    }else if (numero >= 74){
        descuento = 0.80;
    }
    let compra_descuento = total_compra * descuento;
    console.log("el total a pagar con el descuento es: " + compra_descuento);

}
