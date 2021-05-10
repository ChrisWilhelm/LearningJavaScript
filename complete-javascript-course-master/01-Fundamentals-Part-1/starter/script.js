alert("Javascript is fun");
console.log("hello world");

const markMass = 95;//78;
const johnMass = 85;//92;
const markHeight = 1.88;//1.69;
const johnHeight = 1.76;//1.95;
const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
