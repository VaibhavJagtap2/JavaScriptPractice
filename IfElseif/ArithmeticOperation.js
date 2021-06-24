const prompt = require('prompt-sync')();
let a = prompt('Enter A First Number = ');
let b = prompt('Enter A Second Number = ');
let c = prompt('Enter A Third Number = ');

let Operation1 = Math.floor(a+b*c);
let Operation2 = Math.floor(a%b+c);
let Operation3 = Math.floor(c+a/b);
let Operation4 = Math.floor(a*b/c);

console.log(" a+b*c = " + Operation1);
console.log(" a%b+c = " + Operation2);
console.log(" c+a/b = " + Operation3);
console.log(" a*b/c = " + Operation4);

if(Operation1 < Operation2 && Operation1 < Operation3 && Operation1 < Operation4)
console.log(" minimum is "+Operation1);
else if(Operation2 < Operation1 && Operation2 < Operation3 && Operation2 < Operation4)
console.log(" minimum is "+Operation2);
else if(Operation3 < Operation1 && Operation3 < Operation2 && Operation3 < Operation4)
console.log(" minimum is "+Operation3);
else if(Operation4 < Operation1 && Operation4 < Operation3 && Operation4 < Operation3)
console.log(" minimum is "+Operation4);

if(Operation1 > Operation2 && Operation1 > Operation3 && Operation1 > Operation4)
console.log(" Maximum is "+Operation1);
else if(Operation2 > Operation1 && Operation2 > Operation3 && Operation2 > Operation4)
console.log(" Maximum is "+Operation2);
else if(Operation3 > Operation1 && Operation3 > Operation2 && Operation3 > Operation4)
console.log(" Maximum is "+Operation3);
else if(Operation4 > Operation1 && Operation4 > Operation3 && Operation4 > Operation3)
console.log(" Maximum is "+Operation4);