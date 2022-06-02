// Function calling another function 
function calculate(x, y) {
    return x + y;
}

const gettwonumber = function (num1, num2) {
    const answer = calculate(num1, num2);
    return `The addition of ${num1} + ${num2} = ${answer}`;
}

console.log(gettwonumber(4, 5));
console.log(gettwonumber(67, 7));

const age = (birthyear, name) => {
    return `I'm ${name} and i am ${2022 - birthyear} year old boy`;
}
console.log(age(2003, "vaibhav"));