/*
 Advanced JavaScript: Callbacks & Higher-Order Functions
 Examples with explanations, then practice tasks.
*/

// --------------------
// Example Section
// --------------------

// Example 1: Simple Callback
// A function that takes a callback and invokes it.
function fetchData(callback) {
    const data = { id: 1, name: 'Alice' }
    // Simulate async operation with setTimeout
    setTimeout(() => {
        // Invoke the provided callback with the data
        callback(data)
    }, 1000)
}

// Usage:
fetchData((result) => {
    console.log('Received:', result)
})

/*
   Explanation:
   - fetchData is a higher-order function because it takes another function (callback) as an argument.
   - The callback is executed once data is "fetched" (simulated here with setTimeout).
  */

// Example 2: Array.map (built-in higher-order function)
const numbers = [1, 2, 3, 4, 5]
// map takes a callback that transforms each element
const squares = numbers.map((n) => n * n)
console.log('Squares:', squares) // [1,4,9,16,25]

/*
   Explanation:
   - map is a higher-order function: it accepts a callback to apply to each array element.
   - It returns a new array of transformed values.
  */

// Example 3: Custom Higher-Order Function: repeater
// repeater returns a new function that, when called, invokes fn n times.
function repeater(fn, n) {
    return function (...args) {
        for (let i = 0; i < n; i++) {
            fn(...args)
        }
    }
}

// Usage:
const sayHi = (name) => console.log(`Hi, ${name}!`)
const sayHiThrice = repeater(sayHi, 3)
sayHiThrice('Bob')
// Hi, Bob!
// Hi, Bob!
// Hi, Bob!

/*
   Explanation:
   - repeater is a higher-order function: it takes a function fn and a number n.
   - It returns a new function that, when invoked, calls fn n times with the provided arguments.
  */

// --------------------
// Practice Tasks
// --------------------

// Task 1: Delayed Logger
// Write a function named `delayedLog` that accepts two parameters:
// `message` (string) and `delay` (ms). It should use setTimeout to log
// the message after the given delay.
function delayedLog(message, delay) {
    // TODO: implement
}

// Task 2: Custom Filter
// Write a function named `customFilter` that takes an array and a predicate callback.
// It should return a new array containing only elements for which the predicate returns true.
function customFilter(arr, predicate) {
    // TODO: implement
}

// Task 3: Once Wrapper
// Implement a function named `once` that takes a function `fn` and returns
// a new function that can only be called once. Subsequent calls should return
// the first result without invoking `fn` again.
function once(fn) {
    // TODO: implement
}

// Task 4: Pipeline Composition
// Write a function named `pipe` that takes any number of functions as arguments
// and returns a new function that, when called with a value, passes it through
// each function in sequence. E.g. pipe(f, g, h)(x) = h(g(f(x))).
function pipe(...fns) {
    // TODO: implement
}

// Task 5: Async Sequence
// Write a function named `runInSequence` that takes an array of functions,
// each returning a Promise. It should execute them one after another,
// waiting for each to resolve before calling the next, and return a Promise
// with an array of all results in order.
function runInSequence(promiseFns) {
    // TODO: implement
}
