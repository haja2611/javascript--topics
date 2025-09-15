// 01-beginner/04-control-flow/index.js

// 1. Conditional Statements: if, else if, else
// Used to execute different blocks of code based on conditions.

let temperature = 25;

console.log("--- if, else if, else ---");

if (temperature > 30) {
    console.log("It's a hot day!");
} else if (temperature > 20) {
    console.log("It's a warm day.");
} else if (temperature > 10) {
    console.log("It's a moderate day.");
} else {
    console.log("It's a cold day.");
}

// Example with logical operators
let age = 17;
let hasPermission = false;

if (age >= 18 && hasPermission) {
    console.log("Access granted.");
} else if (age >= 18 && !hasPermission) {
    console.log("Access denied: Missing permission.");
} else {
    console.log("Access denied: Too young.");
}

console.log("\n--- switch Statement ---\n");

// 2. switch Statement
// Used to perform different actions based on different conditions, often for a single variable.

let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    case "Saturday":
    case "Sunday": // Multiple cases can share the same code block
        console.log("It's the weekend!");
        break;
    default:
        console.log("It's a regular weekday.");
        break;
}

let fruit = "apple";

switch (fruit) {
    case "apple":
    case "banana":
        console.log("It's a common fruit.");
        break;
    case "orange":
        console.log("It's a citrus fruit.");
        break;
    default:
        console.log("Unknown fruit.");
        break;
}

// Exercise for students:
// 1. Write an if-else if-else statement to categorize a student's grade (e.g., A, B, C, D, F) based on a score out of 100.
//    - 90-100: A
//    - 80-89: B
//    - 70-79: C
//    - 60-69: D
//    - Below 60: F
// 2. Use a switch statement to print a message based on a given `month` (e.g., "January" -> "Winter month", "July" -> "Summer month"). Handle at least 3 different months and a default case.
