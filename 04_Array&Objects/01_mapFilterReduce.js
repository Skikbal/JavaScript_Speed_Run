/* map,filter& reduce are higher order function */

//map function is used to transform an array
const arr = [1, 2, 3, 4, 5];

/*
The double function takes an value and return the double of it,
this is a tranformation function and we pass it inisde the map.
*/

function double(x) {
  return x * 2;
}

/* 
Tranformatio function for binary
function binary(x) {
  return x.toString(2);
}
const output = arr.map(binary);
console.log(output);

but we can write this higher order function like this also.

const output = arr.map(function binary(x) {
   return x.toString(2);
 });
*/


// const output = arr.map((x) => {
//   return x.toString(2);
// });

// console.log(output,arr);   //[ '1', '10', '11', '100', '101' ],[ 1, 2, 3, 4, 5 ]

//map always return a new array doesnt mutate the original array.

//filter function
/*
This function basically used filter by taking a call back function and return a new array with elements met the condition else empty array.
*/

const filArr = [5, 4, 8, 7, 4, 2];

//filter odd values

function isOdd(x) {
  return x % 2; // This return boolean true and false
}

// const filOutput = filArr.filter(isOdd)
const filOutput = filArr.filter(function isEven(x) {
  return x % 2 === 0; // This return boolean true and false
});
// console.log(filOutput);

//reduce
// we use it where we need to itrate over the array but come up with a single value as output.

const redArr = [5, 4, 8, 7, 4, 2];

// sum or max

// no functional way

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += redArr[i];
  }
  return sum;
}

// console.log(findSum(redArr));

/*
here what this reduce do ?
itrate the function upon each and every element of array

2nd param/curr- it represents  the values from the array
1st param/acc - it accumlate the values
it should initoialize with an initial value
*/
const redOutput = redArr.reduce(function (acc, curr) {
  return (acc += curr);
}, 0);

//find max
const maxOutput = redArr.reduce(function (max, val) {
  return val > max ? (max = val) : max;
});
// console.log(maxOutput);

// more complcated examples
const users = [
  { firstName: "ikbal", lastName: "ali", age: 26 },
  { firstName: "Debasmita", lastName: "prusty", age: 26 },
  { firstName: "sabir", lastName: "ali", age: 22 },
  { firstName: "gaytri", lastName: "mohanty", age: 24 },
];

// findout list of full name

const allNames = users.map((user) => user.firstName + " " + user.lastName);
// console.log(allNames);

//findout people with age
const findPeopleAge = users.reduce((count, user) => {
  if (count[user.age]) {
    count[user.age] = ++count[user.age];
  } else {
    count[user.age] = 1;
  }
  return count;
}, {});
// console.log(findPeopleAge);

//filter first name of all the people whose age is less than 24

const peopleNames = users
  .filter((user) => {
    return user.age <= 24;
  })
  .map((x) => x.firstName);

const reducePeopleName = users.reduce((names, user) => {
  if (user.age <= 24) {
    names.push(user.firstName);
  }
  return names;
}, []);
console.log(reducePeopleName);
