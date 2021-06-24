const prompt = require('prompt-sync')();
let digit = prompt('Enter a single digit number = ');
digit = Number(digit);

if(digit == 1)
    console.log('One');
else if(digit == 2)
    console.log('Two');
else if(digit == 3)
    console.log('Three');
else if(digit == 4)
    console.log('Four');
else if(digit == 5)
    console.log('Five');       
else 
    console.log('Enter Single Digit Number Only')
