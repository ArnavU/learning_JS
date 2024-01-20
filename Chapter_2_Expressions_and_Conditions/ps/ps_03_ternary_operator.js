const prompt = require("prompt-sync")();

let age = prompt("Enter your age: ");
// console.log("Your age is", age, "you", age>18? "can drive": "cannot drive")

let a = age>18 ? "You can drive" : "You cannot drive"
console.log(a)