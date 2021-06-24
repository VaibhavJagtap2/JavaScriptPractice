const prompt = require('prompt-sync')();

console.log('MENU');
console.log('1. Feet To Inch');
console.log('2. Inch To Feet');
console.log('3. Feet To Meter');
console.log('4. Meter To Feet');

let choice = prompt('Enter Your choice = ');
choice = Number(choice);

switch(choice) {
    case 1:
        let feet1 = prompt('Enter Feet To Convert To Inches = ');
        feet1 = Number(feet1);
        result = Number(feet1*12);
        console.log(feet1+' Feet = '+result+' Inches');
        break;
    case 2:
        let inch1 = prompt('Enter inch To Convert To feet = ');
        inch1 = Number(inch1);
        result = Number(inch1/12);
        console.log(inch1 +' inch = ' + result +' feet ');
        break;
    case 3:
        let feet3 = prompt('Enter Feet To Convert To meter = ');
        feet3 = Number(feet3);
        result = Number(feet3/3.28);
        console.log(feet3 + ' Feet = ' + result + ' meter '); 
        break;
    case 4:
        let meter = prompt('Enter meter To Convert To feet = ');
        meter = Number(meter);
        result = Number(meter*3.28);
        console.log(meter + ' meter = ' + result +' feet ');
        break;
    default:
        console.log('You Entered Wrong Input');
        break;
}