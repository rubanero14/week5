// Largest Adjacent Product
function largestAdjacentProduct(array){
  var max = array[0] * array[1] ;
  for (var i = 0; i < array.length; i++){
    if (array[i]*array[i+1] > max){
      max = array[i] * array[i+1];
    }
  }
  return max;
}
document.write(largestAdjacentProduct([3,6,-2,-5,7,3]));

//Transform Hour to Military Format
function translateMilitary(timeStr){
  if (timeStr.charAt(8) == "A"){
    if (timeStr.substring(0,2) == "12"){
      return "00" + timeStr.substring(2,8);
    } else {
      return timeStr.substring(0,8);
    }
  } else {
    if (timeStr.substring(0,2) == "12"){
     return timeStr.substring(0,8); 
    } else {
      return (parseInt(timeStr.substring(0,2))+12) + timeStr.substring(2,8);
    }
  }
  
}

console.log(translateMilitary("07:45:45AM"));
console.log(translateMilitary("07:45:45PM"));
console.log(translateMilitary("12:45:45AM"));
console.log(translateMilitary("12:45:45PM"));
