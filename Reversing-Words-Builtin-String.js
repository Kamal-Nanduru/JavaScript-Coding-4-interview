function reverseWords(sentence) {
    const words = sentence.split(" ");
    const reversedSentence = words.reverse().join(" ");
    return reversedSentence;
  }
  
  const sentence = "Hello, world! This is a sample sentence.";
  const reversed = reverseWords(sentence);
  console.log(reversed);
  