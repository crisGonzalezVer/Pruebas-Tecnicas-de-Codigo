/*Dado un número, mostrar todos sus números divisores

-Crear una función que comprueba si un número es divisor de otro
-Crear una función para recorrer y mostrar */

function divisor(numero, posible_divisor){
    if(numero%posible_divisor === 0) {
        return posible_divisor;
    }

    return false;
}

function recorreyMuestra(numero){

    for(let i=1; i<=numero; i++){
        
        if(divisor(numero, i)){

            console.log(divisor(numero, i));
        }

    }

}

console.log(recorreyMuestra(20))