const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const total = [];

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};
let sum = 0;
for (let i = 0; i < bills.length; i++) {
  total[i] = bills[i] + calcTip(bills[i]);
  sum += total[i];
  console.log(`The tip value =  ${calcTip(bills[i])}`);
  console.log(`The total bill value = ${total[i]}`);
}
console.log('The total value of all bills = ' + sum);
