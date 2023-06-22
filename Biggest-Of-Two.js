// Prompt the user for the first number
// var number1 = parseFloat(prompt("Enter the first number:"));
var number1 = 52;

// Prompt the user for the second number
// var number2 = parseFloat(prompt("Enter the second number:"));
var number2 = 89;

// Compare the numbers and determine the bigger one
var biggestNumber;

if (isNaN(number1) || isNaN(number2)) {
  console.log("Invalid input. Please enter valid numbers.");
} else if (number1 > number2) {
  biggestNumber = number1;
} else if (number2 > number1) {
  biggestNumber = number2;
} else {
  console.log("The numbers are equal.");
}

if (biggestNumber) {
  console.log("The biggest number is: " + biggestNumber);
}
