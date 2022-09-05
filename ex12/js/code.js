let frase = "05/04/1982"
let regexp = /\d{2}[/]\d{2}[/]\d{4}$/y;

if(regexp.test(frase)){
    console.log("fecha solo tiene numeros");
}else {
    console.log("fecha mal escrita, contiene letras");
}

var mail = "joanajanefdez@gmail.com";
var regexpMail = /[a-zA-Z1-9.-]*@{1}[a-z]*\.([a-z]{2,3})/;

if(regexpMail.test(mail)){
    console.log("email correcto");
}else {
    console.log("email incorrecto");
}

