let age = "abc";

switch(true) {
    case (age >= 18): 
        console.log("You are elegible.");
        break;
    case(age < 18):
        console.log("You are not elegible.");
        break;
    default:
        console.log("Enter an age below 30.");
}

let day = 7;
switch(day) {
    case 0: 
        console.log("Today is Monday.");
        break;
    case 1: 
        console.log("Today is Tuesday.");
        break;
    case 2: 
        console.log("Today is Wedneday.");
        break;
    case 3: 
        console.log("Today is Thursday.");
        break;
    case 4: 
        console.log("Today is Friday.");
        break;
    case 5: 
        console.log("Today is Saturday.");
        break;
    case 6: 
        console.log("Today is Sunday.");
        break;
    default: 
        console.log("Enter the correct week day.");
}