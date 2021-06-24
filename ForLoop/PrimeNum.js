const prompt = require('prompt-sync')();
let num = prompt('Enter the number to check Prime Number = ');
num = Number(num);

let count = 0;
for(let i = 2; i <= num/2; i++){
    if(num%1 == 0){
        count++;
        break;
    }
}
if(count == 0) {
    console.log(" Is Prime Number");
}else {
    console.log(" Is Not Prime Number");
}