// 02-intermediate/02-asynchronous-javascript/index.js

// Understanding Asynchronous JavaScript and Event Loop (Conceptual Overview)
// JavaScript is single-threaded, meaning it executes one operation at a time.
// However, it can handle long-running operations (like network requests, timers) without blocking the main thread
// by offloading them to the browser's Web APIs or Node.js C++ APIs and using a callback queue and event loop.

// Event Loop simplified:
// 1. All synchronous code runs first.
// 2. Asynchronous tasks (like setTimeout, Promises, network requests) are sent to Web APIs (or Node.js APIs).
// 3. Once an async task completes, its callback is moved to the Callback Queue (also called Task Queue).
// 4. The Event Loop continuously checks if the Call Stack is empty. If it is, it pushes the first callback
//    from the Callback Queue to the Call Stack for execution.

console.log("--- Asynchronous JavaScript: Sync vs Async ---");
console.log("1. Start (Synchronous)");

setTimeout(() => {
  console.log("3. setTimeout callback (Asynchronous - after 2 seconds)");
}, 2000);

setTimeout(() => {
  console.log(
    "4. Another setTimeout callback (Asynchronous - after 0 seconds, but still async)"
  );
}, 0);

console.log("2. End (Synchronous)");

console.log("\n--- Promises ---\n");

// 1. Promises
// An object representing the eventual completion or failure of an asynchronous operation.
// A Promise can be in one of three states:
// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: meaning that the operation completed successfully.
// - rejected: meaning that the operation failed.

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    setTimeout(() => {
      resolve("Data successfully fetched!"); // Fulfills the promise
    }, 1500);
  } else {
    setTimeout(() => {
      reject("Failed to fetch data."); // Rejects the promise
    }, 1500);
  }
});

// Consuming a Promise: .then(), .catch(), .finally()
console.log("Initiating promise...");
myPromise
  .then((message) => {
    console.log(`Success: ${message}`);
    return "Further processing complete."; // Chaining promises
  })
  .then((nextMessage) => {
    console.log(`Chained then: ${nextMessage}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  })
  .finally(() => {
    console.log("Promise settled (either fulfilled or rejected).");
  });

// Example of a promise that immediately resolves/rejects
const resolvedPromise = Promise.resolve("I resolve immediately");
resolvedPromise.then((msg) => console.log(msg));

const rejectedPromise = Promise.reject("I reject immediately");
rejectedPromise.catch((err) => console.error(err));

console.log("\n--- Async/Await (ES2017) ---\n");

// 2. async/await
// Syntactic sugar on top of Promises, making asynchronous code look and behave more like synchronous code.
// `async` keyword: Used to define an asynchronous function. An async function implicitly returns a Promise.
// `await` keyword: Can only be used inside an `async` function. It pauses the execution of the async function
//                  until the Promise is settled (resolved or rejected) and returns its resolved value.

function simulateFetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

function simulateFetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`Post 1 by user ${userId}`, `Post 2 by user ${userId}`]);
    }, 800);
  });
}

async function getUserAndPosts() {
  try {
    console.log("Fetching user...");
    const user = await simulateFetchUser(); // Pauses until user is fetched
    console.log("User fetched:", user);

    console.log("Fetching posts...");
    const posts = await simulateFetchPosts(user.id); // Pauses until posts are fetched
    console.log("Posts fetched:", posts);

    return { user, posts };
  } catch (error) {
    console.error("Error in getUserAndPosts:", error);
    throw error; // Re-throw to propagate the error
  }
}

// Calling the async function
getUserAndPosts()
  .then((data) => {
    console.log("All data retrieved:", data);
  })
  .catch((err) => {
    console.error("Caught error outside async function:", err);
  });

console.log("Async function called. Continues synchronous code...");

// Example with error handling in async/await
async function failFetch() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Something went wrong during fetch!");
    }, 500);
  });
}

async function handleErrorExample() {
  try {
    console.log("Attempting to fetch data that will fail...");
    const result = await failFetch();
    console.log("This will not be logged:", result);
  } catch (error) {
    console.error(`Caught error in handleErrorExample: ${error}`);
  }
}

handleErrorExample();

// Exercise for students:
// 1. Create a Promise that simulates a coin toss. It should resolve with "Heads" or "Tails" after 1 second, randomly.
// 2. Chain two `.then()` calls to the coin toss promise. The first `then` should log the result, and the second `then` should log a message like "Coin toss completed!".
// 3. Add a `.catch()` block to the coin toss promise to handle potential errors (e.g., if you intentionally `reject` it).
// 4. Write an `async` function called `fetchRandomNumber` that uses `await` to get a random number after a 1.5-second delay (simulated with `setTimeout` wrapped in a Promise). Log the number.
// 5. Modify the `fetchRandomNumber` function to include `try...catch` block to handle potential errors if the Promise rejects.
