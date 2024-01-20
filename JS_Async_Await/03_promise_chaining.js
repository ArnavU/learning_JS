// perform the following tasks inside promises
// 1) performing task 1 and task 1 completed, then
// 2) performing task 2 and task 2 completed, then
// 3) performing task 3 and task 3 completed, then
// 4) performing task 4 and task 4 completed

// promise chaining
let p1 = new Promise((res, rej) => {
    return res("performing task 1 and task 1 completed");
});

let p2 = p1.then(function(data) {
    console.log(data);
    return new Promise((res, rej) => {
        return res("performing task 2 and task 2 completed");
    });
});

let p3 = p2.then(function(data) {
    console.log(data);
    return new Promise((res, rej) => {
        res("performing task 3 and task 3 completed");
    });
});

let p4 = p3.then(function(data) {
    console.log(data);
    return new Promise((res, rej) => {
        res("performing task 4 and task 4 completed");
    });
});  

p4.then(function(data) {
    console.log(data);
})