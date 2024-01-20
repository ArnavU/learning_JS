// Q1)  Create a variable of type string and try to add a  number to it

let a = "Arnav"
let b = 5

console.log(a + b)

// Q2) Use typeof operator to find the datatype of the string in last question
console.log(typeof(a))

// Q3) Create a const object in js can you change it to hold a number later

const obj = {
    name: "Arnav", 
    section: 1,
    isPrincipal: false
}

// obj = "ABC" // => Error: Assignment to constant variable

// Q4) Try to add a new key to the const object in problem 3. Were you able to do it?
obj['friend'] = "Harry"
console.log(obj)
obj['name'] = "Vijay"
console.log(obj)

// Q5) Create a js program to create a word-meaning dictionary of 5 words
const dict = {
    appreciate: "recognize the full worth of",
    fan: "pankha",
    tiffin: "dabba"
}

console.log(dict)
console.log(dict.appreciate)