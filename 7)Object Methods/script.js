// Object Methods 

const profile = {
    firstName: 'Vaibhav',
    lastName: 'Sanepara',
    birthYear: 2003,
    job: 'Student',
    friends: ['joye', 'rose', 'chandler'],
    hasGoodVision: false,


    // calAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // this is use to access properties from object
    calAge: function () {
        // this keyword point to whole object see down
        // onlu use this inside object 
        console.log(this);
        return 2022 - this.birthYear
    },

    // Another way of donig this is creat new propetice
    calAge1: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age} year old ${this.job} `;
    }

};
console.log(profile);
//console.log(profile.calAge(2003));
profile.calAge1(); // if we not call first the age propetie will not exist first 
console.log(profile.calAge()); // Using this keyword 
console.log(profile.age);
console.log(profile.calAge1());


console.log(profile.getSummary()); // using this and function 

