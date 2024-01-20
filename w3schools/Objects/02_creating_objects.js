/* 
There are different ways to create new objects:

1) Create a single object, using an object literal.
2) Create a single object, with the keyword new.
3) Define an object constructor, and then create objects of the constructed type.
4) Create an object using Object.create().
*/

// 1) Using an Object Literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(person.firstName + " " + person.lastName);

// creating empty object then adding the property
const person2 = {};
person2.firstName = "Ram";
person2.lastName = "Unknown";
person2.age = 20;
person2.eyeColor = "green";
console.log(person2.firstName, person2.lastName);

// 2) Using the javaScript keyword 'new'
const person3 = new Object();
person3.firstName = "Laxman";
person3.lastName = "Unknown";
person3.age = 19;
person3.eyeColor = "blue";
console.log(person3.firstName, person3.lastName);

// JavaScript Objects are Mutable
// Objects are mutable: They are addressed by reference, not by value.

const x = person2; 
console.log(x.firstName);
x.age = 10; // Will change both x.age and person2.age

console.log(person2.age);



