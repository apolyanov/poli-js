/*
 JavaScript Function Examples and Exercises
 Examples first, then blank tasks for practice.
*/

// --------------------
// Example Implementations
// --------------------

// Task 1: Basic Greeting
// Write a function named `greetTask` that takes a single parameter `name` (string)
// and logs "Hello, <name>!" to the console.
function greetTask(name) {
    console.log(`Hello ${name}!`)
}

greetTask('Alexander Polyanov')

// Task 2: Sum of Two Numbers
// Write a function named `addTask` that takes two parameters `a` and `b` (numbers)
// and returns their sum.
function addTask(a, b) {
    let sum = 0

    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('Not a number')
    } else {
        sum = a + b
        console.log(sum)
    }
}

// addTask(1, 2)

// Task 3: Check Even Number
// Write a function named `isEvenTask` that takes one parameter `n` (number)
// and returns `true` if `n` is even, otherwise `false`.
function isEvenTask(n) {
    if (n % 2 === 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}

// isEvenTask(10)

// Task 4: Find Maximum
// Write a function named `findMaxTask` that takes two numbers `x` and `y` as parameters
// and returns the larger of the two.
function findMaxTask(x, y) {
    if (x > y) {
        console.log(x)
    } else {
        console.log(y)
    }
}

// findMaxTask(20, 10)

// Task 6: Arrow Function for Square
// Rewrite the function `squareTask` as an ES6 arrow function that takes one parameter `num`
// and returns its square.
const squareTask = (num) => {
    let square = num * num

    console.log(square)
}

// squareTask(4)

// Task 7: Default Parameters
// Write a function named `multiplyTask` that takes two parameters `a` and `b` (numbers),
// where `b` has a default value of 2. The function should return the product of `a` and `b`.
function multiplyTask(a, b = 2) {
    let product = a * b

    console.log(product)
}

// multiplyTask(2, 10)

// Task 8: Higher-Order Function
// Write a function named `applyOperationTask` that takes three parameters:
// `a` (number), `b` (number), and `operation` (a function). It should return the result of
// calling `operation(a, b)`.
function applyOperationTask(a, b, operation) {
    operation(a, b)
}

applyOperationTask(1, 2, (a, b) => {
    return console.log(a + b)
})
