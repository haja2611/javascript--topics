// 01-beginner/06-functions/index.js

// 1. Defining Functions
// Functions are blocks of code designed to perform a particular task.
// They are executed when "something" invokes them (calls them).

console.log("--- Function Declarations ---");

// Function Declaration (also called Function Statement)
// A function defined with the `function` keyword.
function greet(name) {
  return `Hello, ${name}! Welcome to functions.`;
}

// Calling the function
console.log(greet("Alice"));
console.log(greet("Bob"));

console.log("\n--- Function Expressions ---");

// Function Expression
// A function assigned to a variable. Can be anonymous or named.
const sayGoodbye = function (name) {
  return `Goodbye, ${name}!`;
};

console.log(sayGoodbye("Charlie"));

// Named Function Expression (less common, but useful for recursion/debugging)
const calculateArea = function area(length, width) {
  return length * width;
};

console.log(`Area of 5x10 rectangle: ${calculateArea(5, 10)}`);

console.log("\n--- Arrow Functions (ES6) ---");

// Arrow Functions
// A shorter syntax for writing function expressions. (Common in modern JS)
// Syntax: (parameters) => { function body }

const add = (a, b) => {
  return a + b;
};
console.log(`5 + 3 = ${add(5, 3)}`);

// Single expression arrow functions can implicitly return
const multiply = (a, b) => a * b;
console.log(`4 * 6 = ${multiply(4, 6)}`);

// Arrow function with no parameters
const sayHello = () => "Hello there!";
console.log(sayHello());

// Arrow function with one parameter (parentheses are optional)
const square = (number) => number * number;
console.log(`Square of 7: ${square(7)}`);

console.log("\n--- Function Parameters and Arguments ---\n");

// 2. Parameters and Arguments
// Parameters are names listed in the function definition.
// Arguments are the real values passed to the function when it is called.

function showInfo(firstName, lastName, age) {
  console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}

showInfo("John", "Doe", 25);
showInfo("Jane", "Smith"); // age will be undefined
showInfo("Peter", "Jones", 30, "extra"); // extra arguments are ignored

// Default Parameters (ES6): Allows parameters to be initialized with a default value if no value or `undefined` is passed.
function greeting(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greeting("World");
greeting();
greeting(undefined);

console.log("\n--- return Statement ---\n");

// 3. return Statement
// The `return` statement stops the execution of a function and returns a value from that function.

function sum(x, y) {
  let result = x + y;
  return result; // Returns the sum
  console.log("This line will not be executed"); // Code after return is unreachable
}

let total = sum(10, 5);
console.log(`Sum of 10 and 5: ${total}`);

function checkIfEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(`Is 4 even? ${checkIfEven(4)}`);
console.log(`Is 7 even? ${checkIfEven(7)}`);

// Functions without a return statement implicitly return `undefined`.
function logMessage(message) {
  console.log(message);
}
let val = logMessage("Just logging");
console.log(`Return value of logMessage: ${val}`); // undefined

console.log("\n--- Scope (Global vs. Local) ---\n");

// 4. Scope
// Determines the accessibility (visibility) of variables.

// Global Scope: Variables declared outside any function are global.
// They can be accessed from anywhere in the code.
let globalVar = "I am a global variable";

function showGlobal() {
  console.log(`Inside function, globalVar: ${globalVar}`);
}
showGlobal();
console.log(`Outside function, globalVar: ${globalVar}`);

// Local Scope (Function Scope/Block Scope):
// Variables declared inside a function (or block for `let`/`const`) are local.
// They are only accessible within that function/block.

function showLocal() {
  let localVar = "I am a local variable";
  console.log(`Inside function, localVar: ${localVar}`);
  // console.log(blockVar); // This would cause an error if blockVar was only block-scoped here
}
showLocal();
// console.log(localVar); // Throws an error: ReferenceError: localVar is not defined

// Block Scope with let/const (introduced in ES6)
// Variables declared with `let` or `const` inside a block ({}) are only accessible within that block.

if (true) {
  let blockLet = "I am block-scoped with let";
  const blockConst = "I am block-scoped with const";
  console.log(blockLet);
  console.log(blockConst);
}
// console.log(blockLet); // Error: ReferenceError: blockLet is not defined
// console.log(blockConst); // Error: ReferenceError: blockConst is not defined

// `var` is function-scoped, not block-scoped
if (true) {
  var functionVar = "I am function-scoped with var";
  console.log(functionVar);
}
console.log(functionVar); // No error, accessible outside the if block because it's function-scoped to global scope here

// Exercise for students:
// 1. Write a function declaration called `calculateCircumference` that takes a `radius` as a parameter and returns the circumference of a circle (2 * PI * radius).
// 2. Create an arrow function called `isPositive` that takes a number and returns `true` if the number is positive, `false` otherwise.
// 3. Write a function called `createGreeting` that takes `name` and `timeOfDay` parameters. Use a default parameter for `timeOfDay` to be "morning". Return a greeting string like "Good morning, [name]!" or "Good [timeOfDay], [name]!".
// 4. Explain, in comments in the code, the difference between `var`, `let`, and `const` in terms of scope using simple examples.
