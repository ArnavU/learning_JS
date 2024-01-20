// "HTTPS://goweather.herokuapp.com/weather/Ny"

// let p = fetch("HTTPS://goweather.herokuapp.com/weather/Ny")
// p.then(res => console.log(res))

// let p = fetch("HTTPS://goweather.herokuapp.com/weather/Ny")
// p.then(res => res.json())
//     .then(data => console.log(data))


let p = fetch("HTTPS://goweather.herokuapp.com/weather/Ny")

p.then((response)=> {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers)
    // return response.text(); 
    return response.json();     // .text() and .json() cannot be used together
}).then((data)=> {
    console.log(data)
})