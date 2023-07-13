function reverseWords(sentence) {
    let reversedSentence = "";
    let word = "";
    
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
      
      if (char !== " ") {
        word += char;
      } else {
        if (word) {
          reversedSentence = word + " " + reversedSentence;
          word = "";
        }
      }
    }
    
    if (word) {
      reversedSentence = word + " " + reversedSentence;
    }
    
    return reversedSentence.trim();
  }
  
  // Example usage:
  const sentence = "Hello Kamal See you soon";
  const reversed = reverseWords(sentence);
  console.log(reversed);
  