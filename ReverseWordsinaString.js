let resp = reverseWords("Hello world, this is a test");
console.log(resp)
function reverseWords(str){
  let arr = str.split(" ");
  return arr.reverse().join(" ");
   
}

function reverseWords(str) {
    let arr = str.trim().split(/\s+/); // Split by one or more spaces
    return arr.reverse().join(" ");
  }
  
  // Example usage
  let resp1 = reverseWords("  Hello  world, this is  a  test  ");
  console.log(resp); // Output: "test a is this world, Hello"
  