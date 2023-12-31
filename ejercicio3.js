/*Dada una palabra, buscarla en una frase y devolver cuantas veces aparece 
en ella. La frase y la palabra deben ser parámetros de una función

Cómo hacerlo:
-Función con dos parametros
-Poner el string en minusculas y limpiarlo
-COmprobar si la busqueda esta incluida en la frase
-Crear un array de palabras de la frase
-Mapear esas palabras y hacer un contador de cada una
-Devolver el contador de la busqueda*/

function coincidencias(frase, busqueda){
    let fraseMinuscula = frase.toLowerCase().replace(/[!¡.,-]/,'');
    let resultado = 0;

    if(fraseMinuscula.includes(busqueda)){

        let palabras = fraseMinuscula.split(" ");

        let mapa = {};

        //Buscamos el valor en el array, por eso es el for of
        for(let palabra of palabras){
            //Buscamos dentro del objeto json si existe la palabra. Le vamos
            //a dar la propiedad de que nos cuente cuantas coincidencias hay dentro del json
            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                //Le damos por defecto el valor 1 pq es la primera vez que pasa
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[busqueda];

    }else {
        resultado = 0;
    }
    
    return resultado;
}

coincidencias("Hola, soy Cristina", "Cristina");