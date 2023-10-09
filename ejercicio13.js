/*Dado un array, dividirlo en tantos subarrays como sea necesario basándonos en un número que indique su tamaño

Ejemplos:
divideArray([7,8,9,10,5],2)

Devuelve: 
[[7,8], [9,10], [2]]*/

function divideArray(array, tamaño){
    let newArray =[];

    for(let i=0; i < array.length; i=i+tamaño){

        let trozo = array.slice(i,i+tamaño);
        newArray.push(trozo);
    }

    return newArray;

}

console.log(divideArray([7,8,9,10,5],2));

/*
0; 0; 0=0+2--> 2
0; */