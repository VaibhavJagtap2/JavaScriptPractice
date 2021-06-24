const prompt = require('prompt-sync')();
fraction1 = 9/5;
fraction2 = 5/9;
val = 32;

function degFFunction(input) {
    degF = (input * fraction1) + val;
    console.log(input + ' celcius = '+degF+ ' degF' );
}
function celciusFunction(input) {
    degC = (input - val) * fraction2;
    console.log(input + 'degF = '+degC+ ' celcius');
}
console.log('Menu');
console.log('1.Celcius To degF');
console.log('2.degF To Celcius');

let choice = prompt('Enter The Choice = ');
choice = Number(choice);

switch(choice) {
    case 1:
        let Celcius = prompt('Enter Celcius = ');
        Celcius = Number(Celcius);
        if(Celcius < 0 || Celcius > 100){
            console.log('Celcius Between 0 To 100 range');
        }
        else {
            degFFunction(Celcius);
        }
        break;
    case 2:
        let degF = prompt('Enter degF =');
        degF = Number(degF);
        if(degF < 32 || degF >  212) {
            console.log('degF between 32 to 212 range');
        }
        else {
            celciusFunction(degF);
        }
        break;
    default:
        console.log('Invalid Choice');
}