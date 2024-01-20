var a = "Arnav"
var b = 8
var c = undefined
var d = null

const constant = "ABC"

console.log("a = ", a)
console.log("constant = ", constant)

{
    console.log("Block start")
    a = 5
    console.log("a = ", a)

    // constant = 55 // => TypeError: Assignment to constant variable.
    // constant cannot be updated it must be redeclared in block only
    const constant = 55
    console.log("constant = ", constant)
    console.log("Block end")
}

console.log("a = ", a)
console.log("constant = ", constant)

console.log("2nd part")
let variable = 66
var2 = 88
console.log(var2)
console.log(variable)
{
    variable = 77
    console.log(variable)
}
console.log(variable)