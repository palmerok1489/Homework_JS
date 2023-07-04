"use strict"

let lenght = "";
const num = 7;

  for(let i = 0; i < num; i++){
    for(let j = 1; j < i; j++){
      lenght += '*' ;
    }

    lenght += '\n';
  }

console.log(lenght);

////////////////////////////////

let len = 5;
let result = "";

  for(let i = 0; i <= len; i++) {
    for(let j = 0; j < len -i; j++) {
      result += " ";
    }
    for(let j = 0; j < 2 * i + 1; j++){
      result += "*";
    }
    result += "\n";
  }

console.log(result);