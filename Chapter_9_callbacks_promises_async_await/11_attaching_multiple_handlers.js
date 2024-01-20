let p = new Promise((resolve, reject) => {
    console.log("Promise pending");
    setTimeout(()=> {
        resolve("Promise resolved");
        // return("Promise resolved"); // same as the above
    }, 2000);
});

p.then((result) => {
    console.log(result + " From 1st handler");
});

p.then((result) => {
    console.log(result + " From 2nd handler");
})