/* 
    - The apply() method is similar to the call() method
    - The apply() method accepts arguments in an array
*/

let person = {
    printFullName: function() {
        console.log(`The name is ${this.fname} ${this.lname}`);
    }
}

let person2 = {
    fname: "Arnav",
    lname: "Umarkar"
}

console.log();
person.printFullName.apply(person2);
console.log();


// ################################# function with multiple parameters ################################# 
// takes arguments in array
let user = {
    intro: function(hometown, state) {
        console.log(`${this.fname} ${this.lname} from ${hometown}, ${state}`);
    }
}

let user1 = {
    fname: "Vikram", 
    lname: "Aditya"
}

user.intro.apply(user1, ["Wardha", "Maharashtra"]);

// if call() has to be used
// user.intro.call(user1, "Wardha", "Maharashtra");