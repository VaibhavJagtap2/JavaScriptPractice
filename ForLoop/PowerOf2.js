const prompt = require('prompt-sync')();
let number = prompt('Enter Value of n = ');
number = Number(number);

for(let i =0; i < number; i++){
    console.log("2 ^ " + i + " is : " + 2 ** i);
}