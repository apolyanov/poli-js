// control_structures_exercises.js

/**
 * =========================
 *  Control Structures: Examples
 * =========================
 */

/**
 * Example 1: Simple If Statement
 * Returns "even" or "odd" based on the parity of the number.
 */
function isEven(number) {
    return number % 2 === 0 ? 'even' : 'odd'
}

/**
 * Example 2: Nested If Statements
 * Returns a letter grade based on the numeric score.
 */
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 70) {
        return 'C'
    } else if (score >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

/**
 * Example 3: Switch Case
 * Maps a day number (0–6) to its weekday name.
 */
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        default:
            return 'Invalid day'
    }
}

/**
 * Example 4: For Loop
 * Calculates the factorial of n (n!).
 */
function factorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}

/**
 * Example 5: While Loop
 * Sums numbers from 1 up to n.
 */
function sumTo(n) {
    let sum = 0
    let i = 1
    while (i <= n) {
        sum += i
        i++
    }
    return sum
}

/**
 * Example 6: Do-While Loop
 * Logs inputs until "exit" is encountered.
 */
function promptUntilExit(inputs) {
    let i = 0
    let current
    do {
        current = inputs[i++]
        if (current !== 'exit') console.log(current)
    } while (current !== 'exit' && i < inputs.length)
}

/**
 * Example 7: For...of Loop
 * Reverses a string.
 */
function reverseString(str) {
    let reversed = ''
    for (const char of str) {
        reversed = char + reversed
    }
    return reversed
}

/**
 * Example 8: Error Handling
 * Safely parses a JSON string, returning null on failure.
 */
function safeJsonParse(jsonString) {
    try {
        return JSON.parse(jsonString)
    } catch (e) {
        return null
    }
}

/**
 * Example 9: CLI Calculator
 * Parses "operand operator operand" and computes +, -, *, /.
 */
function cliCalculator(input) {
    const [a, operator, b] = input.split(' ')
    const num1 = Number(a)
    const num2 = Number(b)
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Invalid number')
    }
    switch (operator) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            if (num2 === 0) throw new Error('Division by zero')
            return num1 / num2
        default:
            throw new Error('Invalid operator')
    }
}

/**
 * Example 10: Number Guessing Game
 * Accepts a maxAttempts and an array of guesses, logs hints.
 */
function playGuessingGame(maxAttempts, guesses) {
    const target = Math.floor(Math.random() * 100) + 1
    let attempts = 0
    for (const guess of guesses) {
        if (attempts >= maxAttempts) break
        attempts++
        const num = Number(guess)
        if (isNaN(num)) {
            console.log('Invalid guess')
            continue
        }
        if (num === target) {
            console.log('correct')
            return
        }
        console.log(num < target ? 'higher' : 'lower')
    }
    console.log(`Game over. The number was ${target}`)
}

/**
 * Example 11: Full Data Processor
 * Combines parsing, parity check, grading, property logging.
 */
function processUserData(input) {
    try {
        const obj = safeJsonParse(input)
        if (obj === null) throw new Error('Invalid JSON')
        const ageParity = isEven(obj.age)
        const grade = getGrade(obj.score)
        const properties = []
        for (const [key, value] of Object.entries(obj)) {
            properties.push(`${key}: ${value}`)
        }
        return { ageParity, grade, properties, error: null }
    } catch (e) {
        return { error: e.message }
    }
}

/**
 * =========================
 *  Practice Tasks
 * =========================
 * 1) Write function isOdd(number) that returns "odd" or "even".
 * 2) Implement getMonthName(monthNumber) using switch (1–12).
 * 3) Create sumEverySecond(n) using a for loop to sum every 2nd number.
 * 4) Build safeDivide(a, b) that returns result or throws on divide-by-zero.
 * 5) Write reverseWords(str) that reverses each word in a sentence using for...of and split.
 * 6) Implement validateUser(data) that parses JSON and checks for "name" and "email" fields, returning a boolean.
 * 7) Build a simple REPL loop with do...while that accepts commands until "quit".
 */
