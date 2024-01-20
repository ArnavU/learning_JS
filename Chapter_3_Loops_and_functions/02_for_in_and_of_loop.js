const obj = {
    Arnav: 55,
    Vijay: 43,
    Vikrant: 12,
    Vinayak: 66
}

// for in loop
for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a]);
}

// for of loop
for(let a of "Arnav"){
    console.log(a);
}