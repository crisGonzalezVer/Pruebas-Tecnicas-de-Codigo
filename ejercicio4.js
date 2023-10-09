/*Dada una cadena de texto, darle la vuelta e invertir el orden de 
sus caracteres,
sin usar métodos propios del lenguage, solo estructuras de control

-Función con parámetro "texto"
-Crear una variable para guardar la cadena invertida
-Bucle que recorra el string y guarde los caracteres en la variable*/

function invertida(texto){
    let textoInvertido = "";

    //saca los valores. SI fuese los indices seria for in
    for(letra of texto){
        textoInvertido = letra + textoInvertido
    }

    return textoInvertido;
}

console.log(invertida("Cristina"));

//Sin estructuras de control sería
function invertida(texto){
    return texto.split("").reserve().join();
}
