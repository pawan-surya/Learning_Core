let resp = reverseWords("Hello world, this is a test");
console.log(resp)
function reverseWords(str){
  let arr = str.split(" ");
  return arr.reverse().join(" ");
   
}

function reverseWords1(str) {
    let arr = str.trim().split(/\s+/); // Split by one or more spaces
    return arr.reverse().join(" ");
  }
  
  // Example usage
  let resp1 = reverseWords2("  Hello  world, this is  a  test  ");
  console.log(resp); // Output: "test a is this world, Hello"
  

  function reverseWords3(str) {
    let words = [];
    let word = '';
    
    // Traverse the string to extract words
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        // If a space is encountered and word is not empty, push it to words array
        if (word.length > 0) {
          words.push(word);
          word = '';
        }
      } else {
        // Build the current word
        word += str[i];
      }
    }
    
    // Push the last word if there's any left
    if (word.length > 0) {
      words.push(word);
    }
    
    // Construct the reversed string
    let result = '';
    for (let i = words.length - 1; i >= 0; i--) {
      result += words[i];
      if (i > 0) {
        result += ' '; // Add space between words
      }
    }
    
    return result;
  }
  
  // Example usage
  let resp2 = reverseWords("Hello world, this is a test");
  console.log(resp); // Output: "test a is this world, Hello"
  