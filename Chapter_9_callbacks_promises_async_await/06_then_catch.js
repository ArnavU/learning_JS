// ------------------------------ Promise 1 ------------------------------
let p1 = new Promise((resolve, reject) => {
    console.log("I am a Promise and I am pending");
    setTimeout(()=> {
        return resolve("I am resolved."); // we can omit using "return" while resolving or rejecting
    }, 2000);
});

p1.then((result)=>{
    console.log(result);
});

// Promises execute parallely - both promises will get resolved in 2 seconds
// ------------------------------ Promise 2 ------------------------------
let p2 = new Promise((resolve, reject) => {
    console.log("I am a Promise and I am pending");
    setTimeout(()=> {
        resolve("I am resolved.");
    }, 2000);
});

p2.then((result)=>{
    console.log(result);
});

