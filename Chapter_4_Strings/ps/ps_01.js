// Q1)
let str = "Arn\"";
console.log(str.length);

// Q2)
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word ${word} ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// Q3) StartsWith and EndsWith

// Q4) lowercase
let string = "this is a string";
console.log(string.toUpperCase());

// Q5) slice
let str2 = "Please give Rs 1000";
let amount = Number.parseInt(str2.slice("Please give Rs ".length))
// let amount = Number.parseInt(str2.slice(15))
console.log(amount);
console.log(typeof amount);

// Q6) Change 4th char of a string
let friend = "Vivek";
friend[3] = "A";
console.log(friend);