// The keyword async before a function makes the function return a promise.

async function myFunction() {
    return "Hello";
}

// myFunction().then(
//     function (value) { /* code if successful */ },
//     function (error) { /* code if some error */ }
// );


myFunction().then((value) => {
    console.log(value);
})

// ---------------------- await ----------------------
// The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:


async function twoOperations() {
    let myPromise = new Promise((resolve)=> {
        setTimeout(()=>{
            resolve("Value after 3 seconds");
        }, 3000);
    });

    let myPromise2 = new Promise((resolve)=> {
        setTimeout(()=> {
            resolve("Value after 2 seconds");
        }, 2000);
    });

    let p1 = await myPromise;
    console.log(p1);

    let p2 = await myPromise2;
    console.log(p2);

    // myPromise.then((value)=> {
    //     console.log(value);
    // });

    // myPromise2.then((value)=> {
    //     console.log(value);
    // })
}

twoOperations();