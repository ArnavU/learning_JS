let add = function() {
    let counter = 0;
    return () => {
        counter+=1;
        return counter;
    }
};

let fun = add();

console.log(fun());
console.log(fun());
console.log(fun());