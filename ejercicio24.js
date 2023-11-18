/*Dado un array de enteros y un número, detectar si esa lista de números es una permutación del 1 al número aportado.
En este caso, una permutación es una secuencia de números en orden sin que falte ninguno entre ellos.

Ejemplos:
permutación([1,2,3,4,5],5) //Devuelve true
permutacion([1,2,3,5],5) //Devuelve false

-Crear una función con parametro secuencia y numero
-Bucle del 0 al numero
-Return false si el numero actual +1, no se encuentra
-SI salimos del bucle, devolver true */

function permutacion(arrayEjercicio, numero){

    arrayEjercicio.sort();

    for(let i=0; i<numero;i++){

        if (arrayEjercicio.indexOf(i+1) < 0){
            return false;
        }

    }

    return true;

}

console.log(permutacion([1,3,2,5],5))