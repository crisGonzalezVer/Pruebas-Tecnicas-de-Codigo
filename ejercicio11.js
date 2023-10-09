/*Dado un texto y una búsqueda, censurar todas las coincidencias busqueda con el texto [-CENSURADO-]
Si texto y búsqueda están vacíos mostrar "No puedes leer el texto y la búsqueda" en el caso de que no lleguen parametros*/

function remplazar(texto=false,busqueda=false){

    let textoFinal="";

    if (texto == false & busqueda == false){

        textoFinal="No puedes leer el texto y la búsqueda";

    }else if(texto && busqueda && texto.includes(busqueda)){

        textoFinal=texto.replace(busqueda,"[-CENSURADO-]");

    }else if(texto && busqueda == false){

        textoFinal="No puedes hacer la busqueda";

    }else if(texto == false && busqueda){

        textoFinal="No puedes leer texto";

    }

    return textoFinal;

};


console.log(remplazar("HOla me llamo Cristina", "Cristina"));

