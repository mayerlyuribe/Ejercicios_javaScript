const materias = parseInt(prompt("ingrese el número de materias que cursan"));
const costo = parseInt(prompt("ingrese el costo una materia"));
const promedio = parseInt(prompt("ingrese el promedio obtenido por el alumno"));

let total_matricula = costo * materias;
let descuento;
if (promedio >= 9 && promedio <= 10){
    descuento = total_matricula * 0.7;
    console.log("debido al promedio del alumno, tiene un descuento del 30%");

}else if (promedio>=0 && promedio <= 9){
    descuento = total_matricula + (total_matricula * 0.1);
    console.log("la matrícula incluye el 10% de IVA");

}else console.log("ingrese un promedio valido, de 0 a 10");
console.log("el valor de la matricula es de: "+  descuento);