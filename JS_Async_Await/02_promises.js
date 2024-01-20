let result = new Promise((res, rej)=> {
    if(true) {
        return res();
    }
    else {
        return rej();
    }
});

result
.then(function() {
    console.log("resolve hua tha.");
})
.catch(function(){
    console.log("reject hua tha.");
});

// if n<5 return "Below", if n>=5 return "Above"
let result2 = new Promise((res, rej) => {
    let n = Math.random() * 10;
    console.log(n);
    if(n<5) {
        return res();
    }
    else {
         return rej();
    }
});

result2
.then(function() {
    console.log("Below");
})
.catch(function(){
    console.log("Above");
});