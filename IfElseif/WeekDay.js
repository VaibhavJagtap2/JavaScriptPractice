const prompt = require('prompt-sync')();
let day = prompt('Enter Week Day = ');
day = Number(day);

if(day == 0)
    console.log('Not A Valid Week Day');
else if(day == 1)
    console.log('MONDAY');
else if(day == 2)
    console.log('TUESDAY');
else if(day == 3)
    console.log('WEDNESDAY');
else if(day == 4)
    console.log('THURSDAY');
else if(day == 5)
    console.log('FRIDAY');
else if(day == 6)
    console.log('SATURDAY');
else if(day == 7)
    console.log('SUNDAY');

