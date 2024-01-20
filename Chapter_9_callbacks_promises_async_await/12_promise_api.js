let p1 = new Promise((res, rej) => {
    setTimeout(()=> {
        rej("Value 1");
    }, 8000);
});

let p2 = new Promise((res, rej) => {
    setTimeout(()=> {
        rej("Value 2");
    }, 2000);
});

let p3 = new Promise((res, rej) => {
    setTimeout(()=> {
        rej("Value 3");
    }, 3000);
});

// --------------------------------------- Promise.all([p1, p2, .....]) ---------------------------------------
// if any one promise resolves then it does not gives result -- .catch has to be used
let all_promises = Promise.all([p1, p2, p3]);
all_promises.then((value) => {
    console.log("all--> ", value);
})
.catch((value) => {
    console.log("(catch) all--> ", value);
})

// ------------------------------------ Promise.allSettled([p1, p2, ....]) ------------------------------------
// gives status and value OR
//       status and reason - if any promise rejected
all_promises = Promise.allSettled([p1, p2, p3]);
all_promises.then((value) => {
    console.log("allSettled--> ", value);
})

// ---------------------------------------- Promise.race([p1, p2, p3]) ----------------------------------------
// waits for the first promise to settle and its reslt or error becomes the outcome
all_promises = Promise.race([p1, p2, p3]);
all_promises.then((value) => {
    console.log("race--> ", value);
})
.catch((value) => {
    console.log("(catch) race--> ", value);
})

// ---------------------------------------- Promise.any([p1, p2, p3]) ----------------------------------------
// waits for the first promise to fulfill (& not reject), and its result becomes the outcome. 
// if all the promises are rejected, then throws aggregate error
all_promises = Promise.any([p1, p2, p3]);
all_promises.then((value) => {
    console.log("any--> ", value);
})

// ------------------------------------------ Promise.resolve(value) ------------------------------------------
all_promises = Promise.resolve(6);
all_promises.then((value) => {
    console.log("resolve--> ", value);
})

all_promises = Promise.reject(new Error("A new Error!"));
all_promises.then((value) => {
    console.log("reject--> ", value);
})
.catch((value) => {
    console.log("(catch) reject--> ", value);
})