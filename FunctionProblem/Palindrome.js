const prompt = require('prompt-sync')();
function palindrome(input) {
    var reverse = 0;
    var remainder;
    const storeValue = input;

    while(input > 0) {
        remainder = input % 10;
        reverse = reverse * 10 + remainder;
        input = parseInt(input / 10);
    }
    if(reverse == storeValue) {
        return 0;
    } else {
        return 1;
    }
}
var firstNumber = prompt('Enter The first Number = ');
var secondNumber = prompt('Enter The second Number = ');
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

var result1 = parseInt(palindrome(firstNumber));
var result2 = parseInt(palindrome(secondNumber));
if (result1 == 0 && result2 == 0) {
    console.log('Both The Numbers Are Palindrome');
}
else if (result1 == 1 && result2 == 0) {
    console.log('First Number Is Not Palindrome But Second Number Is Palindrome');
}else if(result1 == 0) {
    console.log('First Number is Palindrome But Second Number Is Not Palindrome');
}
else {
    console.log('Both Numbers Is Not a Palindrome');
}