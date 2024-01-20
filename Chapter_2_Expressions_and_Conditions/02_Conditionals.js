const prompt = require("prompt-sync")();

let a = prompt("Hey whats your age? ") // converts to string
a = Number.parseInt(a)
console.log(typeof a)
if(a>18){
    alert("This is a valid age")
}