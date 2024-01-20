// There are two ways to consume promises 
// 1) by using .then() and .catch()
// 2) by using try and catch in async await syntax

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({usersname: "Arnav", password: 1234});
        }
        else {
            reject("ERROR: JS went wrong!");
        }
    }, 1000)
})

// consume promise using .then() and .catch()
// p.then((value) => {
//     console.log(value);
//     return value.usersname;
// }).then((uname)=> {
//     console.log(uname);
// }).catch((value) => {
//     console.log(value);
// })

// consume promise using async await and try catch
let consumePromise = async () => {
    try {
        let response = await p;
        console.log(response);
        console.log(response.usersname);        
    }
    catch(error) {
        console.log(error);
    }
}

consumePromise();