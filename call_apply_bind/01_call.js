/*
    - With call(), an object can use a method belonging to another object.
*/

let name = {
    firstname: "Arnav",
    lastname: "Umarkar", 
    // printFullName: function() {
    //     console.log(this.firstname + " " + this.lastname);
    // }
}

let printFullName = function() {
    console.log(this.firstname + " " + this.lastname);
}

// name.printFullName();
printFullName.call(name);

let name2 = {
    firstname: "Ram",
    lastname: "Unknown"
}

// task is to use the method of the "name" object on "name2" objectj

// function borrowing

// name.printFullName.call(name2);
printFullName.call(name2);
console.log();

// ################### Using call() with multiple arguments ####################
let person = {
    fname: "Vikram", 
    lname: "Aditya"
}

let printIntro = function(hometown, state) {
    console.log(this.fname +" " + this.lname + " from " + hometown + ", " + state);
}

printIntro.call(person, "Pune", "Maharashtra");


let person2 = {
    fname: "Arnav", 
    lname: "Umarkar"
}

printIntro.call(person2, "Wardha", "Maharashtra")
