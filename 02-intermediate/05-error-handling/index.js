// 02-intermediate/05-error-handling/index.js

// Error Handling
// Crucial for building robust applications that can gracefully respond to unexpected situations.

console.log("--- 1. try...catch...finally ---");

// try...catch statement
// `try`: Defines a code block to be tested for errors while it is being executed.
// `catch`: Defines a code block to be executed if an error occurs in the try block.
// `finally`: Defines a code block that will always be executed, regardless of the try/catch result.

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    const result = a / b;
    console.log(`Result of division: ${result}`);
    return result;  
  } catch (err) {
    console.error("Caught an error:", err.message); // Access the error message
    console.error(err);
    // You can log the full error object for more details: console.error(error);
    return null; // Return a default or error value
  } finally {
    console.log("Division attempt finished.");
  }
}

divide(10, 2); // Successful division
divide(10, 0); // Division by zero error

console.log("\n--- 2. throw Statement ---\n");

// throw Statement
// Used to create custom errors. When `throw` is executed, the normal flow of the script stops,
// and control is transferred to the nearest `catch` block.

function processInput(value) {
  try {
    if (typeof value !== "number") {
      throw new TypeError("Input must be a number.");
    }
    if (value < 0) {
      throw new RangeError("Input cannot be negative.");
    }
    console.log(`Processing value: ${value}`);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Type Error:", error.message);
    } else if (error instanceof RangeError) {
      console.error("Range Error:", error.message);
    } else {
      console.error("An unexpected error occurred:", error.message);
    }
  }
}

processInput(5);
processInput("abc");
processInput(-10);
processInput([]);
processInput({ name: "ramen" });

console.log("\n--- 3. Custom Error Objects ---\n");

// Custom Error Objects
// You can create your own error classes by extending the built-in `Error` class.

class CustomValidationError extends Error {
  constructor(message, field) {
    super(message); // Call the parent Error constructor
    this.name = "CustomValidationError"; // Set a custom error name
    this.field = field; // Add custom properties
  }
}

function validateUserData(userData) {
  try {
    if (!userData.username || userData.username.length < 3) {
      throw new CustomValidationError(
        "Username must be at least 3 characters long.",
        "username"
      );
    } 
    if (!userData.email || !userData.email.includes("@")) {
      throw new CustomValidationError("Invalid email format.", "email");
    }
    console.log("User data is valid.", userData);
  } catch (error) {
    if (error instanceof CustomValidationError) {
      console.error(
        `Validation Error on field '${error.field}': ${error.message}`
      );
    } else {
      console.error("An unexpected error occurred:", error.message);
    }
  }
}

validateUserData({ username: "jo", email: "john@example.com" });
validateUserData({ username: "john_doe", email: "invalid-email" });
validateUserData({ username: "alice", email: "alice@example.com" });

// Exercise for students:
// 1. Write a function `checkPassword` that takes a password string. Use a `try...catch` block.
//    - If the password is less than 8 characters, `throw new Error("Password too short.")`.
//    - If the password contains "password" (case-insensitive), `throw new Error("Password cannot contain 'password'.")`.
//    - Otherwise, log "Password is valid."
//    Call this function with valid and invalid passwords.
// 2. Create a custom error class called `NetworkError` that extends `Error`. It should have a `statusCode` property.
// 3. Write an `async` function `fetchDataWithError` that simulates a network request. Inside a `try...catch` block:
//    - If a `simulateFailure` flag is true, `throw new NetworkError("Failed to fetch data.", 500)`.
//    - Otherwise, `resolve` with some data.
//    Catch the `NetworkError` and log its `message` and `statusCode`.
