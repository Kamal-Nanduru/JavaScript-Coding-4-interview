// Prompt the user for the first number
// var number1 = parseFloat(prompt("Enter the first number:"));
var number1 = 85;

// Prompt the user for the second number
// var number2 = parseFloat(prompt("Enter the second number:"));
var number2 = 869;

console.log("Before swapping:");
console.log("Number 1: " + number1);
console.log("Number 2: " + number2);

// Swap the numbers using a temporary variable
var temp = number1;
number1 = number2;
number2 = temp;

console.log("After swapping:");
console.log("Number 1: " + number1);
console.log("Number 2: " + number2);
