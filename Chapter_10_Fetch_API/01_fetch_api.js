// ------------------------------------- fetch using async/await -------------------------------------
/*
async function getData() {
    let response = await fetch('https://api.github.com/users/hiteshchoudhary');
    // let data = await response.json();
    let data = await response.json();
    console.log(data);
}
getData();
*/

// fetch using .then()
let response = fetch('https://api.github.com/users/hiteshchoudhary');

response.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
})





