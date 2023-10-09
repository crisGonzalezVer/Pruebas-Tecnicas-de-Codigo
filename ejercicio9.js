//Dados dos arrays, devolver array con solo los elementos comunes
//entre ambos


//Usamos el indexOf que nos devuelve la posición, NO el emenento como
//tal. Nos devuelve -1 si no lo encuentra
function elementosComunes(array1,array2){
    let arrayCoincidente=[];
    for(let i=0; i<array1.length;i++){

        //Buscamos que el elemento del indice sea diferente de -1 pq significa que lo ha encontrado
        //y que el array que estamos creando su elemento sea -1 pq significa que NO lo tenia (para evitar añadir elementos de más q estén duplicados)
        if (array2.indexOf(array1[i]) !== -1 && arrayCoincidente.indexOf(array1[i]) === -1) {

            arrayCoincidente.push(array1[i]);
        }
            
        
    }
    
    return arrayCoincidente;

}

console.log(elementosComunes([1,2,3,7],[2,2,7,3,4,5,2]));


//Otra forma de hacerlo

function arrayDeComunes(array1,array2){

    //creamos const para evitar actualizar el contenido constantemente
    //usamos metodo filter que crea un nuevo array que contenga todos los elementos que cumplan una condicion
    //Usamos el filter, esto recorrer el elemento del primer array y con el includes comprobamso si existe. 
    //Esto devuelve true o false y el filtrado
    
    const filtrado = array1.filter(elemento =>{
        return array2.includes(elemento);
    });

    return filtrado;

    console.log(filtrado);


}

console.log(arrayDeComunes([1,2,3,7],[2,2,7,3,4,5,2]));
