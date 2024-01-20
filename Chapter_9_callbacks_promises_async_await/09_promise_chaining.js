let p = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve("Promise 1");
    }, 2000);
});

p.then((result) => {
    console.log(result);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2");
        }, 2000);
    })
    return p2;
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve("We are done");
    });
}).then((result) => {
    console.log(result);
    return 2; // converts it into promise
}).then((result) => {
    console.log(result);
    console.log("Now we are pakka done");
});