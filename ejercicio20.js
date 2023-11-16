/*Dada dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si

-Crear una función para limpiar los textos
-Quitar todo lo que no sea texto
-Poner en minusculas
-Crear un array de letras
-Ordenarlo
-Unirlo
-Función para comparar las dos palabras*/

function limpiarTexto(palabra){
    palabra = palabra.replace(/[^\w]/gi,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
    return palabra;
}

function compararPalabras(palabra1, palabra2){
    if (limpiarTexto(palabra1) === limpiarTexto(palabra2)){
        return true;
    }

    return false;
};

console.log(compararPalabras("   Victor", "Sergio"));
