const applePrice = 0.49;

let pickedApples = 4;

// I went backed and picked more apples
pickedApples += 10;

// I dropped a few
pickedApples -= 4;

const totalForApples = applePrice * pickedApples;

console.log("Cost of Apples", totalForApples);

console.log("Too many apples", pickedApples > 5);

// Eat a few apples and drop the rest cause I am not eating 6 apples back to back
pickedApples -= 6;

console.log("Too many apples", pickedApples > 5);

let rememberRouteHome = false;

console.log("Good to go home", pickedApples >5 && rememberRouteHome);

let haveANap = true;

console.log("Good to go home", rememberRouteHome || haveANap);

console.log("Total for apples a number?", typeof totalForApples);

console.log("String of 5:", typeof String(5), typeof 5);

let myAddress = "413";

//myAddress = 
myAddress += " Peach" + " St";

console.log("My Address:", myAddress)

console.log("Street name has st:", myAddress.toLowerCase().includes("st"));

console.log("My Address", myAddress.replace("St", "Street"));

console.log("ty".length);

let myAge = "76";

myAge = Number(myAge);

myAge += 5 / 12;

console.log("My age", myAge.toFixed(2));

console.log("Next Birthday:", Math.ceil(myAge));

console.log("My favorite NUmber:", Math.round(Math.random() * 100));

