const entrada4= require("readline-sync");

let ka = 0;
let he = 1;
let rs = 0

while ( rs < 10 ){
    rs++

    let f = ka + he;

   console.log(f);

    he = ka
    ka = f
} 