setTimeout(()=> {
    console.log("Hacking wifi... Please wait...");
}, 1000);

try {
    console.log(rahul);
}
catch(error) {
    console.log("balle balle");
}

// this error will not be caught
// try catch block cannot detect error in scheduled code
// try {
//     setTimeout(()=> {
//         console.log(rahul);
//     }, 2000);
// }
// catch(err) {
//     console.log("Balle Balle");
// }

setTimeout(()=>{
    console.log("Fetching username and password... Please wait...");
}, 2000);

setTimeout(()=> {
    console.log("Hacking Rahul's facebook id... Please wait...");
}, 3000);