const prompt = require("prompt-sync")();

let sum = 0;
let n = prompt("Enter the value of n: ");
// n = Number.parseInt(n);
for(let i=0; i<n; i++){
    sum += (i+1);
}

// console.log(i); --> scope of let is block level
console.log(sum)