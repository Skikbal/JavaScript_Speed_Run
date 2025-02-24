/*
Non-premitive data types are also called Reference data types.These data types are stored and accessed by memory refrence only.unlike primitive its mutable these can be modified.
*/

//Arrays are special objects which store store ordered collection of values
let chaiTypes = ["Masala Chai", "Ginger chai", "Green Tea", "Lemon Tea"];

// console.log(chaiTypes[2]);

// console.log(`Total chai Types: ${chaiTypes.length}`);

chaiTypes.push("Herbal Tea"); //add element at the end of the array
const data = chaiTypes.pop(); //remove the last element in the array
console.log(data); //

//splice and indexOf mthod
let index = chaiTypes.indexOf("Green Tea");
// console.log(index);

//here we write this condition because of indexOf doesnt find any matching element it will return -1
if (index !== -1) {
  chaiTypes.splice(index, 1);
}

// console.log(chaiTypes); //

//itrate over chai and use index+1 for adding serial number
chaiTypes.forEach((chai, index) => {
  console.log(`${index + 1}: ${chai}`);
});

let moreChaiTypes = ["Oolong Tea", "White Tea"];

let allChaiTypes = chaiTypes.concat(moreChaiTypes);

//spread operator
let newChaiTypes = [...chaiTypes, "Chamolina Tea"];
// console.log(newChaiTypes);
// console.log(allChaiTypes);

//objects are the collection of key value pairs
let chaiRecipe = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream Milk",
    sugar: "Brown sugar",
    spices: ["Daalchini", "Ginger"],
  },
  instruction: "Boil water, add tea leaves, milk, sugar and spices",
};

// console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecepie = {
  ...chaiRecipe,
  instruction: "Boil water, add tea leaves, mil, sugar, spices with some love",
};

// Object destructuring - if data type is object we have to use exact keys to destructure it otherwise it will return undefined
let { name, ingredients } = chaiRecipe;
//array destructuring if data type is array
let [firstChai, secondChai] = chaiTypes;

//array is used sequesing here it doesnot matter if you are doing destructuring
//without the same name
console.log(ingredients);
// console.log(secondChai);

//functions are objects in javascript that can be stored in variables and passed as arguments

