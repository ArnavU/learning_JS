let user = {
    name: "Arnav Umarkar", 
    age: 20, 
    city: "Wardha", 
    gender: "Male", 
    edu: "IT"
}

// the variable name must be same as property name
let {name, age, city} = user;

console.log(name);
console.log(age);
console.log(city);
console.log();

// we can also give alias to the variablers
let {gender: g, edu: e} = user;
console.log(g);
console.log(e);