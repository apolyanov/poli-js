/*
 JavaScript Function Examples and Exercises
 Examples first, then blank tasks for practice.
*/

// JavaScript Functions Module Exercises and Examples
// ================================================

/*
  124. Module Introduction
  --------------------------------------
  In this module, we'll deepen our understanding of JavaScript functions—including their syntax, capabilities,
  and advanced patterns like callbacks, arrow functions, and methods like bind, call, and apply.
*/

// 125. Recapping Functions Knowledge - What We Know Thus Far
// --------------------------------------
// Example: Simple function declaration and invocation
function greet(name) {
    console.log(`Hello, ${name}!`)
}
greet('Alice') // Hello, Alice!

// Exercise 1: Write a function `sum` that takes two numbers and returns their sum.
// Example usage: console.log(sum(3, 5)); // 8

// 126. Parameters vs Arguments
// --------------------------------------
// Example: `a` and `b` are parameters; 2 and 3 are arguments
function multiply(a, b) {
    return a * b
}
console.log(multiply(2, 3)) // 6

// Exercise 2: Create a function `createFullName(firstName, lastName)` that returns the full name.

// 127. Functions vs Methods
// --------------------------------------
// Example: standalone function vs method on an object
function standalone() {
    console.log("I'm a standalone function.")
}
const obj = {
    method() {
        console.log("I'm a method on an object.")
    },
}
standalone()
obj.method()

// Exercise 3: Add a method `describe` to the object `car` that logs "This car is a <make> <model>."
// const car = { make: 'Toyota', model: 'Corolla' };

// 128. Functions are Objects!
// --------------------------------------
// Example: Functions have properties
function foo() {}
foo.description = 'This is a test function.'
console.log(foo.description) // "This is a test function."

// Exercise 4: Give your `sum` function (from Exercise 1) a custom property `version` and log it.

// 129. Function Expressions: Storing Functions in Variables
// --------------------------------------
// Example: function expression
const square = function (x) {
    return x * x
}
console.log(square(4)) // 16

// Exercise 5: Create a function expression called `divide` that divides two numbers.

// 130. Function Expressions vs Function Declarations
// --------------------------------------
console.log(declared())
function declared() {
    return 'Hi from declaration'
}
const expr = function () {
    return 'Hi from expression'
}

// Exercise 6: Predict which calls will succeed/fail, then test in console.

// 131. Anonymous Functions
// --------------------------------------
// Example: anonymous function passed as callback
setTimeout(function () {
    console.log('Anonymous callback executed')
}, 1000)

// 134. Introducing Arrow Functions
// --------------------------------------
// Example: concise syntax
const add = (x, y) => x + y
console.log(add(5, 7)) // 12

// Exercise 10: Rewrite `multiply` from above as an arrow function.

// 135. Different Arrow Function Syntaxes
// --------------------------------------
// 1) Single parameter, implicit return
const square2 = (n) => n * n
// 2) Multiple params, explicit return
const sumAll = (a, b, c) => {
    return a + b + c
}

// Exercise 11: Write three versions of a `greet` arrow function:
// - No params: logs "Hello!"
// - One param: logs "Hello, <name>!"
// - Two params: returns a personalized message string.

// 136. Outputting Messages to the User
// --------------------------------------
// Example: alert vs console.log
console.log('This is a console message')
// alert("This is an alert box");

// Exercise 12: Display a prompt asking for user's age and alert a message.

// 137. Default Arguments in Functions
// --------------------------------------
// Example: default parameter
function makeGreeting(name = 'Guest') {
    return `Welcome, ${name}!`
}
console.log(makeGreeting()) // Welcome, Guest!

// Exercise 13: Create `createUser(name, role="member")` that returns an object { name, role }.

// 138. Introducing Rest Parameters ("Rest Operator")
// --------------------------------------
// Example: gather arguments into array
function concatenate(separator, ...words) {
    return words.join(separator)
}
console.log(concatenate(', ', 'apple', 'banana', 'cherry')) // apple, banana, cherry

// Exercise 14: Write `sumAllNumbers(...nums)` that returns the sum of all nums.

// 139. Creating Functions Inside of Functions
// --------------------------------------
// Example: helper function scoped inside
function outer(x) {
    function inner(y) {
        return x + y
    }
    return inner
}
const addTen = outer(10)
console.log(addTen(5)) // 15

// Exercise 15: Create a function `makeMultiplier(multiplier)` that returns a function to multiply by that value.

// 140. Understanding Callback Functions
// --------------------------------------
// Example: passing a function as an argument
function performOperation(a, b, operation) {
    return operation(a, b)
}
console.log(performOperation(6, 7, (x, y) => x * y)) // 42

// Exercise 16: Implement a function `filterArray(arr, testFn)` that returns a new array meeting `testFn`.

// 141. Working with `bind()`
// --------------------------------------
// Example: fix `this` context
const user = {
    name: 'Sam',
    getName() {
        return this.name
    },
}
const getName = user.getName
console.log(getName()) // undefined
const boundGetName = user.getName.bind(user)
console.log(boundGetName()) // Sam

// Exercise 17: Use `bind` to fix context on a method used as callback.

// 142. Adding `bind()` to the Calculator Project
// --------------------------------------
// Skeleton calculator object
const calculator = {
    x: 0,
    y: 0,
    set(xVal, yVal) {
        this.x = xVal
        this.y = yVal
    },
    add() {
        return this.x + this.y
    },
}
// Exercise 18: Create a standalone `addFn` from `calculator.add` using `bind`, then test it.

// 143. `call()` and `apply()`
// --------------------------------------
// Example:
function introduce(age, hobby) {
    console.log(
        `My name is ${this.name}, I'm ${age} years old and I like ${hobby}.`
    )
}
const me = { name: 'Jordan' }
introduce.call(me, 29, 'chess')
introduce.apply(me, [29, 'chess'])

// Exercise 19: Use `call` and `apply` to borrow a method from one object for another.

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
