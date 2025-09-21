let producto = prompt("¿qué producto desea comprar?")
let valor = parseInt(prompt("¿cuánto cuesta el producto?"))
let marca = prompt("¿cuál es la marca del producto?").toUpperCase()

const IVA = valor * 0.19
//porcentaje de IVA en Colombia

if (valor >= 2000){
    valor *= 0.90;
}

if (marca === "NOSY"){
    valor *= 0.95;
}
 
console.log(`El precio de ${producto} es de ${valor + IVA} con IVA de 19%`)

