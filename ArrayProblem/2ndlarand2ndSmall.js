let array = [ ];
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * (999-100+1)+100);
    array.push(randomNumber);
}
console.log(array)

let arrayLength = array.length;
console.log("Length of Array is : " + arrayLength)

let largest1 = 0;
let largest2 = 0;
let Smallest = array[0];
let Smallest2 = array[0];

for (let i = 0; i < arrayLength; i++) {
    if(array[i] > largest1) {
        largest1 = array[i];
    }
    if(array[i] < Smallest) {
        Smallest = array[i];
    }
}
for(let j = 0; j < arrayLength; j++) {
    if(array[j] > largest2 && array[j] != largest1) {
        largest2 = array[j];
    }
    if(array[j] < Smallest2 && array[j] != Smallest) {
        Smallest2 = array[j];
    }
}
console.log("First largest Number is : " + largest1);
console.log("First smallest Number is : " +Smallest);
console.log("Second largest Number is : " +largest2);
console.log("Second smallest Number is : " +Smallest2);