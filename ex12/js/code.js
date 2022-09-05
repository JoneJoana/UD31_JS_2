let frase = "05/04/1982"
let regexp = /\d{2}[/]\d{2}[/]\d{4}$/y;

if(regexp.test(frase)){
    console.log("fecha solo tiene numeros");
}else {
    console.log("fecha mal escrita, contiene letras");
}
