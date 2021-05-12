'use strict';
/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

function logger() {
    console.log("My name is Chris");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function calcAge1(birthYear) {
    return 2037 - (birthYear);
}
const age1 = calcAge1(1991)
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

//arrow functions
const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(1991));

const yearsUntilRetirement = (birthYear, name) => {
    const age = 2037 - birthYear;
    const years = 65 - age;
    return `${name} retires in ${years} years`;
}

console.log(yearsUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 3));

const friends = ['mike', 'steve', 'pete'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
friends.push('chris');
console.log(friends.length);
console.log(friends);
friends.unshift('matt'); //add front
console.log(friends);

friends.pop(); //remove last
console.log(friends);

friends.shift(); //remove first
console.log(friends);

console.log(friends.indexOf('mike'));

console.log(friends.includes('pete'));

const person = {
    firstname: 'chris',
    lastname: 'wilhelm',
    age: 2021 - 2001,
    job: 'student',
    license: true,

    getSummary: function () {
        return `${this.firstname} is a ${this.age}-year old ${this.job} and he has ${this.license ? 'a' : 'no'} driver's license.`
    }
};

console.log(person.firstname);
console.log(person['lastname']);

const info = prompt("What do you want to know about person? choose between firstname, lastname, age, and job");
if (person[info]) {
    console.log(person[info]);
} else {
    console.log("incorrect entry");
}

person.gender = 'male';
person['location'] = 'floridan';
console.log(person);
console.log(person.getSummary());
*/

const mark = {
    name: 'mark',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
    }
}

const john = {
    name: 'john',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
    }
}

mark.calcBMI();
john.calcBMI();
console.log(`${john.BMI > mark.BMI ? john.name : mark.name}'s BMI (${john.BMI > mark.BMI ? john.BMI : mark.BMI}) is higher 
than ${john.BMI > mark.BMI ? mark.name : john.name}'s BMI (${john.BMI > mark.BMI ? mark.BMI : john.BMI})`);


