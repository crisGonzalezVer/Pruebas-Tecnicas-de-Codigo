/*Dado un string y un número, repetir el string tantas veces como el número indique*/

function reptimete(palabra, numeroVeces){
    let palabraFinal="";
    for(let i=0;i<numeroVeces;i++){
        palabraFinal+=palabra;
    }

    return palabraFinal;

};

console.log(reptimete("Hola", 2));

/*Función prototipo*/

