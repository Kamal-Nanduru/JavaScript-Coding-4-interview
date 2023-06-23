// Prompt the user for a number
var number = parseFloat(prompt("Enter a number:"));

// Check if the number is positive, negative, or zero
if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
