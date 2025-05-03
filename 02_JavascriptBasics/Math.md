# Math functions in JS (Built in library)

### Math.random()

```js
const num = Math.random();
console.log(num); // This will return a number between 0 to 1.

//But if you want to modify to get it 0 to 9
const num1 = Math.floor(Math.random() * 10);
console.log(num1);
```

### Math.floor()

```js
const floorNum = Math.floor(4.8);
console.log(floorNum);
// this will round the number down to the nearest largetst integer less than the given number.
```

### Math.ceil()

```js
const ceilNum = Math.ceil(4.2);
console.log(ceilNum); //5
// this will round the number up to the nearest largetst integer greater than the given number.
```

### Math.round()

```js
const roundNum = Math.round(4.4);
console.log(roundNum); //4
// this will round the number up to the nearest integer.
```

### Math.abs()

```js
const absNum = Math.abs(-4);
console.log(absNum); //4
// this method will return the absolute value of the given number.

Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
Math.abs(null); // 0
```

### Math.max()

```js
onst maxNum = Math.max(4, 5, 6, 7, 8, 9);
console.log(maxNum); //9
// this method will return the largest number in the given numbers  elese Infinity if no number is given
```

### Math.min()

```js
const minNum = Math.min(4, 5, 6, 7, 8, 9);
console.log(minNum); //4
// this method will return the smallest number in the given numbers  elese Infinity if no number is given
```

### Math.pow()

```js
const powNum = Math.pow(2, 3);
console.log(powNum); //8
// this method will return the number raised to the power of the given number.
// 𝙼𝚊𝚝𝚑.𝚙𝚘𝚠(𝚡,𝚢)=x^y

//return NAN in this cases
exponent is NaN.
base is NaN and exponent is not 0.
base is ±1 and exponent is ±Infinity.
base < 0 and exponent is not an integer.
```

### Math.sqrt()

```js
const sqrtNum = Math.sqrt(9);
console.log(sqrtNum); //3
// this method will return the square root of the given number.
//The square root of x, a nonnegative number. If x < 0, returns NaN.
```

### Math.cbrt()

```js
const cbrtNum = Math.cbrt(27);
console.log(cbrtNum); //3
// this method will return the cube root of the given number.

Math.cbrt(-Infinity); // -Infinity
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(2); // 1.2599210498948732
Math.cbrt(Infinity); // Infinity
```

### Math.trunc()

```js
const truncNum = Math.trunc(4.2);
console.log(truncNum); //4
// this method will return the integer part of the given number remove the fractional part.
```

### Math.PI

```js
const pi = Math.PI;
console.log(pi); //3.141592653589793
```
