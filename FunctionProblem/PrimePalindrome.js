const input = require("readline-sync");

function checkPrime(number){
    let isPrime = true;
    for(let i = 2; i <= number/2; i++)
        if(number%i == 0){
            isPrime = false;
            break;
        }
    return isPrime;
}

function getPalindrome(number){
    let temp = 0;
    while(number != 0){
        temp = temp*10;
        temp += number % 10;
        number = Math.floor(number/10);
    }
    return temp;
}

let number = parseInt(input.question("Enter the number: "));
if(checkPrime(number)){
    let palindrome = getPalindrome(number);
    if(checkPrime(palindrome))
        console.log(number + " Is A Prime, Also palindrome " + palindrome + " is Also Prime");
    else
    console.log(number + " Is a Prime, and Also palindrome " + palindrome + " Is Not Prime");
}
else
    console.log(number + " Is Not A Prime");