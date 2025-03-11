//promises
/*
we are going to study async await and promises in this vedio.

before taking a dive in to async await we must had to have knowledge of what is synchronous task and what is asynchronous task.
*/

//synchrounous task
let a = 10;
let b = 20;

let result = a + b;

console.log(result);

// what happend here basically this is a synchronous task bcz this will be goin to execute line by line.

//Asynchronous task - when we are trying to fetch data from an API it will must consume some time .
//so these type of data fatching task are not synchronous.These type of Asynchronous task returns a promise.

let resultFromServer = fetch(
  "https://api.freeapi.app/api/v1/public/randomusers"
);
console.log(resultFromServer); // Promise { <pending> }
// This method says that it will take some time actually so i will promise you whenever i ll get the data i will send it to you.
/*
here the method returns a promise which will either resolve or reject.

if i want to wait at the fetch for the result then i can use await which will stop the exicutaion and wait for the result.
To use this await i have to use an asynchronous function 

we stated that dont run it with my original thread run it asynchronously.
*/

async function getData() {
  let resultFromServer = await fetch(
    "https://api.freeapi.app/api/v1/public/randomusers"
  );
  console.log(resultFromServer);
}

getData();
console.log(result);

// here as you can see our code run here in a top to bottom approach and as its an asynchronous function it will print the result then wait for getdata() once its resolve it will return back the result. 
