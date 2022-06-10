// Coding Challenge 
const markInfo = {
    fullName: 'Mark Miller',
    mass: 78,
    heigth: 1.69,
    calBMI: function () {
        this.BMI = this.mass / (this.heigth * this.heigth);
        return this.BMI
    },
}
const jhonInfo = {
    fullName: 'jhon smith ',
    mass: 92,
    heigth: 1.95,
    calBMI: function () {
        this.BMI = this.mass / (this.heigth * this.heigth);
        return this.BMI
    }
}
markInfo.calBMI();
jhonInfo.calBMI();
console.log(markInfo.BMI);
console.log(jhonInfo.BMI);


if (markInfo.BMI > jhonInfo.BMI) {
    console.log(`The marks BMI ${markInfo.BMI} is heigher than jhon's ${jhonInfo.BMI}`);
}
else if (markInfo.BMI < jhonInfo.BMI) {
    console.log(`The  jhons BMI ${jhonInfo.BMI} is heigher than Mark's ${markInfo.BMI}`);
}
else {
    console.log("Both mark and jhon BMI is same ! :)");
}