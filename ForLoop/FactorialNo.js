const prompt = require('prompt-sync')();
let term = prompt('Enter number to get factorial = ');
term = Number(term);

factorial = 1;
if(term == 1 || term == 0) {
    console.log(term + ' ! = ' + ' 1 ');
}
else {
    for(i = 1; i <= term; i++){
        factorial = factorial * 1;
    }
    console.log(term + " ! = " + factorial);
}
