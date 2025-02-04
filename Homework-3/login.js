const password = "(d0nteatTheScript)"; 

const startsWithASpace = password.startsWith(" ");

const has8OrMoreCharacters = password.length >=8;

const containsTheWordEat = password.includes("eat");

console.log("Password starts with a space:", startsWithASpace);

console.log("Password contains 8 or more characters:", has8OrMoreCharacters);

console.log("Password contains the word eat:", containsTheWordEat);

//I chose to use const with this file because there is nothing we are trying to change, only looking for true and false values.