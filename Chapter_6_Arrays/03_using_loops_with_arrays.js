let arr = [1, 2, 3, 4, 5, 6, 7];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

arr.forEach(element =>{
    console.log(element*element);
});
console.log(arr);

// Array.from  -->  used for making array from an object or from HTML collection
let myName = "Arnav";
let nameArray = Array.from(myName); 
console.log(nameArray);

// for...of loop
let num = [22, 33, 44, 55, 66];
for(let i of num){
    console.log(i);
}

// for...in loop
for(let i in num){
    console.log(i);
}