let total_acumulado = 0;
let total = 0;

for (let i = 1; i <=10; i++){
    cantidad = parseInt(prompt("ingrese la cantidad de llantas que quieres comprar la persona "+ i));
    if (cantidad < 5){
        total = cantidad * 200;
        total_acumulado += total;
    }else if (cantidad >= 5 ){
        total = cantidad * 180;
        total_acumulado += total;
    }
    console.log("el total a pagar de la persona "+ i + " es: " + total);

}
console.log("el total acumulado de las 10 personas es: " + total_acumulado);