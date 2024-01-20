const marks = {
    Arnav: 98, 
    Harry: 99,
    Vijay: 92,
    Vinayak: 91
}

console.log("\nUsing simple for loop: ");
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

console.log("\nUsing for in loop: ");
for(let key in marks){
    console.log("The marks of " + key + " are " + marks[key]);
}