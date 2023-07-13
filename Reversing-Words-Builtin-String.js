const sentence = "Hello, world! This is a sample sentence.";


function a (sentence) {
    const words = sentence.split(" ");
    const x = words.reverse().join(" ");
    return x;
  }
  
  const reversed = a(sentence);
  console.log(reversed);
  