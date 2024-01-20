// let var and const
console.log("Javascript code for: var, let and const")
var a  = 45;
let b = "Arnav"
// let b = "b" --> error
var c = null
var d = undefined
{
  let b = "A"
  console.log(b)
}
console.log(b) // though b = "A" inside the block but prints "Arnav" outside
{
  var a = 9;
  console.log(a)
}
console.log(a);

const author = "Arnav Umarkar"
// author = "Umarkar Arnav" // throws error --> Assignment to constant variable
console.log(author);

// var is globally scoped 
// let is block scoped && let cannot be redeclared
