let array = new Array();
for (let i=0; i<10; i++) {
    let randomNumber = Math.floor(Math.random() * (900-100+1)+100);
    array.push(randomNumber);
}
console.log("Array before sorting");
console.log(array);
array.sort();
console.log("Array after sorting");
console.log(array);
console.log("Second Largest Number: "+ array[8]);
console.log("Second Smallest Number: "+ array[1]);