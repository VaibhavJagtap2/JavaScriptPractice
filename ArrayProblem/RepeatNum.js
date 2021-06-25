let SameDigitNumber = new Array();
for (i = 1; i < 100; i++){
    if (i % 11 == 0)
    SameDigitNumber.push(i);
}
console.log("Same Two Digit Numbers Are : " + SameDigitNumber.toString());