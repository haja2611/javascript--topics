// 02-intermediate/03-es6-plus-features/index.js

// ES6+ (ECMAScript 2015 and later) introduced many significant features that modernized JavaScript.

console.log("--- 1. Destructuring Assignment ---");

// Destructuring Assignment
// Allows you to extract values from arrays or properties from objects into distinct variables.

// Array Destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(
  `First: ${firstColor}, Second: ${secondColor}, Third: ${thirdColor}`
);

// Skipping elements
const [, , skipColor] = colors; // Skips first two elements
console.log(`Skipped to: ${skipColor}`);

// Swapping variables easily
let x = 10,
  y = 20;
[x, y] = [y, x];
console.log(`Swapped x: ${x}, y: ${y}`);

// Object Destructuring
const user = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
};

const { name: userName1, age } = user;
console.log(`Name: ${userName1}, Age: ${age}`);

// Renaming properties during destructuring
const { name: userName, city: userCity } = user;
console.log(`User Name: ${userName}, User City: ${userCity}`);

// Default values in destructuring
const { country = "USA", age: userAge } = user;
console.log(`User Age: ${userAge}, Country: ${country}`);

// Nested object destructuring
const company = {
  companyName: "TechCorp",
  location: {
    street: "456 Tech Ave",
    zip: "90210",
  },
};
const {
  location: { street, zip },
} = company;
console.log(`Company Street: ${street}, Zip: ${zip}`);
// console.log(company.location.street);

console.log("\n--- 2. Spread and Rest Operators (... ) ---");

// Spread Operator (...)
// Expands an iterable (like an array or string) into individual elements.
// Expands an object into key-value pairs.

// Spreading arrays (concatenation or creating new arrays)
const arr1 = [1, 2, 3, 10];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2, 7, 8];
console.log("Combined array:", combinedArray);

// Copying arrays
const originalArray = ["a", "b", "c"];
const copyOfArray = [...originalArray]; // Creates a shallow copy
console.log("Copy of array:", copyOfArray);
console.log("Are they same reference?", originalArray === copyOfArray); // false

// Spreading objects (merging or copying objects)
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2, e: 5 };
console.log("Combined object:", combinedObject);

// Copying objects
const originalObject = { name: "Book", pages: 300 };
const copyOfObject = { ...originalObject }; // Creates a shallow copy
console.log("Copy of object:", copyOfObject);
console.log("Are they same reference?", originalObject === copyOfObject); // false

// Rest Operator (...)
// Gathers multiple elements into an array.
// Used in function parameters to handle an indefinite number of arguments.

function sumAll(...numbers) {
  // numbers will be an array of all arguments passed
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(`Sum of 1, 2, 3: ${sumAll(1, 2, 3)}`);
console.log(`Sum of 10, 20, 30, 40: ${sumAll(10, 20, 30, 40)}`);

// Rest in array destructuring
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(`First: ${first}, Second: ${second}, Remaining: ${remaining}`);

// Rest in object destructuring
const { role, ...details } = { role: "admin", id: 1, email: "a@b.com" };
console.log(`Role: ${role}, Details:`, details);

console.log("\n--- 3. Template Literals (revisit and expand) ---");

// Template Literals (backticks ``)
// Allow embedded expressions, multiline strings, and basic string formatting.

const product = "Laptop";
const price = 1200;

// Multiline strings without \n
const multiLineString = `
    This is a multiline string.
    It preserves newlines and spaces.
    Product: ${product}, Price: $${price}.
`;
console.log(multiLineString);

// Tagged Templates (advanced use case)
function highlight(strings, ...values) {
  let str = "";
  strings.forEach((string, i) => {
    str += string;
    if (values[i]) {
      str += `<b>${values[i]}</b>`; // Highlight values
    }
  });
  return str;
}

const name = "World";
const greeting = highlight`Hello, ${name}! Welcome.`;
console.log(greeting);

console.log("\n--- 4. Classes ---");

// Classes (ES6 syntactic sugar over JavaScript's prototype-based inheritance)
// Provide a cleaner, more familiar syntax for creating objects and dealing with inheritance.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const animal1 = new Animal("Generic Animal");
animal1.speak();

// Inheritance with `extends` and `super`
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} (${this.breed}) barks.`);
  }

  static favoriteFood() {
    return "Bones"; // Static method belongs to the class itself, not instances
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak();
console.log(`Dog's favorite food: ${Dog.favoriteFood()}`);

console.log("\n--- 5. Modules (import and export) ---");

// Modules
// Allows you to split JavaScript code into separate files (modules).
// Each module has its own scope, preventing variable collisions.
// `export`: To make variables, functions, classes, etc., available outside the module.
// `import`: To bring exported members into the current module.

// Example: Create two new files: `math.js` and `app.js`
// math.js
/*
    export const PI = 3.14;
    export function add(a, b) { return a + b; }
    export default class Calculator { /* ... */ /* }
 */

// app.js
/*
    import { PI, add } from './math.js';
    import Calculator from './math.js'; // For default export

    console.log(PI);
    console.log(add(2, 3));
    const calc = new Calculator();
*/

// Note: Modules require a specific environment (e.g., browser with <script type="module"> or Node.js with "type": "module" in package.json).
// We won't create separate files here, but this explains the concept.

console.log("\n--- 6. Map and Set ---");

// Map
// A collection of key-value pairs where keys can be any data type (unlike objects).

const myMap = new Map();

// Setting values
myMap.set("name", "John");
myMap.set(1, "number one");
myMap.set(true, "boolean key");
myMap.set(animal1, "my animal object"); // Object as a key

console.log("Map size:", myMap.size);

// Getting values
console.log(`Map get('name'): ${myMap.get("name")}`);
console.log(`Map get(1): ${myMap.get(1)}`);
console.log(`Map get(animal1): ${myMap.get(animal1)}`);

// Checking for existence
console.log(`Map has('name'): ${myMap.has("name")}`);
console.log(`Map has('nonExistent'): ${myMap.has("nonExistent")}`);

// Iterating over Map
console.log("Iterating over Map entries:");
for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

// Deleting elements
myMap.delete(true);
console.log("Map after delete(true):");
myMap.forEach((value, key) => console.log(`${key}: ${value}`));

// Clearing map
myMap.clear();
console.log("Map size after clear:", myMap.size);

console.log("\n--- 7. Set ---");

// Set
// A collection of unique values. Each value can only occur once in a Set.

const mySet = new Set();

// Adding values
mySet.add(1);
mySet.add("hello");
mySet.add(1); // Duplicate, will not be added
mySet.add({ id: 1 });
mySet.add({ id: 1 }); // Objects are distinct even if they look same

console.log("Set size:", mySet.size);

// Checking for existence
console.log(`Set has(1): ${mySet.has(1)}`);
console.log(`Set has('world'): ${mySet.has("world")}`);

// Deleting values
mySet.delete("hello");
console.log("Set size after delete('hello'):", mySet.size);

// Iterating over Set
console.log("Iterating over Set values:");
for (const value of mySet) {
  console.log(value);
}

// Converting Set to Array
const setToArray = [...mySet];
console.log("Set converted to array:", setToArray);

// Exercise for students:
// 1. Use array destructuring to extract the first and third elements of an array `['apple', 'banana', 'orange', 'grape']` into variables `fruit1` and `fruit3`.
// 2. Use object destructuring to extract `firstName` and `lastName` from an object `{ firstName: 'Jane', lastName: 'Doe', age: 28 }`. Also, rename `firstName` to `fName`.
// 3. Combine two arrays `[10, 20]` and `[30, 40]` into a new array `[10, 20, 30, 40]` using the spread operator.
// 4. Write a function `logDetails` that accepts a `type` argument and then uses the rest operator to accept any number of additional `items`. Log the `type` and then each `item`.
// 5. Create a class `Rectangle` with a constructor that takes `width` and `height`. Add a method `getArea()` that returns the area. Create an instance and test it.
// 6. Create a `Map` and add key-value pairs for different countries and their capitals. Iterate over the Map and print each country and capital.
// 7. Create a `Set` from an array with duplicate numbers (e.g., `[1, 2, 2, 3, 4, 4, 5]`) to get only unique numbers. Convert the Set back to an array and print it.
