let arr = [45, 23, 21];

// map --> new array can be created
let mapArr = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value + 1;
});
console.log(mapArr);

// filter --> 
let arr2 = [45, 23, 21, 0, 3, 5];
let filterArr = arr2.filter((element)=>{
    return element<10; // the value for which true is returned is added to the new array
});
console.log(filterArr);

// reduce --> gives sum of the array elements
let arr3 = [1, 2, 2, 3, 4];
const reduce_func = (h1, h2)=>{
    return h1 + h2;
}
let reduceArr = arr3.reduce(reduce_func);
console.log(reduceArr);

