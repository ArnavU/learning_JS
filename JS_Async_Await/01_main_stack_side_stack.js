console.log("Hey 1");
console.log("Hey 2");
setTimeout(function() { // => goes to side stack
    console.log("Hey 3");
}, 2000);
console.log("Hey 4");