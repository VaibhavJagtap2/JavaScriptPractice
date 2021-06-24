const readline = require('readline');
const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reads.question(' Please enter year (yyyy) format:- ', (year) => {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + " is a leap year");

    } else {
        let year1 = parseInt(year);
        console.log(year1 + " is not a leap year")
    }
    reads.close();

})