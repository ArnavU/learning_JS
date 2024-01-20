let user = ["Arnav", 20, "Wardha"];
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log();

// let [name, age, city] = user; // => this is also valid
let [name, age=20, city] = ["Ram", 21, "Wardha"];
console.log(name);
console.log(age);
console.log(city);
console.log();

// Also works in nested aray
let user2 = ["Vijay", 22, ["Male", 20000]]
let [name2, age2=19, [gender, salary]] = user2;

console.log(name2);
console.log(gender);
console.log(salary);
console.log();

// we can use rest operator with distructuring
let [name3, ...args] = user2; // rest operator
console.log(args);
console.log(...args); // spread operator
console.log();

// destrtuctring in function
function userFunc([name, age=22, city]) {
    console.log("This is userFunc()");
    console.log(name);
    console.log(age);
    console.log(city);
}

userFunc(user);
console.log();

// function returning array and then destruct it where called
function returnArray() {
    return ["Vikrant", 28, "Delhi"];
}

let [name4, age4=20, city4] = returnArray();
console.log(name4);
console.log(age4);
console.log(city4);