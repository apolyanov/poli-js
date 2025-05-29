// Examples and Exercises: Reusing Functions in JavaScript

/*
  ===== Examples =====
*/

// 1. Simple greeting function
function greet(name) {
    return `Hello, ${name}!`
}

// Reuse: calling greet() multiple times
console.log(greet('Alice')) // Hello, Alice!
console.log(greet('Bob')) // Hello, Bob!

// 2. Basic math helper
function add(a, b) {
    return a + b
}

// Reuse: composing other functions
total = add(5, 7)
console.log(`5 + 7 = ${total}`)

function multiply(a, b) {
    let product = 0
    for (let i = 0; i < b; i++) {
        product = add(product, a)
    }
    return product
}

console.log(`3 × 4 = ${multiply(3, 4)}`)

// 3. Array utilities
function isEven(num) {
    return num % 2 === 0
}

// Reuse: filtering an array
const numbers = [1, 2, 3, 4, 5, 6]
const evens = numbers.filter(isEven)
console.log('Even numbers:', evens)

/*
    ===== Exercises =====
    Complete the tasks below by writing functions and reusing them where appropriate.
  */

// 1. create a function 'square' that returns the square of a number
//    then use it to compute the squares of an array of numbers via Array.map

// 2. write a function 'fullName' that takes firstName and lastName and returns a combined string
//    then write another function 'introduce' that accepts first and last names, reuses fullName(),
//    and returns a sentence like "My name is John Doe."

// 3. implement a function 'fahrenheitToCelsius' that converts a temperature
//    then write a function 'convertAll' that takes an array of Fahrenheit values and returns Celsius values
//    (reuse fahrenheitToCelsius inside convertAll)
// °C = (°F - 32) × 5/9

// 4. create a helper function 'capitalize' that makes the first letter of a word uppercase
//    then write a function 'titleCase' that turns a sentence into Title Case (every word capitalized)

// 5. build a function 'compose' that takes two functions f and g and returns their composition (x => f(g(x)))
//    use 'compose' to create a function that trims whitespace then capitalizes a word

// -------------------------------------------------------------
// To test your solutions, call each exercise function and log the results!

// Example for exercise 1:
// const nums = [1, 2, 3, 4];
// const squares = nums.map(square);
// console.log(squares); // [1, 4, 9, 16]

// -------------------------------------------------------------
// Happy coding! Reuse functions to keep your code DRY and maintainable.
