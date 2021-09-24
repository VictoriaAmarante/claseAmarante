let piedras = ["Amatista","Cuarzo","Turmalina","Oxidiana","Aragonita"];

console.log(piedras);

for( let index= 0; index <3;  index++) { 
    let nombrePiedra= prompt("Ingresar nombre de Piedra");
    console.log("Nombre de piedra ", nombrePiedra);
    piedras.push(nombrePiedra);
}

console.log( "Piedras", piedras)
console.log("Cantidad de piedras: ", piedras.length);
console.log("Piedras como string: ", piedras.toString());
console.log("Piedras usando join()", piedras.join(", "));