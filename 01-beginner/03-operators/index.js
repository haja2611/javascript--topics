// 01-beginner/03-operators/index.js

// 1. Arithmetic Operators
// Used for performing mathematical calculations.
let a = 10;
let b = 3;

console.log(`a + b = ${a + b}`); // Addition: 13
console.log(`a - b = ${a - b}`); // Subtraction: 7
console.log(`a * b = ${a * b}`); // Multiplication: 30
console.log(`a / b = ${a / b}`); // Division: 3.333...
console.log(`a % b = ${a % b}`); // Modulus (remainder): 1
console.log(`a ** b = ${a ** b}`); // Exponentiation (ES7): 1000 (10 to the power of 3)

// Increment (++) and Decrement (--) operators
let c = 5;
console.log(`Initial c: ${c}`); // 5
c++; // Post-increment: uses the value then increments
console.log(`c after c++: ${c}`); // 6
++c; // Pre-increment: increments then uses the value
console.log(`c after ++c: ${c}`); // 7

let d = 5;
console.log(`Initial d: ${d}`); // 5
d--; // Post-decrement
console.log(`d after d--: ${d}`); // 4
--d; // Pre-decrement
console.log(`d after --d: ${d}`); // 3

console.log("\n--- Assignment Operators ---\n");

// 2. Assignment Operators
// Used to assign values to variables.
let x = 10;
console.log(`x = ${x}`); // 10

x += 5; // x = x + 5; (x is now 15)
console.log(`x += 5: ${x}`);

x -= 3; // x = x - 3; (x is now 12)
console.log(`x -= 3: ${x}`);

x *= 2; // x = x * 2; (x is now 24)
console.log(`x *= 2: ${x}`);

x /= 4; // x = x / 4; (x is now 6)
console.log(`x /= 4: ${x}`);

x %= 5; // x = x % 5; (x is now 1)
console.log(`x %= 5: ${x}`);

x **= 3; // x = x ** 3; (x is now 1 (1 to the power of 3))
console.log(`x **= 3: ${x}`);

console.log("\n--- Comparison Operators ---\n");

// 3. Comparison Operators
// Used to compare two values and return a boolean (true/false).
let num1 = 10;
let num2 = 20;
let strNum = "10";

// Equal to (==): Checks for value equality, performs type coercion.
console.log(`num1 == strNum: ${num1 == strNum}`); // true (10 is coerced to "10")

// Strict equal to (===): Checks for value and type equality, no type coercion.
console.log(`num1 === strNum: ${num1 === strNum}`); // false (number vs string)

// Not equal to (!=): Checks for value inequality, performs type coercion.
console.log(`num1 != strNum: ${num1 != strNum}`); // false

// Strict not equal to (!==): Checks for value and type inequality, no type coercion.
console.log(`num1 !== strNum: ${num1 !== strNum}`); // true

// Greater than (>)
console.log(`num2 > num1: ${num2 > num1}`); // true

// Less than (<)
console.log(`num1 < num2: ${num1 < num2}`); // true

// Greater than or equal to (>=)
console.log(`num1 >= 10: ${num1 >= 10}`); // true

// Less than or equal to (<=)
console.log(`num2 <= 20: ${num2 <= 20}`); // true

console.log("\n--- Logical Operators ---\n");

// 4. Logical Operators
// Used to combine or negate boolean expressions.
let isAdult = true;
let hasLicense = false;
let hasCar = true;

// Logical AND (&&): Returns true if both operands are true.
console.log(`isAdult && hasLicense: ${isAdult && hasLicense}`); // false
console.log(`isAdult && hasCar: ${isAdult && hasCar}`); // true

// Logical OR (||): Returns true if at least one operand is true.
console.log(`isAdult || hasLicense: ${isAdult || hasLicense}`); // true
console.log(`hasLicense || false: ${hasLicense || false}`); // false

// Logical NOT (!): Inverts the boolean value of the operand.
console.log(`!isAdult: ${!isAdult}`); // false
console.log(`!hasLicense: ${!hasLicense}`); // true

//Logical AND Assignment (&&=): Assigns a value to a variable if the variable is currently truthy.
// Syntax: variable &&= value;
let userDetails = { name: "Alice" };
userDetails.name &&= "Guest"; // The name is truthy, so it gets assigned "Guest"
console.log(userDetails.name); // Output: "Guest"
// Case: all truthy
let test = 10 && "hello";
console.log(test); // 'hello' (returns the last operand)

// Case: first operand is falsy
let test1 = 0 && "hello";
console.log(test1); // 0 (stops and returns the first falsy operand)

// Case: second operand is falsy
let test3 = 10 && null;
console.log(test3); // null (stops and returns the first falsy operand)

// Falsy values:
// false
// 0 and -0
// "" (empty string)
// null
// undefined
// NaN (Not a Number)
// document.all (a legacy property)

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//Logical OR Assignment (||=): Assigns a value to a variable if the variable is currently falsy.
// Syntax: variable ||= value;
let title = "";
title ||= "Untitled";
console.log(title); // Output: "Untitled"

// The variable already has a truthy value, so the assignment is skipped
let user = { name: "Alice" };
user.name ||= "Guest";
console.log(user.name); // Output: "Alice"


console.log("\n--- Ternary Operator ---\n");

// 5. Ternary Operator (Conditional Operator)
// A shorthand for an if-else statement.
// Syntax: condition ? expressionIfTrue : expressionIfFalse;

let age = 18;
let canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(`Can a person of age ${age} vote? ${canVote}`);

age = 16;
canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(`Can a person of age ${age} vote? ${canVote}`);

// Exercise for students:
// 1. Calculate the area of a rectangle with length = 15 and width = 8 using arithmetic operators.
// 2. Use assignment operators to double a variable `score` (initial value 50) and then subtract 10 from it.
// 3. Compare two numbers (e.g., 25 and "25") using both `==` and `===`. Explain the difference in output.
// 4. Create two boolean variables, `isSunny` and `isWeekend`. Write an expression using logical operators to check if it's a good day for a picnic (sunny AND weekend).
// 5. Use the ternary operator to determine if a number `num` is even or odd.
