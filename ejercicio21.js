/*Dada una cadena de texto y un número, recortar el string mostrando los x primeros carácteres

Ejemplo:
recortar('Cursos Desarrollo Web', 6) //Devuelve 'Cursos'

-Crear una función con parámetros cadena y hasta
-COmprobar que los datos son correctos, es decir que es string y numero
-Recortar string con substr
-Devolver resultado */

function recortar(texto, hasta){

    if (typeof texto == 'string' && typeof hasta == 'number') {
        texto = texto.substring(0, hasta);

        return texto;
    } else {

        return "Uno de los parámetros no tiene el tipo correcto";
    }


}

console.log(recortar('Cursos Desarrollo Web', 6));