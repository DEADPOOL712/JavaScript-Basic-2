// Object is just like array with keyword / name 
const profile = [
    'vaibhav',  // firstName 
    'sanepara', // lastName
    2022 - 2003, // age 
    'student' // Job 
];

// Object 
// Object is useful for unorganised data
const myProfile = {
    firstName: 'vaibhav',
    lastName: 'sanepara',
    age: 2022 - 2003,
    job: 'student',
    friends: ['mySelf', 'me', 'You']
};

// Acces the element using . and [ ] : 

console.log(myProfile);
// In . we acces element throug propertis 
console.log(myProfile.firstName);
// In [] inside there is expresion  
console.log(myProfile['firstName']);

const nameKey = 'Name';
console.log(myProfile['first' + nameKey]); // Here in the breaket the expresion is given 
// console.log(myProfile.'first'+nameKey); --> this is not valid



// Something extra 
const info = prompt("Enter what information you want to know about vai bhav ? \n\ 1.firstName\n\ 2.lastName\n\ 3.age \n\ 4.job \n\ 5.friends ");

//console.log("The information you ask for is here : " + myProfile[info]);
// Here if we enter for info that is not in object it give us undefine 

if (myProfile[info]) {
    console.log("The information you ask for is here : " + myProfile[info]);

}
else {
    console.log("You ask for information that is not provided please enter valid info :) ");
}


// Object modeul 