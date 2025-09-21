let people = parseInt(prompt("ingrese la cantidad de personas que desea calcular"));

for (let i = 1; i <= people; i++){
    let llantas = parseInt(prompt("ingrese la cantidad de llantas que compra la persona " + i));
    
    if (llantas < 5){
        let total = llantas * 300;
        console.log(`la persona ${i} debe pagar el total de ${total}`);
        console.log("el valor de cada llanta es de $300");

    }else if(llantas >=5 && llantas < 10){
        let total  = llantas * 250;
        console.log(`la persona ${i} debe pagar el total de  ${total}`);
        console.log("el valor de cada llanta es de $250");
    }else{
        let total = llantas * 200;
        console.log(`la persona ${i} debe pagar el total de ${total}`);
        console.log("el valor de por cada llanta es de $200");
    }
}