let p = new Promise((res, rej) => {
    console.log("This is a Promise");
    return res(57);
});

p.then((result)=> {
    console.log(result);
})

console.log("Start");
setTimeout(()=> {
    console.log("This is setTimeout");
}, 2000);
console.log("End");

console.log(p);
