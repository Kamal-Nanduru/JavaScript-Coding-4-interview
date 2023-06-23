// Prompt the user for a string
var str = prompt("Enter a string:");

// Function to find the vowels in a string
function findVowels(str) {
  var vowels = "aeiouAEIOU";
  var vowelCount = 0;

  for (var i = 0; i < str.length; i++) {
    var currentChar = str.charAt(i);

    if (vowels.indexOf(currentChar) !== -1) {
      vowelCount++;
    }
  }

  return vowelCount;
}

// Call the function and display the result
var vowelCount = findVowels(str);
console.log("The number of vowels in the string is: " + vowelCount);
