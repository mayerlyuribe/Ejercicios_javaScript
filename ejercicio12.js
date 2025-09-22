const promedio = parseFloat(prompt("ingrese el promedio del estudiante: "));
const grado = prompt("ingrese el grado del estudiante: (perparatoria/profesional)").toUpperCase();
const reprobadas = parseInt(prompt("¿cuántas materias tiene reprobadas el estudiante?"))

let total_pagar = 0;
let unidades = 0;

if (promedio >= 9.5 && grado === "PREPARATORIA"){
    unidades = 55;
    total_pagar = ((unidades/5)*50000)*0.75;
}
else if (promedio >=9.0 && promedio <9.5 && grado === "PREPARATORIA"){
    unidades = 50;
    total_pagar = ((unidades/5)*50000)*0.9;
    
}else if (promedio >=7.0 && promedio < 9.0 && grado === "PREPARATORIA"){
    unidades = 50;
    total_pagar = ((unidades/5)*50000)

}else if (promedio <= 7.0 && reprobadas >=0 && reprobadas <= 3 && grado === "PREPARATORIA"){
    unidades = 45;
    total_pagar = ((unidades/5)*50000);

}else if (promedio <= 7.0 && reprobadas >= 4 && grado === "PREPARATORIA"){
    unidades = 40;
    total_pagar = ((unidades/5)*50000);

}else if (promedio >= 9.5 && grado === "PROFESIONAL" ){
    unidades == 55;
    total_pagar = ((unidades/5)*80000)*0.8;

}else if (promedio < 9.5 && grado === "PROFECIONAL"){
    unidades = 55;
    total_pagar = ((unidades/5)*80000);
}else{
    console.log("por favor ingrese bien los valores, no coinciden con la tabla establecida por la institución.");
}

console.log(`El total a pagar por el estudiante es de: $${total_pagar}`);