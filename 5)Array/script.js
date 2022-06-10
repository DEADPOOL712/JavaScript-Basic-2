const number = [23, 56, 1, 77];
// Accessing the array element 
console.log(number);
console.log(number.length);
console.log(number[1]); // Index 0 to 3
console.log(number[number.length - 1]); // In array inside the [] must be a expresion or value 



// use array in function 
const calAge = birthYear => 2022 - birthYear;
const years = [2003, 2005, 1999, 2000];
// Using array for calculating age 
console.log(calAge(years[0]));
console.log(calAge(years[2]));
console.log(calAge(years[years.length - 1]));



// We can also use this way to calculate 
const age1 = calAge(years[0]);
const age2 = calAge(years[2]);
const age3 = calAge(years[years.length - 1]);
const age = [age1, age2, age3];
console.log(`The calculat age is ${age}`);



// using array as element in another array 
const old = [age[0], years[0]];
console.log(`You are ${old[0]} old and your birthyear ${old[1]}`);




//*** Array Operation ***/
const friends = ['het', 'jeet', 'dipal'];
console.log(friends);

// Add element in array 
const value1 = friends.push('krsih'); // push add element in end of array 
// push is function it also return value of array length 
console.log(`The length of array ${value1}`); ``
console.log(friends);
friends.unshift('jado');
console.log(friends);

// Remove element from array 
console.log("*** REMOVE ***");
friends.pop(); // Remove last element 
console.log(friends);
friends.shift(); // Remove first elemet 
console.log(friends);


// New thing ES6 and indexOF  
console.log(friends.indexOf('jeet')); // Give the index value of element 
console.log(friends.includes('dipal')); // It checks the element is on array or not and return boolean value 





