// Expresion and Declaration 


// In function declaration we can call function before declaring it but this is not good practice 
function calAge1(birthYear) { // This is called function declaration 
    return 2022 - birthYear;
}
const age1 = calAge1(2003);
console.log(`Your age is ${age1}`);



// Function expresion is function without name ! 
// Expresion produce value 
// Function is value so we can store 
const calAge2 = function (birthYear) { // here calAge2 is function
    return 2022 - birthYear;
}
console.log(calAge2(2003));



//***** Arrow Function ****/
// In syntex giveperamete name => The return value of function
const calAge3 = birthYear => 2022 - birthYear;
console.log(calAge3(2005));
// For more than one line of code 
const yersleft = (name, birthYear) => {
    const age = 2022 - birthYear;
    return `First name ${name} will retirer in ${65 - age} year `;
}
console.log(yersleft('Vaibhav', 2003));
console.log(yersleft('bob', 1960));