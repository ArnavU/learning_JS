// Non primitive data types - objects in JS7

const item = {
    "Arnav": true,
    "Harry": false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["Arnav"])
console.log(item.Lovish);

for(let ele in item) {
    console.log(item[ele]) 
}
