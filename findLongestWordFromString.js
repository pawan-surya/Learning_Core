let resp = longestWord("The quick brown fox jumped over the lazy dog"); 
console.log(resp)
function longestWord(str){
   str = str.trim().toLowerCase();
   let arr = [""];
   let j = 0;
   for(i=0;i<=str.length-1;i++){
       if(str[i] == ' '){
        j++;
        arr.push('')
       }else {
        arr[j] +=  str[i]
       }
   }
   let n = arr.length -1;
 let longest = arr[0];
       for (let word of arr) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    console.log(longest)
   
  for (i = 0; i < n-1; i++){
   let minIndex = i;
   // Find the minimum element in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j].length > arr[minIndex].length){
            minIndex = j;
            }
         }
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    }
  return arr[0];
}
