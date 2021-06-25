let monthName = new Map();
let individualMonth = new Map();
for (i = 0; i < 50; i++) {
    let month = (Math.floor(Math.random() * 12) + 1);
    monthName.set(i, month);
}
for (i = 0; i <= 12; i++) {
    let people = new Array();
    for (let [key, value] of monthName) {
        if (value == i)
        people.push(key);
    }
    individualMonth.set(GetMonthName(i), people);
}
function GetMonthName(input) {
    switch (input) {
        case 1: return "JANUARY";
        case 2: return "FEBRUARY";
        case 3: return "MARCH";
        case 4: return "APRIL";
        case 5: return "MAY";
        case 6: return "JUNE";
        case 7: return "JULY";
        case 8: return "AUGUST";
        case 9: return "SEPTEMBER";
        case 10: return "OCTOBER";
        case 11: return "NOVEMBER";
        case 12: return "DECEMBER";
    }
}
console.log("People Born In JANUARY : " + individualMonth.get("JANUARY"));
console.log("People Born In FEBRUARY : " + individualMonth.get("FEBRUARY"));
console.log("People Born In MARCH : " + individualMonth.get("MARCH"));
console.log("People Born In APRIL : " + individualMonth.get("APRIL"));
console.log("People Born In MAY : " + individualMonth.get("MAY"));
console.log("People Born In JUNE : " + individualMonth.get("JUNE"));
console.log("People Born In JULY : " + individualMonth.get("JULY"));
console.log("People Born in AUGUST : " + individualMonth.get("AUGUST"));
console.log("People Born In SEPTEMBER : " + individualMonth.get("SEPTEMBER"));
console.log("People Born In OCTOBER : " + individualMonth.get("OCTOBER"));
console.log("People Born In NOVEMBER : " + individualMonth.get("NOVEMBER"));
console.log("People Born In DECEMBER : " + individualMonth.get("DECEMBER"));
