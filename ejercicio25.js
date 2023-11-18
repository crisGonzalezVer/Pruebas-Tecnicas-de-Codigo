/*Dado un string, ponerlo completo en mayusculas o minusculas dependiendo de si hay más mayusculas o miniculas en el string

Ejemplos:
mayusMinus("JOAQuin") // Devuelve: JOAQUIN
mayusMinus("Victor")  // Devuelve: victor

-Crear una funcion con parametro texto
-Crear dos contadores para mayus y minus
-Recorrer el texto y comprobar si las letras que vamos recorriendo son mayus
-Aumentar contadores
-Convertir a mayus o minus y devolver resultado */
function mayusMinus(texto) {
    let contadorMayus = 0;
    let contadorMinus = 0;

    for (letra of texto) {
        if (letra === letra.toUpperCase()) {

            contadorMayus ++;
        } else {

            contadorMinus ++;
        }
    }

    if (contadorMayus > contadorMinus){
        return texto.toUpperCase();
    }

    return texto.toLowerCase();
}

console.log(mayusMinus("pePe"));
