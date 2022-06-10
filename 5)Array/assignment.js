console.log("*** ASIIGNMENT ***");
// Coding challenge 

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    }
    else {
        return bill * 0.20;
    }
}
console.log(calcTip(100));
const bills = [125, 555, 44];
const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);
const tips = [tip1, tip2, tip3];
console.log(tips);

const total = [tip1 + bills[0], tip2 + bills[1], tip3 + bills[2]];
console.log(total);