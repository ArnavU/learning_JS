// toString
let array = [1, 33, 43, 12];
let b = array.toString();
console.log(b);
console.log(typeof b);

// join
let c = array.join("_");
console.log(c);
console.log(typeof c);

// pop
let p = array.pop(); // returns popped element
console.log(array, p);

// push
let pu = array.push(56); // returns new array length
console.log(array, pu);

// shift
let sh = array.shift(); // removes an element from the start of the array and returns it
console.log(array, sh);

// unshift
let ush = array.unshift(111); // adds an element to the start of the array and returns the new array length
console.log(array, ush);

// delete
let num = [1, 2, 3, 4, 5, 6];
delete num[0];
console.log(num);
console.log(num.length);

// concat
let num2 = [7, 8, 9, 10];
let num3 = [11, 12, 13, 14, 15]
let new_num = num.concat(num2, num3);
console.log(new_num);

// sort
let unsorted = [55, 23, 0, 1, 9, 22];
unsorted.sort(); // sorts alphabetically ??
console.log(unsorted);

const compare = (a, b)=>{
    return a - b;
}
unsorted.sort(compare);
console.log(unsorted);

// reverse
let rarray = [22, 12, 1, 0, 99];
rarray = rarray.reverse();
console.log(rarray);

// splice
let arr = ['Apple', 'Orange', 'Banana', 'Kivi', 'Grapes'];
let spl = arr.splice(2, 2, 1012, 1022, 1033); // returns deleted items and modifies original array
console.log(arr, spl);

// slice
let arr2 = [1, 12, 123, 1234, 12345, 126, 127];
let slic = arr2.slice(3);
console.log(slic);
console.log(arr2);

let slic2 = arr2.slice(3, 5);
console.log(slic2);
