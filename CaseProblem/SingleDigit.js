const prompt = require('prompt-sync')();
let number = prompt('Enter number to convert into word = ');
number = Number(number);

switch(number) {
    case 0:
        console.log('ZERO');
        break;
    case 1:
        console.log('ONE');
        break;
    case 2:
        console.log('TWO');
        break;
    case 3:
        console.log('THREE');
        break;
    case 4:
        console.log('FOUR');
        break;
    case 5:
        console.log('FIVE');
        break;
    default:
        console.log('Enter Single Digit Number Only');
        break;
}