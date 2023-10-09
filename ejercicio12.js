/*Dado un número mostrar todos los números de ese al 0 de 8 en 8 en una lista con guiones donde
cada número debe empezar por nº*/

function restarOcho(numero){
    let texto = `--- Del ${numero} al 0 ---` +"\n";

    while(numero > 0){

        texto = texto + `- nº ${numero}`+"\n";
        numero = numero -8;

    }

    if (numero <=0) {

        texto = texto + `- nº 0`+"\n"
    }
    

    return texto;

}

console.log(restarOcho(50));