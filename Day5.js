// Find the largest word in the array
function largestWord(str){
  var max = 0;
  var strArray = str.split(" ");
  for (var i = 0; i < strArray.length ; i++){
    if (strArray[i].length > max){
      max = strArray[i].length;
    }
  }
  
  
  return max;
}
console.log(largestWord("The quick brown fox jumped over the lazy dog"));

// Linear Number Search
function verifyNumber(arrays,numberToSearch){
for (var i = 0; i < arrays.length; i++){
  if (numberToSearch == arrays[i]){
    return true;
  }
}
  return false;
}
console.log(verifyNumber([2,4,6,10,12,16,19,21,30],21))

  
