// Prompt the user for a number
var number = parseFloat(prompt("Enter a number:"));

// Check if the number is positive
if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else if (number > 0) {
  console.log("The number is positive.");

  // Check if the number is even or odd
  if (number % 2 === 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
} else {
  console.log("The number is not positive.");
}
