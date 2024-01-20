/* 
--> JavaScript Properties
Properties are the values associated with a JavaScript object.

A JavaScript object is a collection of unordered properties.

Properties can usually be changed, added, and deleted, but some are read only.
*/

const person = {
    fname: "Arnav",
    lname: "Umarkar",
    age: 20,
    email: "123@gmail.com"
}

console.log(person.fname);

// for...in loop on objects
for (let key in person) {
    console.log(person[key]);
}

/*
Deleting Properties
The 'delete' keyword deletes a property from an object:
*/
console.log("\nDeleting a property: ");
delete person["age"];
// delete person.age; // both are same
console.log(person.age);

// Nested objects
const myObj = {
    name: "Arnav", 
    age: 20,
    cars: {
        car1: "BMW",
        car2: "Fiat",  
        car3: "Ford"
    }
}
console.log("\nDifferent ways of accessing nested objects: ")
console.log(myObj.cars.car3);
console.log(myObj["cars"].car1);
console.log(myObj.cars["car2"]);
console.log(myObj["cars"]["car1"]);
