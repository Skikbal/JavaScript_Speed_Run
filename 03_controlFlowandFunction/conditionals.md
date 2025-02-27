# Deep Dive into Conditionals in JavaScript

- These control flow statement allows us to execute difrrent blocks of code based on conditions .

## 1️⃣ if Statement

- This `if` statement execute block of code if specific statement evaluates to `true`.

  ```js
  if (condition) {
    //scope
    // Code executes if condition is true
  }
  ```

- lets take an example

  ```js
  let age = 20;

  if (age >= 18) {
    console.log("You are eligible to vote.");
  }
  ```

- To check conditions we use comparision operators
  ```js
    < // less than operator
    > // grater than operator
    <= // less than equalto operator
    >= // grater than equalto operator
    == // equalsto operator
    === // equalsto operator also check the type
    != // not equalsto operator
  ```
- There is a short-hand notation for `if` statement but its not a good practice.
  ```js
  //short hand notation
  const balance = 1000;
  if (balance > 500) console.log("test"); //implicit scope
  ```

## 2️⃣ if...else Statement

- Here the else block execute when condition is `false`

  ```js
  if (condition) {
    // Code executes if condition is true
  } else {
    // Code executes if condition is false
  }
  ```

- lets understand this by an example

  ```js
  function prepareChai(type) {
    if (type === "Masala Chai") {
      //false
      console.log("Adding spices to the chai");
    } else {
      console.log("Preparing regular chai");
    }
  }

  prepareChai("lemon Chai"); // Preparing regular chai
  ```

## 3️⃣ if...else if...else Statement

- This statement is used when we have to check multiple conditions.
- As soon as one condition is met it will not check the rest pof the condition.

  ```js
  if (condition1) {
    // Code executes if condition1 is true
  } else if (condition2) {
    // Code executes if condition2 is true
  } else {
    // Code executes if none of the conditions are true
  }
  ```

- lets see it with an example

  ```js
  let marks = 85;

  if (marks >= 90) {
    console.log("Grade: A");
  } else if (marks >= 80) {
    console.log("Grade: B");
  } else if (marks >= 70) {
    console.log("Grade: C");
  } else {
    console.log("Grade: F");
  }
  ```

- since mark is > 80 grade b will be true and then javascript stops checking the conditions there.

- conditionals using logical operator

  ```js
  const userLoggedIn = true;
  const debitCard = true;
  const userLoggedInGoogle = false;
  const userLoggedInEmail = true;

  //logical operator
  if (userLoggedIn && debitCard) {
    console.log("allow to buy course");
  }

  if (userLoggedInGoogle || userLoggedInEmail) {
    console.log("user logged in");
  }
  ```

## 4️⃣ switch Statement

- This is the alternative for mutliple if ,else if statement.
- it basically checks the case and values if any match it then execute excatly that case and break to stop the further exicution.
- if no match then it willl run the default.

  ```js
  switch (expression) {
    case value1:
      // Code to execute
      break;
    case value2:
      // Code to execute
      break;
    default:
    // Code to execute if no match
  }
  ```

  -lets see an example

  ```js
  let day = 3;

  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    default:
      console.log("Weekend or Invalid Day");
  }
  ```

- we can use strings also in switch case and best practice is case expects fixed value if we put conditions like > or < it will not work.

## Conditionals use in Array and Objects

```js
const arr = [];

if (arr.length === 0) {
  console.log("array is empty");
}

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("object is empty");
}
```

## Truth and Falsey value

- These are some values which are `falsey` in nature `false` , `0` , `-0` , `Bigint 0n` , `""` , `null` , `undefined` , `NaN`.

  ```js
  const userEmail = "h@hitesh.ai";
  if (userEmail) {
    console.log("got user email");
  } else {
    console.log("dont have email");
  }
  ```

## Nullish Coalescing Operator (??) in JavaScript

- This is a logical operatore `??` which is introduced in ES11 Ecmascript 2020 provides a default value when the left hand side operand is null or undefined.
- Befor `??` we use `||` but it actually treat `0`, `false` and `""` as falsey values and assign default values.

  ```js
  let value = 0;
  let result = value || "Default Value";

  console.log(result); // Output: "Default Value" (Incorrect behavior)
  ```

- how the nullish operator work lets see

  ```js
  let result = value1 ?? value2;
  // If value1 is not null or undefined, it is returned.
  //If value1 is null or undefined, value2 is returned.
  ```

  ```js
  console.log(0 ?? "Default"); // Output: 0  ✅ (Preserved)
  console.log("" ?? "Fallback"); // Output: "" ✅ (Preserved)
  console.log(false ?? "Yes"); // Output: false ✅ (Preserved)
  console.log(null ?? "No Name"); // Output: "No Name" ✅ (Replaced)
  console.log(undefined ?? 100); // Output: 100 ✅ (Replaced)
  ```
