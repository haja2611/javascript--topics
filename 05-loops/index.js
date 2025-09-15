// 01-beginner/05-loops/index.js

// 1. for Loop
// Executes a block of code a specified number of times.
// Syntax: for (initialization; condition; increment/decrement) { code block }

console.log("--- for Loop ---");
for (let i = 0; i < 5; i++) {
  console.log(`for loop iteration: ${i}`);
}

console.log("\n--- Looping through an Array with for loop ---");
const fruits = ["Apple", "Banana", "Cherry", "Date"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i}: ${fruits[i]}`);
}

console.log("\n--- while Loop ---");

// 2. while Loop
// Executes a block of code as long as a specified condition is true.
// Syntax: while (condition) { code block }

let count = 0;
while (count < 3) {
  console.log(`while loop count: ${count}`);
  count++;
}

//Note
// If you forget to increase the variable used in the condition, the loop will never end.
// This will crash your browser.

console.log("\n--- do...while Loop ---");
// 3. do...while Loop
// Similar to while loop, but the code block is executed at least once before the condition is checked.
// Syntax: do { code block } while (condition);

let i = 0;
do {
  console.log(`do...while loop i: ${i}`);
  i++;
} while (i < 3);

let j = 5; // Example where condition is initially false
do {
  console.log(`do...while loop j: ${j}`); // This will run once
  j++;
} while (j < 3);
// Note
// The do while runs at least once, even if the condition is false from the start.

// This is because the code block is executed before the condition is tested:

console.log("\n--- break Statement ---\n");

// 4. break Statement
// Used to terminate a loop prematurely.

for (let k = 0; k < 10; k++) {
  if (k === 5) {
    console.log("Breaking the loop at k = 5.");
    break; // Exits the loop
  }
  console.log(`k: ${k}`);
}

console.log("\n--- continue Statement ---\n");

// 5. continue Statement
// Used to skip the current iteration of a loop and continue with the next iteration.

for (let l = 0; l < 5; l++) {
  if (l === 2) {
    console.log("Skipping iteration at l = 2.");
    continue; // Skips the rest of this iteration, moves to the next
  }
  console.log(`l: ${l}`);
}

// 6. for...of Loop
// Iterates over iterable objects (like Arrays, Strings, Maps, Sets, etc.), executing a code block for each element.
// Syntax: for (variable of iterable) { code block }

console.log("\n--- for...of Loop ---");
const colors = ["Red", "Green", "Blue"];
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// Example with a string
const greeting = "Hello";
for (const char of greeting) {
  console.log(`Character: ${char}`);
}

// 7. for...in Loop
// Iterates over the enumerable properties of an object.
// Syntax: for (variable in object) { code block }

console.log("\n--- for...in Loop ---");
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Note: for...in can also iterate over array indices, but for...of is generally preferred for arrays.
const arr = ["a", "b", "c"];
for (const index in arr) {
  console.log(`Index: ${index}, Value: ${arr[index]}`);
}

// Exercise for students:
// 1. Use a `for` loop to print all even numbers from 0 to 10.
// 2. Use a `while` loop to calculate the sum of numbers from 1 to 5.
// 3. Use a `do...while` loop to repeatedly ask the user for a number until they enter a number greater than 10 (you'll need a way to get user input, for now assume `prompt()` exists or simulate with a variable).
// 4. Write a `for` loop that iterates from 1 to 7. Use `break` to stop the loop when the number is 4.
// 5. Write a `for` loop that iterates from 1 to 5. Use `continue` to skip printing the number 3.
