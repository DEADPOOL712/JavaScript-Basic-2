// Function 

function logger() {
    console.log("Hey ! i'm function ");
}
logger();
console.log(logger);


function mix(apple, orange) { // parameters 
    console.log(apple, orange)
    const juice = `The fruit juice of ${apple} apple's and ${orange} orange's `;
    return juice;
}
mix(5, 9);  // The value of function replace with the return value of function 
const fruiteJuice = mix(5, 9); // Save the return value of function in variable 
console.log(fruiteJuice);  // console out the vlaue 

console.log(mix(7, 8));

