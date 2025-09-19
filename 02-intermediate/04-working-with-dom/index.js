// 02-intermediate/04-working-with-dom/index.js

// Working with the DOM (Document Object Model)
// The DOM is a programming interface for web documents.
// It represents the page structure as a tree of objects, allowing JavaScript to interact with HTML and CSS.

// Note: These examples are designed to run in a web browser's console. If running in Node.js, they will not work
// unless you use a library like JSDOM to simulate a browser environment.

console.log("--- 1. DOM Structure and Traversal (Conceptual) ---");

// Imagine an HTML structure like this:
/*
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <div id="container">
        <h1>Welcome to DOM Manipulation</h1>
        <p class="intro">This is an introductory paragraph.</p>
        <ul id="myList">
            <li class="item">Item 1</li>
            <li class="item">Item 2</li>
            <li class="item">Item 3</li>
        </ul>
        <button id="myButton">Click Me</button>
    </div>
    <script src="index.js"></script>
</body>
</html>
*/

console.log("\n--- 2. Selecting Elements ---\n");

// Selecting Elements
// The primary way to get references to HTML elements from JavaScript.

// getElementById(): Selects a single element by its ID. Returns null if not found.
// const container = document.getElementById('container');
// console.log("Container by ID:", container);

// querySelector(): Selects the first element that matches a specified CSS selector. Returns null if not found.
// const heading = document.querySelector("h1");
// console.log("First H1:", heading);

// const introParagraph = document.querySelector(".intro");
// console.log("Intro Paragraph:", introParagraph);

// querySelectorAll(): Selects all elements that match a specified CSS selector. Returns a NodeList (like an array).
// const listItems = document.querySelectorAll('.item');
// console.log("List Items:", listItems);
// listItems.forEach((item, index) => {
//     console.log(`List Item ${index + 1}: ${item.textContent}`);
// });

// getElementsByClassName(): Selects all elements with a specified class name. Returns an HTMLCollection.
// const itemsByClass = document.getElementsByClassName('item');
// console.log("Items by Class:", itemsByClass);

// getElementsByTagName(): Selects all elements with a specified tag name. Returns an HTMLCollection.
// const allParagraphs = document.getElementsByTagName('p');
// console.log("All Paragraphs:", allParagraphs);

console.log("\n--- 3. Manipulating Elements ---\n");

// Manipulating Elements
// Changing content, attributes, and styles.

// (Assuming 'heading' and 'introParagraph' are selected from the HTML example above)
// Text Content: textContent (gets/sets the text content of an element and its descendants, ignores HTML tags)
// heading.textContent = "DOM Manipulation in Action!";

// Inner HTML: innerHTML (gets/sets the HTML content of an element, including HTML tags)
// introParagraph.innerHTML =
//   "This is an <strong>updated</strong> introductory paragraph.";

// Attributes: getAttribute(), setAttribute(), removeAttribute(), hasAttribute()
// const myButton = document.getElementById("myButton");
// console.log("Button ID:", myButton.getAttribute("id"));
// myButton.setAttribute("data-action", "submit");
// console.log("Button data-action:", myButton.getAttribute("data-action"));
// myButton.removeAttribute("id");
// console.log("Button has ID?", myButton.hasAttribute("id"));

// Styles: element.style.propertyName
// container.style.backgroundColor = "lightgray";
// container.style.padding = "20px";
// container.style.border = "1px solid black";

// ClassList: add(), remove(), toggle(), contains()
// introParagraph.classList.add("highlight");
// introParagraph.classList.remove("intro");
// introParagraph.classList.toggle("active"); // Adds if not present, removes if present
// console.log(
//   "Intro paragraph has highlight?",
//   introParagraph.classList.contains("highlight")
// );
// .add() → add class

// .remove() → remove class

// .toggle() → add if missing, remove if present

// .contains() → check if class exists

console.log("\n--- 4. Creating and Removing Elements ---\n");

// Creating and Removing Elements

// Creating a new element: document.createElement()
// const newListItem = document.createElement("li");
// newListItem.textContent = "Item 4 (Dynamically Added)";
// newListItem.classList.add("item");

// Appending to an element: appendChild(), append(), prepend()
// const myList = document.getElementById("myList");
// myList.appendChild(newListItem); // Adds as last child

// const anotherNewItem = document.createElement("li");
// anotherNewItem.textContent = "New First Item";
// myList.prepend(anotherNewItem); // Adds as first child (ES6)
// const listItems = myList.querySelectorAll("li");
// Removing an element: removeChild(), remove()
//myList.removeChild(listItems[0]); // Removes the first static list item
//newListItem.remove(); // Removes the dynamically added item (modern way)

console.log("\n--- 5. Event Handling ---\n");

// Event Handling
// Responding to user interactions or browser events.

// addEventListener(): Attaches an event handler to an element.
// Syntax: element.addEventListener(event, handler, options);

// (Assuming 'myButton' is selected)
// myButton.addEventListener('click', function(event) {
//     console.log("Button clicked!");
//     console.log("Event object:", event);
//     console.log("Target element:", event.target);
// });

// Event delegation (more advanced, often for dynamically added elements)
// myList.addEventListener('click', function(event) {
//     if (event.target.classList.contains('item')) {
//         console.log(`Clicked on list item: ${event.target.textContent}`);
//         event.target.style.backgroundColor = 'lightblue';
//     }
// });

// Event bubbling vs. capturing
// Events typically 'bubble' up from the target element to the document.
// Capturing is the opposite, from document down to target (rarely used for general event handling).

// Exercise for students (requires an HTML file to test):
// 1. Create a simple `index.html` file with a paragraph (`<p id="textChange">Hello World</p>`) and a button (`<button id="changeBtn">Change Text</button>`).
// 2. In `index.js`, select the paragraph by its ID and the button by its ID.
// 3. Add a click event listener to the button. When clicked, change the `textContent` of the paragraph to "Text has been changed!".
// 4. Add another button (`<button id="colorBtn">Change Color</button>`). When this button is clicked, change the background color of the paragraph to a random color.
//    (Hint: You can generate random colors with `'#' + Math.floor(Math.random()*16777215).toString(16)`)
// 5. Create a new `div` element dynamically using JavaScript, give it some text and a class, and append it to the `body` of the HTML document.
// 6. Add a click listener to the dynamically created `div` that logs a message when clicked.
