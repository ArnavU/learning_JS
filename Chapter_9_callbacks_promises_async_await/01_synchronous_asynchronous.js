const prompt = require("prompt-sync")();

// synchronous programming
// let name = prompt("Enter your name: ");
// let age = prompt("Enter you age: ");
// let color = prompt("Enter your favorite color: ");
// console.log(`${name} is ${age} years old and ${color} is his favorite color.`);

// Asynchronous programming
console.log("Start");

setTimeout(()=> {
    console.log("Hey I am good");
}, 2000);

console.log("End");