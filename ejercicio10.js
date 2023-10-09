/*Dado un número, mostrar una escalerta con escalones de "[-]" usando el número
para los niveles de la escalera

Ejemplo:
escalera(4).
Devuelve
[-]
[-][-]
[-][-][-]
[-][-][-][-]

Cómo hacerlo:
Función que reciba un número
Recorrer el nº de niveles de la escalera
En cada iteración pintar los escalones de ese nivel
Haciendo un bucle desde 1 hasta el nivel en el que estamos*/

function escalera(numero){

    let escaleraCompleta = "";

    for(let nivel=1;nivel<=numero;nivel++){

        var escalones="";

        for(let escalon=1;escalon<=nivel;escalon++){

            escalones+="[-]";

        }

        escaleraCompleta+=escalones +"\n";
        
    }

    return escaleraCompleta;

        
}

console.log(escalera(4));