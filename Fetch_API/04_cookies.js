console.log(document.cookie);
document.cookie = "name=arnav8010";
document.cookie = "name2=ArnavUmarkar";
document.cookie = "name=ABC";
console.log(document.cookie)

let key = prompt("Enter the key");
let value = prompt("Enter the value")

// document.cookie = `${key} = ${value}` // semi colon is accepted

// use "encodeURIComponent" to use ";"
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)

// use "decodeURIComponent" to decode