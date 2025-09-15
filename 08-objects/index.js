// 01-beginner/08-objects/index.js

// 1. Creating Objects
// Objects are unordered collections of key-value pairs.
// Keys (or property names) are strings (or Symbols), and values can be any data type.

console.log("--- Creating Objects ---");

// Object Literal (most common and recommended way)
const emptyObject = {};
console.log("Empty object:", emptyObject);

const person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "hiking"],
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
  greet: function () {
    return `Hello, my name is ${this.name}.`;
  },
};

console.log("Person object:", person);

// Using the Object constructor (less common)
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
console.log("Car object:", car);

console.log("\n--- Accessing Properties ---\n");

// 2. Accessing Properties
// You can access object properties using dot notation or bracket notation.

// Dot notation (preferred when property name is a valid identifier)
console.log(`Person's name (dot notation): ${person.name}`);
console.log(`Person's age (dot notation): ${person.age}`);
console.log(`Person's city (nested property): ${person.address.city}`);

// Bracket notation (required when property name contains spaces, starts with a number, or is a variable)
console.log(`Person's name (bracket notation): ${person["name"]}`);
console.log(`Person's age (bracket notation): ${person["age"]}`);

let propName = "isStudent";
console.log(`Person's student status (variable key): ${person[propName]}`);

// Accessing a non-existent property returns `undefined`
console.log(`Person's email: ${person.email}`); // undefined

console.log("\n--- Adding, Modifying, and Deleting Properties ---\n");

// 3. Adding, Modifying, and Deleting Properties

const product = { name: "Laptop", price: 1200 };
console.log("Initial product:", product);

// Adding a new property
product.color = "Silver";
console.log("After adding color:", product);

// Modifying an existing property
product.price = 1150;
console.log("After modifying price:", product);

// Deleting a property
delete product.color;
console.log("After deleting color:", product);

console.log("\n--- Object Methods ---\n");

// 4. Object Methods
// Functions stored as object properties.

console.log(`Person's greeting: ${person.greet()}`);

// Common built-in Object methods
const settings = { theme: "dark", notifications: true, language: "en" };

// Object.keys(): Returns an array of a given object's own enumerable string-keyed property names.
const keys = Object.keys(settings);
console.log("Object keys:", keys); // ['theme', 'notifications', 'language']

// Object.values(): Returns an array of a given object's own enumerable string-keyed property values.
const values = Object.values(settings);
console.log("Object values:", values); // ['dark', true, 'en']

// Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const entries = Object.entries(settings);
console.log("Object entries:", entries); // [['theme', 'dark'], ['notifications', true], ['language', 'en']]

// Iterating over object properties
console.log("\n--- Iterating Over Object Properties ---\n");

// Using for...in loop (iterates over enumerable properties, including inherited ones)
for (const key in settings) {
  if (settings.hasOwnProperty(key)) {
    // Important to use hasOwnProperty to avoid inherited properties
    console.log(`Key: ${key}, Value: ${settings[key]}`);
  }
}

// Using Object.keys() with forEach (preferred for own properties)
Object.keys(settings).forEach((key) => {
  console.log(`Key: ${key}, Value: ${settings[key]}`);
});

// Exercise for students:
// 1. Create an object called `book` with properties `title`, `author`, and `publicationYear`.
// 2. Add a new property `genre` to the `book` object.
// 3. Modify the `publicationYear` of the `book` object.
// 4. Delete the `author` property from the `book` object.
// 5. Create a method `getSummary` inside the `book` object that returns a string like "[title] was published in [publicationYear].". Call this method and log the result.
// 6. Use `Object.keys()` and `Object.values()` to get and print the keys and values of the final `book` object.
