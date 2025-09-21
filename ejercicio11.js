let people = parseInt(prompt("ingrese la cantidad de personas que desea calcular"));
const valor_kilo = parseInt(prompt("¿a cuánto está el kilo de manzana?"))

for (let i = 1; i <=people; i++){
    let kilos_manzana = parseFloat(prompt("¿cuántos kilos de manzana desea comprar la persona: " + i + "?"));
    
    let precio = valor_kilo * kilos_manzana;
    if (kilos_manzana >= 2.01 && kilos_manzana <= 5){
        precio *= 0.90;
        console.log(`el total de la compra de la persona ${i}, aplicando un descuento del 10% es de $${precio}`);

    }else if(kilos_manzana >= 5.01 && kilos_manzana <= 10){
        precio *= 0.85;
        console.log(`el total de la compra de la persona ${i}, aplicando un descuento del 15% es de $${precio}`);

    }else if (kilos_manzana >=10.01){
        precio *= 0.80;
        console.log(`el total de la compra de la persona ${i}, aplicando un descuento del 20% es de $${precio}`);  
    }else{
        console.log(`el total de la compra de la persona ${i} es de $${precio}, sin descuentos`);
    }
}