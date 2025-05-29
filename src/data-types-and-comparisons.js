// Task 2: Exploring Data Types & Comparison Operators

/*
  1. Examples of Data Types and Comparisons
*/

// a) Primitive Data Types
// Number
let age = 30 // typeof age === "number"
// String
let name = 'Alice' // typeof name === "string"
// Boolean
let isStudent = true // typeof isStudent === "boolean"
// Undefined
let score // typeof score === "undefined"
// Null
let empty = null // typeof empty === "object" (quirk of JS)
// Symbol (ES6+)
let sym = Symbol('id') // unique and immutable
// BigInt (ES2020+)
let big = 1234567890123456789012345n // typeof big === "bigint"

// b) Equality vs. Strict Equality
console.log(1 == '1') // true:  "==" does type coercion
console.log(1 === '1') // false: "===" checks both type & value
console.log(0 == false) // true
console.log(0 === false) // false

// c) Relational Comparisons
console.log(5 > 3) // true
console.log(5 < 3) // false
console.log('a' < 'b') // true: lexicographical order
console.log('2' > '12') // true: string comparison

// d) Truthy vs. Falsy
// Falsy: false, 0, "", null, undefined, NaN
console.log(Boolean('')) // false
console.log(Boolean('hello')) // true

/*
  2. Practice Exercises
*/

// 1. Type Identification
//    - Declare four variables: number, string, boolean, undefined
//    - Use typeof to log each type

// 2. Null vs. Undefined
//    - Create var1 = null; var2 uninitialized
//    - If var1 === null, log "Null!"
//    - If var2 === undefined, log "No value!"

// 3. Equality Challenge
//    - Predict and then verify these:
//      0 == false, 0 === false, "" == false, "" === false, null == undefined, null === undefined

// 4. Relational Puzzle
//    - Explain results of:
//      "5" > 3
//      "apple" < "banana"
//      "2" > "12"
//      7 >= "7"

// 5. Truthy/Falsy Filter
//    let items = [0, "JS", "", null, 42, undefined, "0"];
//    - Use .filter() to keep only truthy values
//    - Log the resulting array

// 6. Comparing Objects & Arrays
//    - let obj1 = {}; let obj2 = {};
//    - Compare obj1 == obj2 and obj1 === obj2
//    - let obj3 = obj1; compare obj3 === obj1

// 7. Build a Comparison Function
//    function compareVals(a, b) {
//      // "Same type & value" if a === b
//      // "Same value but different type" if a == b but a !== b
//      // "Different value" otherwise
//    }
//    - Test with compareVals(1, "1"), compareVals(2, 2), compareVals(true, 0)

const compareVals = (a,b) => {
    let value
    if(a === b) {
       value = true
    } else if(a == b) {
         value = false
    } else {
         value = false
    }

    return console.log({ value })
}

compareVals(5,'2')