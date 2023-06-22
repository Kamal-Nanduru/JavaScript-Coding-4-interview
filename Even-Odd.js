// Prompt the user for a number
// var number = parseInt(prompt("Enter a number:"));
var number = 85;

// Check if the number is even or odd
if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else if (number % 2 === 0) {
  console.log(number + " is an even number.");
} else {
  console.log(number + " is an odd number.");
}
