// 01-beginner/02-variables-data-types/index.js

// 1. Variables: var, let, and const

// var: Function-scoped, can be re-declared and re-assigned. (Older way, generally avoid in modern JS)
var oldSchoolVar = "I am an old school variable";
console.log(oldSchoolVar);
var oldSchoolVar = "I can be re-declared!"; // No error
console.log(oldSchoolVar);
oldSchoolVar = "And re-assigned too!";
console.log(oldSchoolVar);

// let: Block-scoped, can be re-assigned but not re-declared. (Preferred for mutable variables)
let modernLet = "I am a modern let variable";
console.log(modernLet);
// let modernLet = "I cannot be re-declared!"; // Throws an error: SyntaxError: Identifier 'modernLet' has already been declared
modernLet = "But I can be re-assigned!";
console.log(modernLet);

// const: Block-scoped, cannot be re-assigned or re-declared. (Preferred for constants)
const constantValue = "I am a constant value";
console.log(constantValue);
// constantValue = "I cannot be re-assigned!"; // Throws an error: TypeError: Assignment to constant variable.
// const constantValue = "I cannot be re-declared!"; // Throws an error: SyntaxError: Identifier 'constantValue' has already been declared

// Important Note on const with Objects/Arrays:
// While the variable itself cannot be re-assigned, the *contents* of an object or array declared with const can be modified.
const myObject = { name: "Alice", age: 30 };
console.log("Original object:", myObject);
myObject.age = 31; // This is allowed!
console.log("Modified object:", myObject);

const myArray = [1, 2, 3];
console.log("Original array:", myArray);
myArray.push(4); // This is allowed!
console.log("Modified array:", myArray);

// Best Practices:
// - Always use `const` by default.
// - Use `let` only when you know the variable needs to be re-assigned.
// - Avoid `var` unless you are working with older codebases that specifically require it.

console.log("\n--- Data Types ---\n");

// 2. Primitive Data Types

// Numbers: Integers and floating-point numbers
let integer = 10;
let float = 10.5;
console.log("Integer:", integer, "Type:", typeof integer);
console.log("Float:", float, "Type:", typeof float);

// Strings: Sequences of characters, enclosed in single, double, or backticks (template literals)
let singleQuoteString = 'Hello World!';
let doubleQuoteString = "JavaScript is fun!";
let templateLiteral = `The integer is ${integer} and the float is ${float}.`; // Template literals allow embedding expressions
console.log("Single quote string:", singleQuoteString, "Type:", typeof singleQuoteString);
console.log("Double quote string:", doubleQuoteString, "Type:", typeof doubleQuoteString);
console.log("Template literal:", templateLiteral, "Type:", typeof templateLiteral);

// Booleans: true or false
let isTrue = true;
let isFalse = false;
console.log("Is true?", isTrue, "Type:", typeof isTrue);
console.log("Is false?", isFalse, "Type:", typeof isFalse);

// null: Represents the intentional absence of any object value. (primitive value)
let emptyValue = null;
console.log("Null value:", emptyValue, "Type:", typeof emptyValue); // Note: typeof null is 'object' (a historical bug)

// undefined: A variable that has been declared but not yet assigned a value.
let notAssigned;
console.log("Not assigned value:", notAssigned, "Type:", typeof notAssigned);

// Symbol (ES6): A unique and immutable data type, often used for object property keys.
const uniqueId = Symbol('id');
const anotherUniqueId = Symbol('id');
console.log("Symbol 1:", uniqueId, "Type:", typeof uniqueId);
console.log("Symbol 2:", anotherUniqueId, "Type:", typeof anotherUniqueId);
console.log("Are symbols equal?", uniqueId === anotherUniqueId); // false, they are unique

// BigInt (ES11): For arbitrary-precision integers.
// Add 'n' to the end of an integer to make it a BigInt.
let bigNumber = 9007199254740991n; // This is a BigInt
console.log("BigInt:", bigNumber, "Type:", typeof bigNumber);
// let regularNumber = 9007199254740991; // This is a regular JavaScript Number
// console.log("Regular number:", regularNumber); // Might show precision issues for very large numbers

console.log("\n--- typeof Operator ---\n");

// 3. typeof operator: Returns a string indicating the type of the unevaluated operand.
console.log("typeof 10:", typeof 10);
console.log("typeof 'hello':", typeof 'hello');
console.log("typeof true:", typeof true);
console.log("typeof null:", typeof null); // Output: 'object' - a well-known JavaScript quirk/bug
console.log("typeof undefined:", typeof undefined);
console.log("typeof Symbol('test'):", typeof Symbol('test'));
console.log("typeof 123n:", typeof 123n);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []); // Output: 'object' - arrays are objects in JavaScript
console.log("typeof function(){}:", typeof function(){});

// Exercise for students:
// 1. Declare a `const` variable called `myName` and assign your name to it.
// 2. Declare a `let` variable called `myAge` and assign your age. Then, re-assign `myAge` to your age next year.
// 3. Declare a `var` variable called `oldCar` and assign a car brand. Try to re-declare it and re-assign it.
// 4. Create variables for each primitive data type and log their values and `typeof` results to the console.
// 5. Experiment with `const` for an array and an object, adding elements/properties and observing the behavior.
