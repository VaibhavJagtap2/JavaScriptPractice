let Head = 0;
let Tail = 0;
while (Head < 11 && Tail < 11){
    let coin = Math.floor(Math.random() * 1000) % 2;
    if (coin == 1) {
        Head++;
    } else {
        Tail++;
    }
}
console.log("Heads count : " + Head + "\nTails count : " +Tail);