// new examples
// Objectives:
// Export the garageSale array from guided_practice_data.js and the require the data in guided_practice.js.

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
