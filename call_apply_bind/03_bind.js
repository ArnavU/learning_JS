/*
    - Preserving "this"
    Sometimes the bind() method has to be used to prevent losing this.
*/

let person = {
    fname: "Arnav",
    lname: "Umarkar",
    printFullName: function() {
        console.log(`The name is ${this.fname} ${this.lname}`);
    }
}

let display = person.printFullName.bind(person);

console.log();
// person.printFullName();
// setTimeout(person.printFullName, 1000);
setTimeout(display, 1000);
console.log();


// #################### using bind() to use a function from one object upon another object
let user = {
    fname: "Vikram", 
    lname: "Aditya", 
    displayFullName: function(hometown, state) {
        console.log(`The full name is ${this.fname} ${this.lname} from ${hometown}, ${state}`);
    }
}

let user2 = {
    fname: "Ram", 
    lname: "Unknown"
}

let displayUser2 = user.displayFullName.bind(user2, "Wardha", "Maharashtra");

setTimeout(displayUser2, 2000);

// ################################## calling function using setTimeout() withoug bind()  ##################################
setTimeout(user.displayFullName, 1000); 