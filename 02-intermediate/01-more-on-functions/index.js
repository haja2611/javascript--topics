// 02-intermediate/01-more-on-functions/index.js

// 1. Higher-Order Functions (HOFs)
// Functions that take other functions as arguments or return functions as their results.

console.log("--- Higher-Order Functions ---");

// Example 1: Function taking another function as an argument
function operateOnNumbers(num1, num2, operation) {
  return operation(num1, num2);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(`Add: ${operateOnNumbers(10, 5, add)}`); // 15
console.log(`Subtract: ${operateOnNumbers(10, 5, subtract)}`); // 5

// Example 2: Function returning another function
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(`Double 5: ${double(5)}`); // 10
console.log(`Triple 5: ${triple(5)}`); // 15

console.log("\n--- Callbacks ---\n");

// 2. Callbacks
// A function passed as an argument to another function, to be executed later.
// Often used for asynchronous operations or event handling.

function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    const data = "Some fetched data";
    callback(data); // Execute the callback with the fetched data
  }, 2000); // Simulate network request delay of 2 seconds
}

function processData(data) {
  console.log(`Data received: ${data}`);
  console.log("Processing data...");
}

fetchData(processData);
console.log("Request sent. Waiting for data...");

// Event listener as a callback
// (This part usually runs in a browser environment, simulating for Node.js)
// document.getElementById('myButton').addEventListener('click', function() {
//     console.log('Button clicked!');
// });

console.log("\n--- Closures ---\n");

// 3. Closures
// A closure is the combination of a function bundled together (enclosed) with its surrounding state (lexical environment).
// It gives you access to an outer function's scope from an inner function.

function makeCounter() {
  let count = 0; // This variable is part of the closure's lexical environment

  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log(`Counter 1: ${counter1()}`); // 1
console.log(`Counter 1: ${counter1()}`); // 2

const counter2 = makeCounter(); // Creates a new independent closure
console.log(`Counter 2: ${counter2()}`); // 1
console.log(`Counter 1: ${counter1()}`); // 3 (counter1's count is independent)

// A closure can be compared to a **vending machine**.

// Think of the `makeCounter` function as the **vending machine factory**.

// 1.  **Creating the Vending Machine (`const counter1 = makeCounter();`)**:
//     When you call `makeCounter()`, it's like a factory producing a brand new, empty vending machine. This machine has a hidden compartment inside—the `count` variable—that starts at `0`. This hidden compartment is accessible only by the machine's internal mechanics, not by the outside world.

// 2.  **Using the First Vending Machine (`counter1()`)**:
//     -   When you "use" `counter1` by calling `counter1()`, you're pressing the button on **that specific machine**.
//     -   Inside, the machine's hidden counter increments from `0` to `1` and then returns the value.
//     -   The next time you press the button, the counter inside **the same machine** increments from `1` to `2`. It remembers its previous state.

// ---

// 3.  **Creating a Second, Separate Vending Machine (`const counter2 = makeCounter();`)**:
//     -   When you call `makeCounter()` again, it's like the factory producing another, completely separate, **new vending machine**.
//     -   This second machine also has its own independent hidden compartment (`count` variable), which is also initialized to `0`. It has no connection to the first machine.

// 4.  **Using the Second Vending Machine (`counter2()`)**:
//     -   When you use `counter2()` for the first time, you're pressing the button on **the second machine**.
//     -   Its internal counter increments from `0` to `1`.
//     -   The first machine's counter is **unaffected** by this.

// ---

// 5.  **Continued Use (`counter1()`)**:
//     -   When you go back and use the **first machine** again by calling `counter1()`, its counter continues from where it left off (at `2`), incrementing to `3`. The two machines' states are completely separate and independent.

// Just as two physical vending machines operate independently with their own internal parts, two different closures created from the same function maintain their own independent copies of the enclosed variables.

console.log("\n--- `this` Keyword ---\n");

// 4. `this` Keyword
// The value of `this` depends on how the function is called (its execution context).

// Global context: `this` refers to the global object (window in browsers, global in Node.js)
console.log(`Global this: ${this === globalThis}`); // true in browser, may vary in node/strict mode

// Function context (non-strict mode): `this` refers to the global object.
// In strict mode, `this` is `undefined` in standalone functions.
function showThis() {
  console.log(`Inside showThis: ${this}`);
}
showThis(); // global object (or undefined in strict mode)

// Object method context: `this` refers to the object itself.
const personObj = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
  arrowGreet: () => {
    console.log(`Hello from arrow (this): ${this}`); // `this` refers to the `this` of the enclosing lexical context (global in this case)
  },
};
personObj.greet();
personObj.arrowGreet();

// Constructor function context: `this` refers to the new instance.
function Car(make, model) {
  this.make = make;
  this.model = model;
}
const myCar = new Car("Honda", "Civic");
console.log(`My car: ${myCar.make} ${myCar.model}`);

// Event handler context: `this` refers to the element that received the event.
// (Simulated for browser)
// document.getElementById('myDiv').addEventListener('click', function() {
//     console.log(this); // Refers to the div element
// });

console.log("\n--- call(), apply(), bind() ---\n");

// 5. `call()`, `apply()`, `bind()` methods
// Used to explicitly set the `this` context for a function.

const anotherPerson = {
  name: "Bob",
};

function introduce(age, city) {
  console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}.`);
}

// call(): Invokes the function with a specified `this` context and arguments provided individually.
introduce.call(anotherPerson, 25, "New York");

// apply(): Invokes the function with a specified `this` context and arguments provided as an array.
introduce.apply(anotherPerson, [30, "London"]);

// bind(): Returns a new function with a specified `this` context bound permanently.
const introduceBob = introduce.bind(anotherPerson, 35);
introduceBob("Paris");

// You can also pre-set some arguments with bind
const introduceBobFromBerlin = introduce.bind(anotherPerson, 40, "Berlin");
introduceBobFromBerlin();

// Exercise for students:
// 1. Create a higher-order function `createGreeter` that takes a `greeting` string (e.g., "Hello", "Hi") and returns a new function. The returned function should take a `name` and return the full greeting (e.g., "Hello, Alice!").
// 2. Simulate an asynchronous operation (e.g., fetching user data) using `setTimeout`. Use a callback function to process the fetched data.
// 3. Implement a simple counter function using a closure. The counter should have `increment` and `getValue` methods.
// 4. Create an object `dog` with a `name` property and a method `bark` that logs "Woof! My name is [dog's name]!". Then, create a separate function `genericBark` that just logs "Woof!". Use `call()` or `apply()` to make `genericBark` bark with the `dog`'s name.
// 5. Explain in comments how `this` behaves differently in a regular function vs. an arrow function when defined inside an object.
