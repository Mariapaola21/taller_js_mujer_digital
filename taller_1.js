let temperatura = 25;
if(temperatura > 30 ){
    console.log ("Hace calor");
} else{
    console.log("Hace frio")
} 


for(let i = 1; i <=10; i++){
    console.log(i)
}


let colores = ["Negro", "Morado", "Blanco"];
console.log(colores[0]);


function suma (a,b) {
    return a+b;
    
} console.log (suma (5,5));

const libro = {
Titulo:"cien años de soledad",  
Autor: "Gabriel Garcia Marquez", 
Año_de_publicación: 1967

}; console.log (libro)

const numeros = [10, 11, 12, 13, 14, 15];
const resultado = arreglo (numeros)
function arreglo (numeros) {
const par = []
for (let i = 0; i < numeros.length; i++ ) {
    if (numeros [i] % 2 === 0) {
        par.push(numeros[i]);
    }
}
 return par;
} console.log (resultado)


 



