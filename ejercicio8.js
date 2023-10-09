/*Dado un número entero, inviertelo y devuelvelo

-Lo convertirmos en un string
-Lo dividimos
-Le damos la vuelta
-Lo unimos
-Lo convertirmos en un numero*/

function numeroEntero(numero){
    numero = parseInt(numero.toString().split('').
    reverse().join(''))*Math.sign(numero);

    //como con numeros negativos el signo nos lo va a ignorar, 
    //debemos comprar si viene negativo o no por lo que usamos el
    //metodo Math.sign

    //numero = numero*Math.sign(numero);
    return numero;
}

console.log(numeroEntero(-56))