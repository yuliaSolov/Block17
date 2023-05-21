// Prompt 2:

const coffeeMenu = require("./coffee_data");

const menuItems = coffeeMenu.map((item) => item.name);
console.log(menuItems);

// Prompt 3:

const cheapDrinks = coffeeMenu.filter((item) => item.price <= 5);
const cheapDrinkNames = cheapDrinks.map((item) => item.name);
console.log(cheapDrinkNames);

// Prompt 4:

const evenPricedDrinks = coffeeMenu.filter((item) => item.price % 2 === 0);
const evenPricedDrinkNames = evenPricedDrinks.map((item) => item.name);
console.log(evenPricedDrinkNames);

// Prompt 5:

const total = coffeeMenu.reduce((sum, item) => sum + item.price, 0);
console.log(total);

// Prompt 6:

const seasonalDrinks = coffeeMenu.filter((item) => item.seasonal);
const seasonalDrinkNames = seasonalDrinks.map((item) => item.name);
console.log(seasonalDrinkNames);

// Prompt 7:

const seasonalDrinksWithImportedBeans = seasonalDrinks.map(
  (item) => `${item.name} with imported beans`
);
console.log(seasonalDrinksWithImportedBeans);
