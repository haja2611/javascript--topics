// 01-beginner/07-arrays/index.js

// 1. Creating Arrays
// Arrays are ordered collections of values.
// They can hold values of different data types.

console.log("--- Creating Arrays ---");

// Array Literal (most common way)
const emptyArray = [];
const numbers = [1, 2, 3, 4, 5];
const mixedArray = ["hello", 123, true, null, { key: "value" }];

console.log("Empty array:", emptyArray);
console.log("Numbers array:", numbers);
console.log("Mixed array:", mixedArray);

// Using the Array constructor (less common, can have quirks with single number argument)
const anotherNumbers = new Array(1, 2, 3);
console.log("Another numbers array:", anotherNumbers);

const fiveEmptyElements = new Array(5); // Creates an array with 5 empty slots
console.log("Five empty elements:", fiveEmptyElements);

console.log("\n--- Accessing Elements ---\n");

// 2. Accessing Elements
// Array elements are accessed using zero-based indexing.

const colors = ["red", "green", "blue", "yellow"];

console.log(`First color: ${colors[0]}`); // red
console.log(`Second color: ${colors[1]}`); // green
console.log(`Last color: ${colors[colors.length - 1]}`); // yellow

// Modifying elements
colors[1] = "emerald";
console.log("Modified colors array:", colors); // ['red', 'emerald', 'blue', 'yellow']

// Trying to access an out-of-bounds index returns `undefined`
console.log(`Color at index 10: ${colors[10]}`); // undefined

console.log("\n--- Array Methods ---\n");

// 3. Common Array Methods

const animals = ["dog", "cat", "bird"];
console.log("Initial animals:", animals);

// push(): Adds one or more elements to the end of an array and returns the new length.
const newLengthPush = animals.push("fish", "rabbit");
console.log("After push:", animals, "New length:", newLengthPush);

// pop(): Removes the last element from an array and returns that element.
const removedAnimal = animals.pop();
console.log("After pop:", animals, "Removed:", removedAnimal);

// unshift(): Adds one or more elements to the beginning of an array and returns the new length.
const newLengthUnshift = animals.unshift("zebra");
console.log("After unshift:", animals, "New length:", newLengthUnshift);

// shift(): Removes the first element from an array and returns that element.
const shiftedAnimal = animals.shift();
console.log("After shift:", animals, "Shifted:", shiftedAnimal);

// length property: Returns the number of elements in an array.
console.log("Length of animals array:", animals.length);

// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(`Index of 'cat': ${animals.indexOf("cat")}`); // 1
console.log(`Index of 'lion': ${animals.indexOf("dog")}`); // -1

// includes() (ES7): Checks if an array includes a certain value among its entries, returning true or false.
console.log(`Does animals include 'bird'? ${animals.includes("bird")}`); // true
console.log(`Does animals include 'lion'? ${animals.includes("lion")}`); // false

// slice(): Returns a shallow copy of a portion of an array into a new array. (Does not modify original)
const slicedAnimals = animals.slice(1, 3); // From index 1 up to (but not including) index 3
console.log("Sliced animals (1,3):", slicedAnimals);
console.log("Original animals after slice:", animals);

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. (Modifies original)
const removedSplice = animals.splice(1, 1, "tiger", "bear"); // At index 1, remove 1 element, add 'tiger', 'bear'
console.log("After splice:", animals, "Removed by splice:", removedSplice);

console.log("\n--- Iterating Over Arrays ---\n");

// 4. Iterating Over Arrays

const items = ["laptop", "mouse", "keyboard"];

// for loop (traditional way)
console.log("Using for loop:");
for (let i = 0; i < items.length; i++) {
  console.log(`Item ${i + 1}: ${items[i]}`);
}

// forEach() method (common for iterating, doesn't return a new array)
console.log("Using forEach method:");
items.forEach(function (item, index) {
  console.log(`Item at index ${index}: ${item}`);
});

// Arrow function with forEach
console.log("Using forEach with arrow function:");
items.forEach((item) => {
  console.log(`-- ${item}`);
});

// for...of loop (ES6 - concise way to iterate over iterable objects like arrays)
console.log("Using for...of loop:");
for (const item of items) {
  console.log(`- ${item}`);
}

console.log("\n--- Higher-Order Array Methods (ES5+) ---\n");

// 5. map()
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
// It does not modify the original array.
// Syntax: array.map(callback(currentValue, index, array))
const numbersToMap = [1, 2, 3, 4, 5];
const doubledNumbers = numbersToMap.map((number) => number * 2);
console.log("Original numbers for map:", numbersToMap);
console.log("Doubled numbers (map):", doubledNumbers);

const words = ["hello", "world", "javascript"];
const wordLengths = words.map((word) => word.length);
console.log("Original words:", words);
console.log("Word lengths (map):", wordLengths);

// 6. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
// It does not modify the original array.
// Syntax: array.filter(callback(currentValue, index, array))
const ages = [12, 19, 20, 15, 22, 30];
const adults = ages.filter((age) => age >= 18);
console.log("Original ages for filter:", ages);
console.log("Adults (filter):", adults);

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 300 },
];
const expensiveProducts = products.filter((product) => product.price > 100);
console.log("Original products:", products);
console.log("Expensive products (filter):");
expensiveProducts.forEach((product) =>
  console.log(`- ${product.name}: $${product.price}`)
);

// 7. reduce()
// Executes a reducer function (provided by you) on each element of the array, resulting in a single output value.
// Syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
const numbersToReduce = [1, 2, 3, 4, 5];
const sum = numbersToReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Original numbers for reduce:", numbersToReduce);
console.log("Sum (reduce):", sum); // 15

const shoppingCart = [
  { item: "Laptop", price: 1200, quantity: 1 },
  { item: "Mouse", price: 25, quantity: 2 },
  { item: "Keyboard", price: 75, quantity: 1 },
];
const total = shoppingCart.reduce(
  (acc, product) => acc + product.price * product.quantity,
  0
);
console.log("Shopping cart:", shoppingCart);
console.log("Total cost (reduce):", total); // 1325

// 8. sort()
// Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// Syntax: array.sort(compareFunction)
const unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Unsorted numbers:", unsortedNumbers);
unsortedNumbers.sort(); // Sorts as strings by default
console.log("Sorted numbers (default string sort):", unsortedNumbers);

const numericSortNumbers = [3, 1, 15, 9, 2, 6];
console.log("Unsorted numbers for numeric sort:", numericSortNumbers);
numericSortNumbers.sort((a, b) => a - b); // Numeric sort ascending
console.log("Sorted numbers (numeric ascending):", numericSortNumbers);

numericSortNumbers.sort((a, b) => b - a); // Numeric sort descending
console.log("Sorted numbers (numeric descending):", numericSortNumbers);

const names = ["Alice", "Charlie", "Bob"];
console.log("Unsorted names:", names);
names.sort();
console.log("Sorted names:", names);

// 9. reverse()
// Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// Syntax: array.reverse()
const originalArray = [1, 2, 3, 4, 5];
console.log("Original array for reverse:", originalArray);
originalArray.reverse();
console.log("Reversed array:", originalArray);

const stringArray = ["a", "b", "c", "d"];
console.log("Original string array for reverse:", stringArray);
stringArray.reverse();
console.log("Reversed string array:", stringArray);

// Exercise for students:
// 1. Create an array called `favoriteFoods` with at least 3 of your favorite foods.
// 2. Add two new foods to the end of the `favoriteFoods` array using `push()`.
// 3. Remove the first food from `favoriteFoods` using `shift()`.
// 4. Log the new `favoriteFoods` array and its length to the console.
// 5. Check if your array includes a specific food using `includes()` and print the result.
// 6. Use a `for` loop to print each food in your `favoriteFoods` array.
// 7. Use the `forEach` method to print each food along with its index.
