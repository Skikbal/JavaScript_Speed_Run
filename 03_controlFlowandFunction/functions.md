# 🔥 Deep Dive into Functions in JavaScript

- its a reusable block of code.
- Function is a types of package we basically encapsulate codes inside a package for easy resuse that is called function

- if i want to print all these console 10 times what should i do i have to write it 10 times.

  ```js
  console.log("I");
  console.log("k");
  console.log("b");
  console.log("a");
  console.log("l");
  ```

- This is where function comes, we basically encapsulate these codes inside a package and we can execute this package whenever wherver and as many times as we want.

  ```js
  /*
  function - keyword.
  syamyname - function name.
  {} scope of the function or we write function defination here.
  */

  function sayMyName() {
    console.log("I");
    console.log("k");
    console.log("b");
    console.log("a");
    console.log("l");
  }

  /* 
  sayMyName - function referance.
  if we use () then it will exicute sayMyName()
  */

  sayMyName();
  console.log(sayMyName); // [Function: sayMyName] its just the refrence
  ```

- lets create a function that returns the sum of two number.
- when you are returning somthing from the function then only you can store it in a variable.

  ```js
  function addTwo(num1, num2) {
    // these are called parameters
    return num1 + num2;
  }

  const result = addTwo(4, 3); // these are called arguemnets
  console.log(result);
  ```

- let see this function and anlyze how can we pass a default value as parameter.

  ```js
  function loginUser(username = "sam") {
    //assign default value
    return `${username} is loggedin`;
  }

  console.log(loginUser("ikbal")); // ikbal is loggedin
  console.log(loginUser("")); // is loggedin
  console.log(loginUser()); //undefined is loggedin
  ```

- In this function lets analyze how can we pass multiple arguments as parameter using `Rest` operator.

  ```js
  function calcullateCartPrice(val1, val2, ...num1) {
    // here val1=200,val2=400 , rest will be in num1
    return num1;
  }

  console.log(calcullateCartPrice(200, 400, 500, 600, 800));
  ```

- lets see how to take objects or array as parameter in a function

  ```js
  const user = {
    username: "ikbal",
    price: "199",
  };

  function handleObject(anyObject) {
    console.log(
      `username is ${anyObject.username} and price is ${anyObject.price}`
    );
  }

  handleObject(user);

  //array
  const arr = [1, 2, 3, 4, 5];

  function my2ndValue(arr) {
    return arr[1];
  }

  console.log(my2ndValue(arr));
  ```

# 🔹 Types of Functions in JavaScript

## 📌 1. Function Declaration (Named Function)

- A function declaration is defined using function keyword and a function name.
- `Hoisting`: function definations are hoisted , means they can be called before they are defined.

  ```js
  function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Ikbal")); // Output: Hello, Ikbal!
  ```

## 📌 2. Function Expression (Anonymous Function)

- A function expression is stored in a varibale doesnot have a name.
- `Hoisting`: These are not hoisted.

  ```js
  const add = function (a, b) {
    return a + b;
  };
  console.log(add(5, 3)); // Output: 8
  ```

## 📌 3. Arrow Function (ES6)

- A shorter syntax for function expression.
- `Implicit Return`: If the function is only of one line or its returning value in one line , then `{}` and `return` keyword can be omitted.

  ```js
  const multiply = (a, b) => a * b;
  console.log(multiply(4, 2)); // Output: 8

  // with parenthesis we dont need to write return its implicit return.
  const sumOfTwo = (num1, num2) => num1 + num2;

  console.log(sumOfTwo(3, 4));

  // if we want to return any object you must wrap it in braces.
  const nameFun = (name) => ({ username: name });
  console.log(nameFun("ikbal"));
  ```

- No `this` Binding: arrow function doesnot have their own `this` keyword or context.

  ```js
  //Node js Environment
  console.log(this); // {}
  //Browser
  console.log(this); //window object {}
  ```

  ### 🔹 Why does `this.username` return undefined?

  - when function invoked in global scope this refers to the global Object or window Object.
  - username is defined using const inside the function and its not a property of global object.
  - when we try `this.username` its actually looking for username in global object which isnt present there.

  ```js
  //lets create a named function
  function myWeb() {
    const userName = "ikbal";
    console.log(this.username); // undefined
    console.log(this);
    // global object (in Node.js) or [object Window]  (in browsers)
  }
  ```

  ### 🔹 Why does this work inside object methods?

  - When function is a method of an object then this refers to the object that owns the function.
  - Here `this` is bound to the parent object its defined in.

    ```js
    const myObject = {
      userName: "ikbal",
      myWeb: function () {
        console.log(this.userName); // 'ikbal'
        console.log(this);
        // { userName: 'ikbal', myWeb: [Function: myWeb] }
      },
    };

    myObject.myWeb();
    ```

  ### 🔹 Why does `this` doesnot work with arrow function ?

  - In regular function they do have their own `this` they refers to the global object in nodejs and in browser its window.
  - In Arrow function this doesnot have its own `this`,It inherit it from the sorrounding lexical environment.

    ```js
    const user = () => {
      const user = "ikbal";
      console.log(this); // Output: {} in Node.js, window in browsers
      console.log(this.user); // Output: undefined
    };
    user();
    ```

## 📌 4. Immediately Invoked Function Expression (IIFE)

- A function that runs immediately after defined.

  ```js
  (function () {
    console.log("hello world");
  })();
  ```

## 📌 5. Higher-Order Functions

- A function that takes another function as parameter or returns another function.
- used in map,filter,reduce

  ```js
  function operate(a, b, cb) {
    return cb(a, b);
  }
  console.log(3, 5, (x, y) => x + y); //8
  ```

## 📌 6. Recursive Function

- A function that call it-self
- used in tree traversal,factorial calcullation, fibonacci sequence

  ```js
  function factorial(n) {
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  console.log(factorial(5)); //20
  ```

# 🔹 Function Scope in JavaScript

- scopes determine the visibility and the accessbility of the variable.
- The journey of scope start with `let`, `var` & `const` keywords.

  ```js
  let a = 10;
  const b = 20;
  var c = 30;

  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
  ```

- Asusual we will get all the results in console, But these same keywords not working similarly when we introduce them to scope `{}`

- To get more clarity in scopes lets see types of scopes.

  ## 📌 1. Global Scope

  - The variable declared outside of function are accessible anywhere.

    ```js
    let globalVar = "I am global!";
    function test() {
      console.log(globalVar);
    }
    test(); // Output: I am global!
    ```

  ## 📌 2. Function (Local) Scope

  - The variable declared inside any function and cant be access outside of the function.

    ```js
    function localScope() {
      let localVar = "I am local!";
      console.log(localVar);
    }
    localScope(); // Output: I am local!
    console.log(localVar); // ❌ Error: localVar is not defined
    ```

  - lets understand it with example

    ```js
    var c = 300;
    // this is global scope
    if (true) {
      let a = 10;
      const b = 10; // this is block scope inside {}
      var c = 10;
    }

    console.log(a); //undefined
    console.log(b); //undefined
    console.log(c); //10
    ```

  - Here i have allocated memory to these variable inside if block if i can access them outside the if block then it will cause problem.
  - Look at the `var` Here its overwriting the global variable and can be acessed outside of the scope thats why `var` isnt used anymore.

  - lets see another example

    ```js
    let d = 300; // its defined in global scope
    if (true) {
      let d = 50; // defined in block scope
      console.log(d); // 50 it look at the block scope
    }
    console.log(d); // 300 now its in global scope
    ```

  ## 📌 3. Lexical Scope (Nested scope)

  - Function One is the parent, and Function Two is the child. The child can inherit the parent's scope because, for the child, the parent's scope acts as its outer (`lexical`) scope. However, the parent cannot inherit the child's scope.

    ```js
    function one() {
      const username = "ikbal";
      function two() {
        const website = "youtube";
        console.log(username); // "ikbal"
      }

      console.log(website); // "undefined"
      // two never exicuted bcz exicution happen line by line and previous line give error
      two();
    }

    one();
    ```
