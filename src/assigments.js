// JavaScript Exercises: Variable & Object Value Assignments and Copying

// 1. Primitive Value Assignment
let a = 10
let b = a
a = 20
console.log('1. Primitive Assignment:', a, b) // 20 10

// 2. More Primitives: Strings & Booleans
let s1 = 'hello'
let s2 = s1
s1 = s1.toUpperCase()
console.log('2a. String Assignment:', s1, s2) // "HELLO" "hello"

let flag1 = true
let flag2 = flag1
flag1 = false
console.log('2b. Boolean Assignment:', flag1, flag2) // false true

// 3. Object Reference Assignment
const obj1 = { x: 1, y: 2 }
const obj2 = obj1
obj2.x = 100
console.log('3. Object Reference:', obj1.x, obj2.x) // 100 100

// 4. Shallow Copy with Object.assign
const original = { a: 1, b: 2 }
const copy1 = Object.assign({}, original)
copy1.b = 200
console.log('4. Object.assign Shallow Copy:', original.b, copy1.b) // 2 200

// 5. Shallow Copy with the Spread Operator
const user = { name: 'Alice', age: 30 }
const userCopy = { ...user }
userCopy.age = 99
console.log('5. Spread Shallow Copy:', user.age, userCopy.age) // 30 99

// 6. Shallow vs. Deep Copy Pitfall
const nested = { id: 1, prefs: { theme: 'dark' } }
const shallow = { ...nested }
shallow.prefs.theme = 'light'
console.log(
    '6. Shallow vs Deep Pitfall:',
    nested.prefs.theme,
    shallow.prefs.theme
) // "light" "light"

// 7. Deep Cloning with JSON
const complex = {
    name: 'Bob',
    settings: {
        layout: 'grid',
        notifications: { email: true },
    },
}
const deep1 = JSON.parse(JSON.stringify(complex))
deep1.settings.notifications.email = false
console.log(
    '7. JSON Deep Clone:',
    complex.settings.notifications.email,
    deep1.settings.notifications.email
) // true false

// 8. Deep Cloning with structuredClone (Modern JS)
const data = {
    created: new Date(),
    calculate: () => 42,
    nested: { arr: [1, 2, 3] },
}
// Note: structuredClone may not exist in all environments; fallback or polyfill may be required.
const deep2 =
    typeof structuredClone === 'function'
        ? structuredClone(data)
        : JSON.parse(JSON.stringify(data))
deep2.nested.arr.push(4)
console.log('8. structuredClone Deep Copy:', data.nested.arr, deep2.nested.arr) // [1,2,3] [1,2,3,4]
