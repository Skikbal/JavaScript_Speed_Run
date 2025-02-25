/*
function means what ever code you have written just keep it in a package and then whenever wherever you want to use it you can pickup the package and use it
*/

/*
"
    console.log("I")
    console.log("k")
    console.log("b")
    console.log("a")
    console.log("l")
"
Now if i want to print all this 10 times then i have to manually write it again and again.

insted i can write it in a function whenevr that function will get exicuted that will print it .
*/

//function - keyword
//syamyname - function name
//{} scope of the function or we write function defination here.

function sayMyName() {
  console.log("I");
  console.log("k");
  console.log("b");
  console.log("a");
  console.log("l");
}

// sayMyName - function referance
// if we use () then it will exicute sayMyName()
// sayMyName();
// console.log(sayMyName) // [Function: sayMyName] its just the refrence

// sum of two number
//here num1 & num2 are parameters
function addTwo(num1, num2) {
  return num1 + num2;
}

// when you are returning something from function then only you can store that in any variable like result .
const result = addTwo(4, 3); // these are called arguemnets
// console.log(result)

function loginUser(username = "sam") {
  //assign default value
  return `${username} is loggedin`;
}

// console.log(loginUser("ikbal")) // ikbal is loggedin
// console.log(loginUser("")) // is loggedin
// console.log(loginUser()) //undefined is loggedin

//2nd lect

// let we are calcullating a cart we passed multiple argument in it to get all the values we must use rest operator.
//rest operator gives an array , it packs all the descreet value in apackage or array and give it  to the function.
function calcullateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calcullateCartPrice(200,400,500));

const user = {
  username: "ikbal",
  price: "199",
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "ikbal",
  price: 399,
});

const arr = [1, 2, 3, 4, 5];

function my2ndValue(arr) {
  return arr[1];
}

console.log(my2ndValue(arr));

//scopes
//let,var const

let a = 10;
const b = 10;
var c = 10;

// console.log(a,b,c)

//here everything is going fine then why we are reading about scope because these are not working same when we introduce them with scope {}

var c = 300;
// this is global scope
if (true) {
  let a = 10;
  const b = 10; // this is block scope
  var c = 10;
}

console.log(a); //undefined
console.log(b); //undefined
console.log(c); //10

//here i have defined and allocate memory to these variable inside if block so the scopes of these varibales inside this if block only but if i can access it outside if block then it will create problem.

// let and const returned undefined which is good bcz they are not going out of the scope but var is getting printed.
// try to avoid var always.

let d = 300;
if (true) {
  let d = 50;
  console.log(d); // 50 it look at the block scope
}

console.log(d); // 300 now its in global scope

//lect 2

//nested scopes,clouser

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

// here one is parent and two is child
// for two one's block scope is its global scope
// child can have access of parents scope but parent cant access the scope of child.

//intresting
addone(5);
//hoisted
function addone(val) {
  return val + 1;
}

addTwo(5) // canot access before initialization hoisting not happend
const addTwo = function (num) {
  return num + 2;
};

