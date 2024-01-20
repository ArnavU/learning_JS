// A closure is a function having access to the parent scope, even after the parent function has closed.

let add = (function () {
    let counter = 0;
    return function() { 
        counter += 1; 
        return counter; 
    }
}) ();

console.log(add());
console.log(add());
console.log(add());
console.log();

// #################### Other way to solve this ####################
let add2 = function() {
    let counter = 0;
    return () => {
        counter+=1;
        return counter;
    }
};

let fun = add2();

console.log(fun());
console.log(fun());
console.log(fun());