const prompt = require("prompt-sync")();

let age = prompt("What is your age? ")
switch(age){
    case '12':
        console.log("Your age is 12");
        break;
    case '18':
        console.log("Your age is 18");
        break;
    case '22':
        console.log("Your age is 22");
        break;
    default: 
    console.log("Your age is not special")
}