# 🚀 JavaScript Array Methods - `map()`, `filter()`, `reduce()`

## 📌 Introduction

- JavaScript provides several built-in methods to manipulate arrays efficiently. Among them, `map()`, `filter()`, and `reduce()` are widely used for functional programming.
- These are basically higher order function.

## 🔹 `map()` Method

- The map() method is used to transform an array.
- This method returns a new array and it doesnot mutate the original array.

  ### Passing a Function as an Argument (Callback Function)

  - Write a transformation function which returns the double of all the value.

  ```js
  const arr = [1, 2, 3, 4, 5];

  // This is a transformation function which will takes x as parameter and returns the double of x.
  function double(x) {
    return x * 2;
  }

  // here we pass double function as argument to the map.
  const output = arr.map(double); // [ 2, 4, 6, 8, 10 ]
  ```

  ### Function Inside Another Function (Nested Function)

  - simalrly we can create a transformation function to findout the binary of values.

  ```js
  const arr = [1, 2, 3, 4, 5];

  /*
  here we pass binary function as argument to the map.
  we can write this higher order function like this also By writing binary function inside map function.
  */
  const output = arr.map(function binary(x) {
    return x.toString(2);
  });
  console.log(output); //[ '1', '10', '11', '100', '101' ]
  ```

  ### Inline Arrow Function (Anonymous Function)

  - create a transformation function to capitalize the first letter in each string inside the array.

  ```js
  const words = ["hello", "world", "javascript", "map"];

  const output = words.map(
    (word) => word.cahrAt(0).toUpperCase() + word.slice(1)
  );
  console.log(output); //[ 'Hello', 'World', 'Javascript', 'Map' ]
  ```

## 🔹 `filter()` Method

- Filter method returns a new array containing only the elements that satisfies the given condition.

  - write filter method for filter all the odd values in the array

    ```js
    const arr = [5, 4, 8, 7, 4, 2];
    const output = arr.filter((x) => x % 2);
    console.log(output); // [ 5, 7 ]
    ```

  - write filter method for filter all the even values in the array
    ```js
    const arr = [5, 4, 8, 7, 4, 2];
    const output = arr.filter((x) => x % 2 === 0);
    console.log(output); // [ 4, 8, 4, 2 ]
    ```

## 🔹 `reduce()` Method

- we used it when we need to itrate over the whole array and need a single value as output.
- it takes 2 parameters accumlator and currentvalue
- current - it always represents the value from the array.
- accumlator - it accumlate the value.
- it takes an initial value if doesnot provided it will consider the first elemnt from the array.

  - sum of all the values in an array

  ```js
  //Non-functional way
  const arr = [1, 4, 6, 8, 4, 78, 96];

  function findSum(arr) {
    let sum = 0; // this is acting as accumlator here
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]; // arr[i] is the current here
    }
    return sum;
  }
  console.log(findSum(arr)); //197
  ```

  ```js
  //using functional method
  const arr = [1, 4, 6, 8, 4, 78, 96];
  const output = arr.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
  console.log(output); //197
  ```

# 🔹 More complecated Examples

- Find max value in an array using reduce method

```js
const arr = [1, 4, 6, 8, 4, 78, 96];
const maxOutput = arr.reduce((max, currVal) => {
  return currVal > max ? (max = currVal) : max;
}, 0); //initialize with 0
console.log(maxOutput); //96
```

```js
const users = [
  { firstName: "ikbal", lastName: "ali", age: 26 },
  { firstName: "Debasmita", lastName: "prusty", age: 26 },
  { firstName: "sabir", lastName: "ali", age: 22 },
  { firstName: "gaytri", lastName: "mohanty", age: 24 },
];
```

### Q) find a list of fullName

- Think about the expected output its like, ["ikbal ali","alex mercer"]

```js
const listOfNames = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log(listOfNames);
//[ 'ikbal ali', 'Debasmita prusty', 'sabir ali', 'gaytri mohanty' ]
```

### Q) find the number of people in age groups

- output = [{22:1},{24:2}]

```js
const ageGroups = users.reduce((ageGroup, user) => {
  if (ageGroup[user.age]) {
    ageGroup[user.age] = ageGroup[user.age] + 1;
    //if accumlator of user age is present then increment it by 1
  } else {
    ageGroup[user.age] = 1;
    // if users age accumlator isnt present already initialize it with 1
  }

  return ageGroup; // return the single value
}, {});
console.log(ageGroups); //{ '22': 1, '24': 1, '26': 2 }
```

### Q) filter first name of all the people whose age is grater than 24

```js
const firstNames = users
  .filter((user) => user.age > 24)
  .map((x) => x.firstName);
//here are we are doing function chaining.
console.log(firstNames); //[ 'ikbal', 'Debasmita' ]
```

### Q) filter first name of all the people whose age is grater than 24 using `reduce()` method.

```js
const firstNames = users.reduce(
  (peopleNames, currUser) =>
  {
    if(currUser.age > 24 ){
      peopleNames.push(currUser.firstName)
    }
    return peopleNames;
    }
  []
);
//here are we are doing function chaining.
console.log(firstNames); //[ 'ikbal', 'Debasmita' ]
```

### Q) Create a report of expenses according to the category

```js
let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

const expenseReport = expenses.reduce((report, expense) => {
  if (report[expense.category]) {
    report[expense.category] += expense.amount;
  } else {
    report[expense.category] = 0 + expense.amount;
  }
  return report;
}, {});
console.log(expenseReport); // { Food: 80, Utilities: 150 }
```

### Q) Give me all the uncompleted task and sort it according to priority

```js
let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

const sortedTasks = tasks
  .filter((task) => task.completed === false)
  .sort((a, b) => a - b); //asscending order
// here are we are performing functional chaining

console.log(sortedTasks);

/*
[
  { description: 'Write report', completed: false, priority: 2 },
  {
    description: 'Prepare presentation',
    completed: false,
    priority: 1
  }
]

*/
```

### Q) findout the avrage movie rating

```js
let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

const avrageRating = movieRatings.map((movie) => {
  const sum = movie.ratings.reduce((acc, cur) => (acc += cur), 0);
  const avg = (sum / movie.ratings.length).toFixed(2);
  /*
  movie.ratings = avg
  return movie
  if i will do like this it will give me same output but it will mutate my original array.
  */
  return { title: movie.title, ratings: avg };
});
console.log(avrageRating);
/*
[
  { title: 'Movie A', ratings: '4.00' },
  { title: 'Movie B', ratings: '4.67' },
  { title: 'Movie C', ratings: '3.00' }
]
*/
```
