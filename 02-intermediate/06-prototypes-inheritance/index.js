// 02-intermediate/06-prototypes-inheritance/index.js

// Prototypes and Inheritance
// JavaScript is a prototype-based language, meaning objects inherit properties and methods from other objects.
// This is different from class-based languages (like Java or C++) where objects inherit from classes.

console.log("--- 1. Understanding the Prototype Chain ---");

// Every JavaScript object has a prototype property, which is itself an object.
// All objects inherit properties and methods from their prototype.
// When you try to access a property or method on an object, JavaScript first looks for it on the object itself.
// If it's not found, it then looks on the object's prototype, then on the prototype's prototype, and so on,
// until it reaches `null` (the end of the prototype chain).

const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

console.log("Person object:", person);
console.log("Person's prototype (via __proto__):", person.__proto__); // Deprecated way to access prototype
console.log("Person's prototype (via Object.getPrototypeOf):", Object.getPrototypeOf(person));

// The default prototype for plain objects is `Object.prototype`.
// `Object.prototype` is at the top of the prototype chain for most objects.
console.log("Person's prototype is Object.prototype?", Object.getPrototypeOf(person) === Object.prototype);

// Properties and methods on Object.prototype are available to all objects.
console.log("Does person have toString method?", person.hasOwnProperty('toString')); // false
console.log("Calling toString on person:", person.toString()); // Inherited from Object.prototype

console.log("\n--- 2. Prototypal Inheritance ---");

// Creating objects that inherit from other objects.

// Method 1: Using Object.create()
// Creates a new object, using an existing object as the prototype of the newly created object.

const animalPrototype = {
    eats: true,
    walk() {
        console.log("Animal walks.");
    }
};

const dog = Object.create(animalPrototype);
dog.name = "Buddy";
dog.barks = true;

console.log("Dog object:", dog);
console.log("Does dog eat?", dog.eats); // Inherited property
dog.walk(); // Inherited method

// Check prototype chain
console.log("Dog's prototype is animalPrototype?", Object.getPrototypeOf(dog) === animalPrototype);
console.log("animalPrototype's prototype is Object.prototype?", Object.getPrototypeOf(animalPrototype) === Object.prototype);

// Method 2: Constructor Functions (older way of simulating classes)
// A regular function that is used to construct objects. The `new` keyword is used to call it.
// The `prototype` property of the constructor function becomes the prototype of the objects created by it.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add methods to the constructor's prototype to be shared by all instances
Person.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

person1.greet();
person2.greet();

console.log("Are greet methods the same function?", person1.greet === person2.greet); // true
console.log("Person1's prototype is Person.prototype?", Object.getPrototypeOf(person1) === Person.prototype);

// Extending Constructor Functions (inheritance)
function Student(name, age, major) {
    Person.call(this, name, age); // Call the parent constructor to inherit properties
    this.major = major;
}

// Set up the prototype chain for inheritance
// Student.prototype = Object.create(Person.prototype); // Link prototypes
// Student.prototype.constructor = Student; // Correct the constructor reference

// ES6 Classes (Syntactic Sugar for Constructor Functions + Prototypes)
// As seen in 02-intermediate/03-es6-plus-features/index.js, classes provide a cleaner syntax.
// They essentially do the same thing under the hood: manage prototypes.

console.log("\n--- 3. Prototypal Inheritance vs. Class Inheritance (Comparison) ---");

// Prototypal Inheritance (JavaScript's native mechanism):
// - Objects inherit directly from other objects.
// - More flexible and dynamic.
// - Can be less intuitive for developers coming from class-based languages.

// Class Inheritance (ES6+ `class` keyword):
// - Provides a familiar syntax (like other OOP languages).
// - Still uses prototypal inheritance under the hood, but abstracts away the complexity.
// - Preferred way for modern JavaScript for object-oriented programming.

// Key takeaway: The `class` keyword in JavaScript doesn't introduce a new inheritance model.
// It's just a more convenient way to work with JavaScript's existing prototypal inheritance.

// Exercise for students:
// 1. Create a base object `vehiclePrototype` with properties `speed` and a method `accelerate()` that increases speed.
// 2. Create a `car` object using `Object.create(vehiclePrototype)`. Add a `make` and `model` property to `car`.
// 3. Call `car.accelerate()` and log its `speed`.
// 4. Convert the `Person` constructor function and `Student` function (from examples above) into ES6 `class` syntax.
// 5. Explain in your own words, in comments, what the prototype chain is and why `Object.prototype` is important.
