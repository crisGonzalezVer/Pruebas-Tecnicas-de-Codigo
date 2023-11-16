/*Dado un array de objetos de peliculas (titulo, director, vista) mostrar todas las peliculas indicando cual has visto y
cual no. 

Crea un array de objetos
Crea una función para recorrer y mostrar*/

const peliculas = [
    {
        titulo: "El Señor de los Anillos",
        director: "Peter Jackson",
        vista: true
    },
    {
        titulo: "Seven",
        director: "David Fincher",
        vista: true
    },
    {
        titulo: "Jaula",
        director: "Ignacio Tatay",
        vista: false
    }
];

function peliculasVistas(peliculas){
    for(pelicula of peliculas){
        let para_mostrar = `"${pelicula.titulo} de ${pelicula.director}"`;

        if (pelicula.vista){
            console.log("Ya has visto: "+para_mostrar);
        }else{
            console.log("No he visto "+para_mostrar)
        }
    }
}

peliculasVistas(peliculas);