# let, var and const

 key differences in terms of ***scope, hoisting, and mutability***.

## var:

- var has function scope, meaning it is scoped to the nearest function block.
- var variables are hoisted to the top of their function or global scope during the compilation phase. This means you can use a variable before it's declared in the code, but it will have the value undefined.
- var allows redeclaration within the same scope, and it is not block-scoped.

``` javascript
function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (not blocked by the if statement)
} 
```

## let:

- let was introduced in ECMAScript 6 (ES6) and has block scope, meaning it is scoped to the nearest enclosing block (typically a pair of curly braces {}).
- let is also hoisted but is not initialized until the declaration statement is encountered in the code.
- let does not allow redeclaration of the same variable within the same scope.

``` javascript
Copy code
function example() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ReferenceError: y is not defined (blocked by the if statement)
}
```
## const:

- Like let, const was introduced in ES6 and has block scope.
const is used to declare constants. 
- const variables must be initialized at the time of declaration and cannot be left uninitialized.
- Once a value is assigned to a const variable, it cannot be reassigned.

``` javascript
Copy code
const z = 30;
z = 40; // Error: Assignment to constant variable.
```

In general, it's recommended to use const by default and only use let when you know the variable's value will be reassigned. This helps make your code more predictable and avoids unintentional reassignments. var is used less frequently in modern JavaScript due to its function-scoping behavior and potential issues with hoisting.