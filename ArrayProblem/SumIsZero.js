let numbers = [1,2,3,6,7,-1,-2,-3,];

for(let i=0; i<numbers.length; i++) {
    for(let j=i+1; j<numbers.length; i++) {
        for(let k=j+1; k<numbers.length; k++) {
            if(numbers[i] + numbers[k] + numbers[j] == 0) {
                console.log(numbers[i] + ","+numbers[j]+"," +numbers[k]);
            }
        }
    }
}