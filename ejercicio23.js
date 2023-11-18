/*Dada una cadena de texto, poner en mayúscula la primera letra de cada palabara en la cadena y luego devolver la cadena

Ejemplo:
enMayuscula('hola soy victor) //Devuelve 'Hola Soy Victor'

COmo hacerlo:
-Crear una función con parámetro texto
-Poner la primera letra del string en mayúsculas
-Recorrer el string completo
-Devolver el resultado
-Si el caracter anterior a la letra actual es un espacio
-POnerlo en mayusculas
-SI el caracter no es un espacio, añadirlo al resultado */

function enMayuscula(texto){

    let textoFinal = "";
     
    //lo hacemos con el for in porque nos saca el indice de las letras. Letra es la posición dentro del string
    for(letra in texto){

        if(texto[letra -1] === " " || letra == 0){
            textoFinal += texto[letra].toUpperCase();
        }else {
            textoFinal += texto[letra];
        }

    }

    return textoFinal

}

console.log(enMayuscula('hola visita victorroblesweb.es'));