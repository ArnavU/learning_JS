// length
let name1 = "Arnav"
let name2 = "Arnav\n"; // 
console.log(name2.length);
// Arnav is 5 but \n adds 1 --> total 6 characters

// Uppercase
console.log(name1.toUpperCase());

// Lowercase
console.log(name1.toLowerCase());
console.log(name1);

// Slice
console.log("slice");
console.log(name1.slice(2, 4));

// Replace
console.log(name1.replace("Ar", "R"));

// concat
console.log(name1.concat(" is a frined of Harry"));

// trim --> only removes starting and ending spaces
let name3 = "     Vijay     N    "
console.log(name3.trim());