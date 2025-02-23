# 📌 JavaScript Console Methods with Examples

The console object in JavaScript provides various methods to debug, log, and inspect data in the browser console.

## 🖥️ 1. console.log() – Standard Output

- Used to print general messages or variables.

```js
console.log("Hello, World!"); // Output: Hello, World!

let name = "Ikbal";
console.log("My name is", name); // Output: My name is Ikbal
```

## 🔴 2. console.error() – Display Errors

- Used to log error messages in red text.

```js
console.error("This is an error message!");
//Useful for debugging when something goes wrong.
```

## ⚠️ 3. console.warn() – Display Warnings

- Used to log warnings (usually in yellow).

```js
console.warn("This is a warning!");
//Alerts the developer about potential issues.
```

## 📊 4. console.table() – Display Data in Table Format

- Used to display arrays or objects in a structured table format.

```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

console.table(users);
/*
┌─────────┬─────────┬─────┐
│ (index) │ name    │ age │
├─────────┼─────────┼─────┤
│ 0       │ 'Alice' │ 25  │
│ 1       │ 'Bob'   │ 30  │
└─────────┴─────────┴─────┘
*/
```

## ⏳ 5. console.time() & console.timeEnd() – Measure Execution Time

- Used to measure the time taken by a code block to execute.

```js
console.time("Loop Time");
for (let i = 0; i < 1000000; i++) {} // Simulating a task
console.timeEnd("Loop Time");
//Loop Time: 5.279ms
```

## 📍 6. console.group() & console.groupEnd() – Group Messages

- Used to group related log messages together.

```js
console.group("User Details");
console.log("Name: Ikbal");
console.log("Age: 25");
console.groupEnd();
// Helps organize logs in a structured way.
/*
User Details
  Name: Ikbal
  Age: 25
*/
```

## ✅ 7. console.assert() – Log Only if Condition is False

- Used to log messages only if a given condition is false.

```js
let x = 10;
console.assert(x > 20, "x is not greater than 20!");
// Useful for debugging assumptions in code.
```

## 🔍 8. console.dir() – Display Object Properties

- Used to inspect objects and their properties in depth.

```js
console.dir(document.body);
// Displays all properties of <body>
// it will only run in the browser console
```

## 🔄 9. console.count() – Count Log Occurrences

- Used to count how many times a specific log is executed.

```js
for (let i = 0; i < 3; i++) {
  console.count("Loop executed");
}
//Helps track function calls or iterations.
```
