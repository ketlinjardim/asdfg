const entrada5 = require("readline-sync");

let Digitados:number[] = [];
let media:number = 0
let tome = 1

while ( tome <10) {
  let num = parseFloat(entrada5.question("Digite o numero: " ));
  Digitados.push(num);

  media = media + num;
  tome++
}

console.log(media/10)

console.log(Math.max(...Digitados))

console.log(Math.min(...Digitados))