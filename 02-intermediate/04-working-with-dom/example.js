//Not **must**, only **optional** 

//The `data-*` attributes (like `data-action`) are **not required** by HTML or JavaScript. They’re just a **convenient way** to attach extra, custom information to an element.

// Why people use it:

// To store extra info without creating global variables.
// To identify what an element should "do" in JavaScript.



//Example: Without `data-*`

```html
<button id="saveBtn">Save</button>
<button id="deleteBtn">Delete</button>

<script>
  document.querySelector("#saveBtn").addEventListener("click", () => {
    console.log("Saving...");
  });
  document.querySelector("#deleteBtn").addEventListener("click", () => {
    console.log("Deleting...");
  });
</script>
```



//  Example: With `data-*` (cleaner with one event listener)

```html
<button data-action="save">Save</button>
<button data-action="delete">Delete</button>

<script>
  document.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      const action = e.target.dataset.action;
      if (action === "save") console.log("Saving...");
      if (action === "delete") console.log("Deleting...");
    }
  });
</script>
```

// ✅ Now you don’t need separate `id`s or multiple event listeners.
// The `data-action` makes handling multiple buttons **scalable and cleaner.

// ---

// So:

// Not required ❌
// Useful for organization & flexibility ✅


