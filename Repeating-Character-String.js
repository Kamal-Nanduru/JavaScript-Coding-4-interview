// Prompt the user for a string
var str = prompt("Enter a string:");

// Prompt the user for a character
var char = prompt("Enter a character to find its repeating count:");

// Function to find the repeating count of a character in a string
function findRepeatingCount(str, char) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }

  return count;
}

// Call the function and display the result
var repeatingCount = findRepeatingCount(str, char);
console.log("The repeating count of '" + char + "' in the string is: " + repeatingCount);
