let resultTiradas = [];
let dado1;
let dado2;
let numTiradas = 0;
let sumTirada;

let rndom = function(){
    return Math.floor(Math.random() * 6+1); //nums aleatorios del 1 al 6
};

function lanzarDados(){
    dado1 = rndom();
    dado2 = rndom();
    return sumTirada = dado1+dado2;
}

while(numTiradas<36000){
    let num = lanzarDados();    
    resultTiradas.push(num);
    numTiradas++; //lanzamos dados hasta 36000 veces
}

console.log(resultTiradas); 

function contarTiradaRepet(){     
    var repetidos = {};
    //por cada tirada de 2 dados guardada, contamos cuantas veces esta repetido ese valor y lo almacenas en diccionario 
    resultTiradas.forEach(function(numero){
    repetidos[numero] = (repetidos[numero] || 0) + 1;
    });
    console.log(repetidos);
}

contarTiradaRepet();
