// new examples
// Objectives:
// Export the garageSale array from guided_practice_data.js and the require the data in guided_practice.js.
// Introduce Node.js and how it is used in development.
// Understand the purpose of scope in JavaScript.
// Use and explain the purpose of array methods.

// .forEach() calls a function for each element in an array.
// forEach() method is not executed for empty elements.

// .sort() sorts the elements of an array, overwrites the original array,
// sorts the elements as strings in alphabetical and ascending order.

// .map()creates a new array from calling a function for every array element.

// .reduce() The reduce() method executes a reducer function for array element,
// returns a single value: the function's accumulated result.
// method does not execute the function for empty array elements.
// method does not change the original array.

// .filter(): The filter() method creates a new array filled
// with elements that pass a test provided by a function.

/* Scope -> curent context variable and expression can be referenced.
If a variable or expression is not in the scope, it is not available for
use and will return an error.

Scopes have a layered hierarchy.
Childen have access to parerent
variables and expressions;
however, parents do not have
access to their childern's.

function myFunction (){
  Everything inside the curly braces
  is in the context or Scope
if(true){
  This is nested context, and nothing
  outside of it has access to what is inside.
  Everything inside has access to what is "above"
  or outside of it in the surrounsing context.
  } 
}
*/

const garageSale = require("./index_data");

// #3
const arrayOfNames = garageSale.map((object) => object.name);
console.log(arrayOfNames);

// #4
const arrayOfArray = garageSale.map((object) => [object.name, object.price]);
console.log(arrayOfArray);

// #5
const arrayLessThan50 = garageSale.filter((object) => object.price <= 50);
console.log(arrayLessThan50);

// #6
const arrayUsed = garageSale.filter((object) => object.condition === "used");
console.log(arrayUsed);

// #7
const arrayPrices = [];
garageSale.forEach((object) => arrayPrices.push(object.price));
console.log(arrayPrices);

// #8
const totalCost = garageSale.reduce((sum, object) => {
  return sum + object.price;
}, 0);
console.log(totalCost);

// #9
const avg =
  garageSale.reduce((avg, object) => {
    return object.price + avg;
  }, 0) / garageSale.length;
console.log(avg);
