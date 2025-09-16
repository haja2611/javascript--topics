// String Properties & Methods

// 1. `length` (Property)
// Returns the length of a string.

(() => {
  let text = "Hello World";
  console.log(text.length); // Output: 11
})();

// 2. `charAt()`
//Returns the character at a specified index (position).

(() => {
  let text = "Hello";
  console.log(text.charAt(0)); // Output: H
})();

// 3. `charCodeAt()`
//Returns the Unicode of the character at a specified index.

(() => {
  let text = "Hello";
  console.log(text.charCodeAt(0)); // Output: 72 (Unicode for 'H')
})();

// 4. `concat()`
//Joins two or more strings. (Often `+` operator is preferred for simplicity).

(() => {
  let text1 = "Hello";
  let text2 = "World";
  let result = text1.concat(" ", text2);
  console.log(result); // Output: Hello World
})();

//5. `indexOf()`
//Returns the index of the first occurrence of a specified text in a string. Returns -1 if the text is not found.

(() => {
  let text = "Please locate where 'locate' occurs!";
  console.log(text.indexOf("locate")); // Output: 7
})();

//6. `lastIndexOf()`
//Returns the index of the last occurrence of a specified text in a string.

(() => {
  let text = "Please locate where 'locate' occurs!";
  console.log(text.lastIndexOf("locate")); // Output: 21
})();

// 7. `search()`
//Searches a string for a specified value and returns the position of the match. Can take regular expressions.

(() => {
  let text = "Please locate where 'locate' occurs!";
  console.log(text.search("locate")); // Output: 7
})();

// 8. `match()`
//Searches a string for a match against a regular expression, and returns the matches as an Array object.

(() => {
  let text = "The rain in SPAIN stays mainly in the plain";
  let result = text.match(/ain/g); // 'g' for global search
  console.log(result); // Output: ["ain", "ain", "ain"]
})();

// 9. `includes()`
//Returns `true` if a string contains a specified value, otherwise `false`.

(() => {
  let text = "Hello world, welcome to the universe.";
  console.log(text.includes("world")); // Output: true
  console.log(text.includes("foo")); // Output: false
})();

// 10. `startsWith()`
//Returns `true` if a string begins with a specified value, otherwise `false`.

(() => {
  let text = "Hello world!";
  console.log(text.startsWith("Hello")); // Output: true
  console.log(text.startsWith("world")); // Output: false
})();

// 11. `endsWith()`
// Returns `true` if a string ends with a specified value, otherwise `false`.

(() => {
  let text = "Hello world!";
  console.log(text.endsWith("!")); // Output: true
  console.log(text.endsWith("world")); // Output: false
})();

// 12. `substring()`
//Extracts characters from a string between two specified indices (start and end, exclusive of end).

(() => {
  let text = "Apple, Banana, Kiwi";
  let part = text.substring(7, 13);
  console.log(part); // Output: Banana
})();

// 13. `substr()` (Deprecated, use `slice()` or `substring()`)
//Extracts a part of a string, starting at a specified index and extracting a specified number of characters.

(() => {
  let text = "Apple, Banana, Kiwi";
  let part = text.substr(7, 6); // start at index 7, extract 6 characters
  console.log(part); // Output: Banana
})();

// 14. `slice()`
//Extracts a part of a string and returns the extracted part in a new string. Takes start and end positions.

(() => {
  let text = "Apple, Banana, Kiwi";
  let part = text.slice(7, 13);
  console.log(part); // Output: Banana

  // Using negative values counts from the end of the string
  let part2 = text.slice(-4);
  console.log(part2); // Output: Kiwi
})();

// 15. `replace()`
//Replaces a specified value with another value in a string. Only replaces the *first* occurrence by default.

(() => {
  let text = "Please visit Microsoft and Microsoft!";
  let newText = text.replace("Microsoft", "Cisl");
  console.log(newText); // Output: Please visit Cisl and Microsoft!
})();

// 16. `replaceAll()`
//Replaces all occurrences of a specified value with another value in a string.

(() => {
  let text = "I love cats. Cats are very easy to love. Cats are cute!";
  let newText = text.replaceAll("Cats", "Dogs");
  console.log(newText); // Output: I love dogs. Dogs are very easy to love. Dogs are cute!
})();

// 17. `toLowerCase()`
//Converts a string to lowercase letters.

(() => {
  let text = "Hello World!";
  let lowerText = text.toLowerCase();
  console.log(lowerText); // Output: hello world!
})();

// 18. `toUpperCase()`
//Converts a string to uppercase letters.

(() => {
  let text = "Hello World!";
  let upperText = text.toUpperCase();
  console.log(upperText); // Output: HELLO WORLD!
})();

// 19. `trim()`
//Removes whitespace from both ends of a string.

(() => {
  let text = "   Hello World!   ";
  let trimmedText = text.trim();
  console.log(trimmedText); // Output: "Hello World!"
})();

// 20. `trimStart()` / `trimLeft()`
//Removes whitespace from the beginning of a string.

(() => {
  let text = "   Hello World!   ";
  let trimmedStart = text.trimStart();
  console.log(trimmedStart); // Output: "Hello World!   "
})();

// 21. `trimEnd()` / `trimRight()`
//Removes whitespace from the end of a string.

(() => {
  let text = "   Hello World!   ";
  let trimmedEnd = text.trimEnd();
  console.log(trimmedEnd); // Output: "   Hello World!"
})();

// 22. `split()`
//Splits a string into an array of substrings.

(() => {
  let text = "How are you today?";
  let words = text.split(" ");
  console.log(words); // Output: ["How", "are", "you", "today?"]

  let chars = text.split("");
  console.log(chars); // Output: ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "t", "o", "d", "a", "y", "?"]
})();

// 23. `repeat()`
//Returns a new string with a specified number of copies of the string it was called on, concatenated together.

(() => {
  let text = "Hello";
  let repeatedText = text.repeat(3);
  console.log(repeatedText); // Output: "HelloHelloHello"
})();

/*
  JavaScript String Exercises for Beginners

  Instructions:
  For each exercise, uncomment the code and fill in the blanks
  or write the required code to achieve the desired output.
  Run your JavaScript file to check your answers.
*/

// --- Exercise 1: String Length ---
// Get the length of the string 'greeting'.
/*
let greeting = "Hello, JavaScript!";
let length = // YOUR CODE HERE
console.log("Exercise 1 Length:", length); // Expected: 18
*/

// --- Exercise 2: Accessing Characters ---
// Get the character at index 7 from the 'sentence' string.
/*
let sentence = "I love coding!";
let charAtIndex7 = // YOUR CODE HERE
console.log("Exercise 2 Character:", charAtIndex7); // Expected: 'c'
*/

// --- Exercise 3: Concatenation ---
// Concatenate 'firstName' and 'lastName' with a space in between.
/*
let firstName = "John";
let lastName = "Doe";
let fullName = // YOUR CODE HERE
console.log("Exercise 3 Full Name:", fullName); // Expected: "John Doe"
*/

// --- Exercise 4: Finding Substrings (indexOf) ---
// Find the first occurrence of "world" in 'text1'.
/*
let text1 = "Hello world, welcome to the world of programming!";
let indexOfWorld = // YOUR CODE HERE
console.log("Exercise 4 Index:", indexOfWorld); // Expected: 6
*/

// --- Exercise 5: Finding Substrings (lastIndexOf) ---
// Find the last occurrence of "world" in 'text2'.
/*
let text2 = "Hello world, welcome to the world of programming!";
let lastIndexOfWorld = // YOUR CODE HERE
console.log("Exercise 5 Last Index:", lastIndexOfWorld); // Expected: 27
*/

// --- Exercise 6: Extracting Substrings (slice) ---
// Extract "Banana" from the 'fruits' string.
/*
let fruits = "Apple, Banana, Kiwi";
let banana = // YOUR CODE HERE
console.log("Exercise 6 Slice:", banana); // Expected: "Banana"
*/

// --- Exercise 7: Replacing Substrings (replace) ---
// Replace the first occurrence of "cat" with "dog" in 'animalSentence'.
/*
let animalSentence = "I have a cat, and my cat is cute.";
let newAnimalSentence = // YOUR CODE HERE
console.log("Exercise 7 Replaced:", newAnimalSentence); // Expected: "I have a dog, and my cat is cute."
*/

// --- Exercise 8: Replacing All Substrings (replaceAll) ---
// Replace all occurrences of "red" with "blue" in 'colorText'.
/*
let colorText = "The red car and the red house.";
let newColorText = // YOUR CODE HERE
console.log("Exercise 8 Replaced All:", newColorText); // Expected: "The blue car and the blue house."
*/

// --- Exercise 9: Case Conversion (toUpperCase) ---
// Convert 'lowerCaseText' to uppercase.
/*
let lowerCaseText = "this is a test.";
let upperCaseText = // YOUR CODE HERE
console.log("Exercise 9 Uppercase:", upperCaseText); // Expected: "THIS IS A TEST."
*/

// --- Exercise 10: Case Conversion (toLowerCase) ---
// Convert 'upperCaseText2' to lowercase.
/*
let upperCaseText2 = "HELLO JAVASCRIPT!";
let lowerCaseText2 = // YOUR CODE HERE
console.log("Exercise 10 Lowercase:", lowerCaseText2); // Expected: "hello javascript!"
*/

// --- Exercise 11: Removing Whitespace (trim) ---
// Remove leading and trailing whitespace from 'paddedText'.
/*
let paddedText = "   Hello World!   ";
let trimmedText = // YOUR CODE HERE
console.log("Exercise 11 Trimmed:", trimmedText); // Expected: "Hello World!"
*/

// --- Exercise 12: Splitting Strings (split) ---
// Split the 'wordsString' into an array of words.
/*
let wordsString = "apple,banana,orange";
let wordArray = // YOUR CODE HERE
console.log("Exercise 12 Split:", wordArray); // Expected: ["apple", "banana", "orange"]
*/

// --- Exercise 13: Checking Inclusion (includes) ---
// Check if 'checkText' includes the word "coding".
/*
let checkText = "I enjoy coding in JavaScript.";
let hasCoding = // YOUR CODE HERE
console.log("Exercise 13 Includes:", hasCoding); // Expected: true
*/

// --- Exercise 14: Checking Start (startsWith) ---
// Check if 'startText' starts with "The".
/*
let startText = "The quick brown fox.";
let startsWithThe = // YOUR CODE HERE
console.log("Exercise 14 Starts With:", startsWithThe); // Expected: true
*/

// --- Exercise 15: Checking End (endsWith) ---
// Check if 'endText' ends with ".".
/*
let endText = "This is a sentence.";
let endsWithPeriod = // YOUR CODE HERE
console.log("Exercise 15 Ends With:", endsWithPeriod); // Expected: true
*/
