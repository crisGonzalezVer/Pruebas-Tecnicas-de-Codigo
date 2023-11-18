/*Dado un número, mostrar su serie fibonacci. La serie de fibonacci es un
orden de números donde cada número es la suma de los dos anteriores

-Crear una función con parametro numero
-Crear una variable con dos primeros numeros de la serie
-Bucle desde dos al numero
-Sumar los dos anteriores valores a numero actual
-Devolver resultado */

function fibo(numero){

    let serie = [0, 1];
    let sumar = 0;
    for(let i=2; i<=numero; i++){

        serie.push(serie[i - 1] + serie[i-2]);


    }


    return "Serie completa "+serie + "\n" + "Resultado de la serie fibonacci: "+serie[serie.length - 1];
}

console.log(fibo(10));