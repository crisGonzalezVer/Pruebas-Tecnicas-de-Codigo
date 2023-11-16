/*Dada una cadena de texto, devolver cuantas vocales tiene*/

function vocales(palabra){
    let encontradas = palabra.match(/[aeiou]/gi);
    let frase ="";

    if (encontradas){
        
        frase = "Hay un total de "+encontradas.length;
    }else{
        frase =  "Hay un total de 0 coincidencias"
    }

    return frase;
}

console.log(vocales("frgt"));