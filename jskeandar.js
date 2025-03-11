console.log("hello from js");
const a = 12;
const b = 10;

console.log(a + b);

console.log("bye bye");

/*
what will be its output ?
hello from js
22
bye bye

as expected
*/
// do you know there is a function name setTimeout this add some delay to a perticular task.
// it takes fuction as parameter and delay in miliseconds 1 sec = 1000
setTimeout(() => {
  console.log("i am delayed");
}, 5 * 1000);
/*
what will be this code output ?
it will print as before and wait 5sec and print i am delayed,
if i shuffled it with previous console it will still print the same .
*/

/*
i want this timoutfunction run instantly
what will be the output you think?
its same i am delayed comes at the end.
*/
console.log("hello from js");
setTimeout(() => {
  console.log("i am delayed");
}, 0); // make ity zero
console.log("bye bye");

//now lets take a function

const obj = {
  personName: "mukul",
  greet: function () {
    console.log(`hello,${this.personName}`);
  },
};
console.log("hello from js");
setTimeout(obj.greet, 2 * 1000);
console.log("bye bye");

/*
what will be the output ?
hello from js
bye bye
undefined

why its comming undefined when we are providing the current context using this ?
to understand the whole thing we need to understand javascript how it works.
*/
const user = {
  username: "ikbal",
  greet: function () {
    console.log(`hey ${this.username}`);
  },
};

user.greet();


// 