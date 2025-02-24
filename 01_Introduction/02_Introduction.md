# How Does JavaScript Execute Code + Call Stack

## Execution Context in JavaScript

To understand this concept, we first need to understand how the **Execution Context** works.

- When we run any JavaScript code, it first creates a **Global Execution Context (GEC)** and assigns it to the `this` variable.
- The execution context differs slightly between **browsers and Node.js**.
- JavaScript executes inside a **single thread**, meaning it is a **single-threaded language**.
- There are **three types of execution contexts**:
  - **Global Execution Context**
  - **Functional Execution Context**
  - **Eval Execution Context**

## Execution Process in JavaScript

When JavaScript code runs, it follows a structured process consisting of **two phases**:

### 🔹 Example Code Snippet

```js
let val1 = 10;
let val2 = 20;
function sumOfTwo(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = sumOfTwo(val1, val2);
let result2 = sumOfTwo(5, 7);
```

### 1️⃣ **Memory Creation Phase**

In this phase, JavaScript **allocates memory** for all variables and functions **before execution begins**:

- `val1` → `undefined`
- `val2` → `undefined`
- `sumOfTwo` → **Function Definition**
- `result1` → `undefined`
- `result2` → `undefined`

### 2️⃣ **Execution Phase**

In this phase, JavaScript assigns values to variables and executes the functions.

- `val1` ← `10`, `val2` ← `20`
- When `sumOfTwo(val1, val2)` is called, a **new execution context** is created.
- Inside the new execution context:
  - **Memory Phase:** `num1` → `undefined`, `num2` → `undefined`, `total` → `undefined`
  - **Execution Phase:** `num1` ← `10`, `num2` ← `20`, `total` ← `30`
- The function **returns `total` to the global execution context**.
- Once execution is complete, the function's execution context **is removed from the stack**.

## 📌 Call Stack in JavaScript

The **Call Stack** is a mechanism JavaScript uses to keep track of function execution. It follows the **LIFO (Last In, First Out) principle**.

### 🔹 Example Code Snippet

```js
console.log("Start");

function first() {
  console.log("Inside first function");
  second();
}

function second() {
  console.log("Inside second function");
}

first();

console.log("End");
```

### 📊 Call Stack Execution Steps

1. **Global Execution Context (GEC) is created**
2. `console.log("Start")` executes
3. `first()` is called → **`first()` is added to the stack**
4. Inside `first()`, `second()` is called → **`second()` is added to the stack**
5. `second()` finishes execution → **`second()` is removed from the stack**
6. `first()` finishes execution → **`first()` is removed from the stack**
7. `console.log("End")` executes
8. Global Execution Context is removed, and the **stack is empty**

### 📌 Visual Representation of the Call Stack

```
1. Global Execution Context (GEC) created
2. console.log("Start") executes
3. first() is called → first() added to the stack
4. Inside first(), second() is called → second() added to the stack
5. second() finishes → second() removed from stack
6. first() finishes → first() removed from stack
7. console.log("End") executes
8. GEC removed, stack is empty
```

This document provides a clear and structured explanation of **JavaScript Execution Context and Call Stack**.

