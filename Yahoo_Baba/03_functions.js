let a = 10;
let b = 30;

function sum(a, b) {
    console.log(a+b);
}

function hello(fname="Arnav", lname="Umarkar") {
    console.log("Hello", fname, lname);
}

hello("Vikramaditya", "ram");

sum(a, b);

//------------------------ Arrow function ------------------------
let hello2 = (fname, lname) => {
    console.log("Good Morning", fname, lname);
}
hello2("Raj", "Krish");