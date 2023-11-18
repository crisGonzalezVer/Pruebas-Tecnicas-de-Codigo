/*Dados dos números, indicar cual es mayor y cual es menor

Ejemplos:
mayorMenor(8,6)

//Devuelve
El numero mayor es 8
El numero menor es 6

-Crear una función
-COndiciones para ver cual es mayor
-Devolver el resultado*/

function mayorMenor(numero1, numero2){

    if (numero1 !== numero2) {
        if(numero1 > numero2){
            return "EL numero mayor es "+numero1+"\n"+"El numero menor es "+numero2;
        } else{
            return "EL numero mayor es "+numero2+"\n"+"El numero menor es "+numero1;
        }
    } else {
        return "Los dos números son iguales";
    }
        
}

console.log(mayorMenor(9,9));