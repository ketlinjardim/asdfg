const entrada2= require("readline-sync");

let tab : number = entrada2.question("Digite um numero: ");

let t = 0;

while( t < 10 )
 { t++
    console.log(t*tab);
}