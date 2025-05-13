// arrays_and_methods.js

/* =====================
   Examples: Array Methods
   ===================== */

// 1. forEach: iterate and log each element with its index
const numbers = [1, 2, 3, 4, 5]
numbers.forEach((num, idx) => console.log(`Index ${idx}: ${num}`))

// 2. map: transform each element to a new value
const doubled = numbers.map((n) => n * 2)
console.log(doubled) // [2, 4, 6, 8, 10]

// 3. filter: select elements matching a condition
const evens = numbers.filter((n) => n % 2 === 0)
console.log(evens) // [2, 4]

// 4. find: return the first element matching a predicate
const firstGreaterThanThree = numbers.find((n) => n > 3)
console.log(firstGreaterThanThree) // 4

// 5. some & every: boolean checks
const hasNegative = numbers.some((n) => n < 0) // false
const allPositive = numbers.every((n) => n > 0) // true

// 6. reduce: powerful accumulator for various tasks

// a) Sum of all elements\ nconst sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum) // 15

// b) Maximum value in the array
const max = numbers.reduce((acc, n) => (n > acc ? n : acc), numbers[0])
console.log(max) // 5

// c) Count occurrences in an array
const letters = ['a', 'b', 'a', 'c', 'b', 'a']
const counts = letters.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
}, {})
console.log(counts) // { a: 3, b: 2, c: 1 }

// d) Flatten a nested array
const nested = [[1, 2], [3, 4], [5]]
const flat = nested.reduce((acc, arr) => acc.concat(arr), [])
console.log(flat) // [1, 2, 3, 4, 5]

// e) Group objects by a key
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 18 },
    { name: 'Charlie', age: 21 },
]
const groupedByAge = people.reduce((acc, person) => {
    const key = person.age
    if (!acc[key]) acc[key] = []
    acc[key].push(person)
    return acc
}, {})
console.log(groupedByAge)
// { '18': [{ name: 'Bob', age: 18 }], '21': [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }] }

/* =====================
   Exercises: Focus on reduce
   ===================== */

// 1. Use reduce to calculate the sum of [10, 20, 30, 40, 50].

// 2. Use reduce to find the product of [2, 3, 5, 7, 11].

// 3. Given ['apple', 'banana', 'apple', 'orange', 'banana'], use reduce to create a frequency map of each fruit.

// 4. Flatten [[['a'], ['b']], [['c']], ['d', 'e']] to ['a','b','c','d','e'] using reduce.

// 5. Given an array of user objects with a "score" property, use reduce to compute the average score.

// 6. Implement your own map function using reduce:
//    myMap = (arr, fn) => /* ... */

// 7. Given an arguments object in a function, convert it to an array and sum all its elements using reduce.

// 8. Use reduce to group an array of strings by their first letter.

// 9. Combine filter and reduce: from [1,2,3,...,20], sum only the even numbers.

// 10. Given [{price: 10},{price:15},{price:20}], use reduce to get the total price.
