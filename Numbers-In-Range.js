var start = 5;
var end = 500;

// Validate the range
if (isNaN(start) || isNaN(end)) {
  console.log("Invalid range. Please enter valid numbers.");
} else if (start > end) {
  console.log("Invalid range. The starting number should be less than or equal to the ending number.");
} else {
  // Print the numbers within the range
  console.log("Numbers in the range " + start + " to " + end + ":");

  for (var i = start; i <= end; i++) {
    console.log(i);
  }
}
