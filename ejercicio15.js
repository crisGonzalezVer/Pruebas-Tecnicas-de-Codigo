/*Dada una cadena de texto, devolver el caracter más usado.

Cómo hacerlo:
-Crear una función que reciba un texto
-Mapear letras en un json
-Recorremos el mapeo
-Hacemos condición para ver que contador es mayor*/

function masUsado(texto){

    //Creamos un JSON
    let mapeo_letras = {};

    //en esta variable nos guardaremos el valor más repetido
    let maximo_repeticiones = 0;
    let letra_mas_repetida = "";

    //Ahora recorremos el texto
    for(let letra of texto){

        //Si la letra que estamos recorriendo, no existe, le añadimos el valor de 1
        if(!mapeo_letras[letra]){
            mapeo_letras[letra] = 1;

        }else{
            mapeo_letras[letra]++;
        }
    }

    //Ahora tenemos que recorrer el mapeo de letras para saber cuál es la que más se repite
    //Usamos el in en el for porque queremos sacar el índice ya que éste lleva la letra
    for(let letra in mapeo_letras){
        if(mapeo_letras[letra] > maximo_repeticiones){
           
            maximo_repeticiones = mapeo_letras[letra];
            letra_mas_repetida = letra;
            
        }
    }

    return `La letra más repetida es la ${letra_mas_repetida}`;
}

console.log(masUsado("Cristina"));