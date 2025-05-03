//math.random always returns a number between 0 to 1
const num_math = Math.random();
// console.log(num_math); // 0.04555263292759659

// but if we want to use it to get number between 1 to 9
const num = Math.floor(Math.random() * 10);
// console.log(num) // 1 to 9

//floor
const floorNum = Math.floor(4.8);
// console.log(floorNum); 4
// this will round the number down to the nearest largetst integer less than the given number.

//ceil
const ceilNum = Math.ceil(4.2);
// console.log(ceilNum); //5

// this will round the number up to the nearest largetst integer greater than the given number.

const roundNum = Math.round(4.4);
// console.log(roundNum); //4

// this will round the number up to the nearest integer.

const absNum = Math.abs(-4);
// console.log(absNum); //4
// this method will return the absolute value of the given number.

const maxNum = Math.max(4, 5, 6, 7, 8, 9);
// console.log(maxNum); //9
// this method will return the largest number in the given numbers  elese Infinity if no number is given

const minNum = Math.min(4, 5, 6, 7, 8, 9);
// console.log(minNum); //4
// this method will return the smallest number in the given numbers  elese Infinity if no number is given

const powNum = Math.pow(2, 3);
// console.log(powNum); //8
// this method will return the number raised to the power of the given number.
//𝙼𝚊𝚝𝚑.𝚙𝚘𝚠(𝚡,𝚢)=x^y

const sqrtNum = Math.sqrt(9);
// console.log(sqrtNum); //3
// this method will return the square root of the given number.

const cbrtNum = Math.cbrt(27);
// console.log(cbrtNum); //3
// this method will return the cube root of the given number.

const truncNum = Math.trunc(4.2);
// console.log(truncNum); //4
// this method will return the integer part of the given number.

const pi=Math.PI;
// console.log(pi); //3.141592653589793