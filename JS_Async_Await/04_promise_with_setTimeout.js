// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async task is completed");
//         resolve();
//     }, 1000);
// })

const { zip } = require("lodash");

// promiseOne.then(() => {
//     console.log("Promise Consumed");
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async task 2");
//         resolve();
//     }, 1000);
// }).then(() => {
//     console.log("Async task 2 resolved");
// })

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({fname: "Arnav", lname: "Umarkar"});
//     }, 1000);
// })

// promise3.then((user) => {
//     console.log(user.fname);
// });

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error) {
//             resolve({fname: "Arnav", lname: "Umarkar"});
//         }
//         else {
//             reject("ERROR: Something went wrong");
//         }
//     }, 2000);
// })

// promise4.then((user) => {
//     console.log("Promise4 resolved\n");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(user);
//         }, 1000);
//     })
// })
// .then((userData)=> {
//     console.log("First .then() resolved");
//     console.log(userData);
//     console.log();
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(userData.fname);
//         }, 2000)
//     })
// })
// .then((fname)=> {
//     console.log("Second .then() resolved");
//     console.log(fname);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("This is finally Block");
// })

// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if(!error) {
//             resolve({fname: "Arnav", lname: "Umarkar"});
//         }
//         else {
//             reject("ERROR: Something went wrong in JS")
//         }
//     }, 1000);
// })

// async function consumePromise5() {
//     try { 
//         const response = await promise5;
//         console.log(response);
//     }
//     catch(err) {
//         console.log(err);
//     } 
//     finally {
//         console.log("This is finally block");
//     }

// }

// consumePromise5();

// async function getAllUsers() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await response.json();
//         console.log(data);
//     }
//     catch (err) {
//         console.log("E: " + err);
//     }
// }

// getAllUsers();

let response = fetch('https://jsonplaceholder.typicode.com/users');
response.then((data) => {
    return data.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("Error: ", err);
})