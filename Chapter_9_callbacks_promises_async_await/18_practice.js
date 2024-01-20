let p = new Promise((resolve, reject) => {
    resolve("Value 1");
})

let p2 = p.then((value) => {
    console.log(value);
    return "Arnav";
})

console.log(p2); // Therefore, .then() handler returns a promise