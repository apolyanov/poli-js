/*
 JavaScript Function Examples and Exercises
 Examples first, then blank tasks for practice.
*/

// --------------------
// Example Implementations
// --------------------

// Example 1: Basic Greeting
// Logs a greeting message to the console.
function greet(name) {
    console.log(`Hello, ${name}!`)
}
// Usage:
// greet('Alice'); // Hello, Alice!

// Example 2: Sum of Two Numbers
// Returns the sum of a and b.
function add(a, b) {
    return a + b
}
// Usage:
// console.log(add(3, 7)); // 10

// Example 3: Check Even Number
// Returns true if n is even; otherwise false.
const isEven = (n) => n % 2 === 0
// Usage:
// console.log(isEven(4)); // true
// console.log(isEven(5)); // false

// Example 4: Factorial (recursive)
// Computes the factorial of n.
function factorial(n) {
    if (n < 0) return undefined
    return n <= 1 ? 1 : n * factorial(n - 1)
}
// Usage:
// console.log(factorial(5)); // 120

// --------------------
// Practice Tasks
// Implement the functions below following the examples above.
// --------------------

// Task 1: Basic Greeting
// Write a function named `greetTask` that takes a single parameter `name` (string)
// and logs "Hello, <name>!" to the console.
function greetTask(name) {
    // TODO: implement
}

// Task 2: Sum of Two Numbers
// Write a function named `addTask` that takes two parameters `a` and `b` (numbers)
// and returns their sum.
function addTask(a, b) {
    // TODO: implement
}

// Task 3: Check Even Number
// Write a function named `isEvenTask` that takes one parameter `n` (number)
// and returns `true` if `n` is even, otherwise `false`.
function isEvenTask(n) {
    // TODO: implement
}

// Task 4: Find Maximum
// Write a function named `findMaxTask` that takes two numbers `x` and `y` as parameters
// and returns the larger of the two.
function findMaxTask(x, y) {
    // TODO: implement
}

// Task 5: Factorial
// Write a function named `factorialTask` that takes a non-negative integer `n`
// and returns its factorial (n!). You can use a loop or recursion.
function factorialTask(n) {
    // TODO: implement
}

// Task 6: Arrow Function for Square
// Rewrite the function `squareTask` as an ES6 arrow function that takes one parameter `num`
// and returns its square.
const squareTask = (num) => {
    // TODO: implement
}

// Task 7: Default Parameters
// Write a function named `multiplyTask` that takes two parameters `a` and `b` (numbers),
// where `b` has a default value of 2. The function should return the product of `a` and `b`.
function multiplyTask(a, b = 2) {
    // TODO: implement
}

// Task 8: Higher-Order Function
// Write a function named `applyOperationTask` that takes three parameters:
// `a` (number), `b` (number), and `operation` (a function). It should return the result of
// calling `operation(a, b)`.
function applyOperationTask(a, b, operation) {
    // TODO: implement
}
