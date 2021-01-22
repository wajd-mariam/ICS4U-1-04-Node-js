/**
 *
 * This program calculates the time required to heat food 
 * in a microwave.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 *
 * Created on : 2020/11/25
 */
 
// Importing readline to get input:
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  // Declaring Constants and Variables:
  const subCookingTime = 1;
  const pizzaCookingTime = 0.75;
  const soupCookingTime = 1.75;
  var cookingTime;  
  // input
try {
  // Getting Food Type:
  rl.question('What type of food do you want to heat? [sub], [pizza], [soup]:', (foodType) => {
  
  // Getting quantity of food type selected:
  rl.question(`How many ${foodType} do you want to heat?:`, (quantityNumber) => {
  
  // Process and Outputs
  if ((quantityNumber <= 3) && (quantityNumber >= 1)) {
    // Sub Cooking Time:
    if ((foodType == "sub") || (foodType == "Sub") || (foodType == "SUB")) {
       cookingTime = subCookingTime + (0.5 * subCookingTime * (quantityNumber - 1));
       console.log (`Your sub will be reheated in ${cookingTime} minutes.`);
    // Pizza Cooking Time:
    } else if ((foodType == "pizza") || (foodType == "Pizza") || (foodType == "PIZZA")) {
       cookingTime = pizzaCookingTime + (0.5 * pizzaCookingTime * (quantityNumber - 1));
       console.log (`Your pizza will be reheated in ${cookingTime} minutes.`);
    //Soup Cooking Time:
    } else if ((foodType == "soup") || (foodType == "Soup") || (foodType == "SOUP")) {
       cookingTime = soupCookingTime + (0.5 * soupCookingTime * (quantityNumber - 1));
       console.log (`Your soup will be reheated in ${cookingTime} minutes.`);
    }
  }
  rl.close();
  });
  });
} catch(err) {
    console.log (`An error occurred`);
}
