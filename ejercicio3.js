const cantidad = parseInt(prompt("cuántas personas desea registrar?"));

for (let i = 1; i <= cantidad; i++){

    let sexo = prompt(`ingrese el sexo biológito de la persona ${i}, (femenino/masculino)`).toUpperCase();
    let edad = parseInt(prompt("ingrese la edad de la persona "+ i));

    if (sexo === "FEMENINO" ){
        console.log(`la persona ${i} tiene ${(220 - edad)/10} pulsasiones por cada 10 segundos`);
        
    }
    else if (sexo === "MASCULINO" ){
        console.log(`la persona ${i} tiene ${(210 - edad)/10} pulsasiones por cada 10 segundos`);

    }else console.log("género inválido, vuelve a intentarlo");
}