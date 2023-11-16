/*Dado un número, mostrar los números de 1 hasta el número. Pero para múltiplos de 3, imprimir "buzz" en lugar del número.
Para los múltiplos de 5 imprimir "ligthyear". Para múltiplos de tres y de cinco imprimir "BuzzLigthyear"

-Crear una función que reciba el número
-Condiciones número actual múltiplo de 3 y de 5
-Crear función para recorrer y mostrar
-Bucle del 1 al número*/

function multiplos(numero){

    let frase = "";
    if ((numero % 3 === 0) && (numero % 5 === 0)) {
        frase = "BuzzLigthyear";
    } else if (numero % 3 === 0){
        frase =  "buzz";
    } else if (numero % 5 ===0){
        frase =  "ligthyear";
    } else {
        return numero;
    }

    return frase;
}

function recorrer(numero_recorre){

    for(let i=1; i<=numero_recorre; i++){
        console.log(multiplos(i))
    }
    
}


console.log(recorrer(7));
