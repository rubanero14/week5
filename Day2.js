// Declare function

function sayHello(){
  console.log("Hello");
}

// Call or invoke a function
sayHello();

// Declaring a function with variable
function sayGoodbye(name){
  console.log("Goodbye"+name);
}
sayGoodbye("Ash");
sayGoodbye("Raj");
sayGoodbye("Syamil");

// Function with 2 parameters with result
function sum(a,b){
  return a+b;
}
console.log(sum(2,3));
console.log(sum(4,8));

//Function with result (Example for abstraction)
function checkEven(number){
  if(number % 2 == 0) {
    return true;
  } else{
    return false;
  }
}
console.log(checkEven(4));

// Function with multiple result
function areaVolume(width,length,height){
  return [width * length, width * height * length];
}
console.log(areaVolume(3,4,5));

// Arrays - a collection of items
// I create an array of numbers, which is called scores....
var scores = [50, 60, 70 , 80, 90];
// How many itesm are there in your array
console.log(scores.length);

// Retrieving item number x... 
// An array start with an index 0.. To retrieve the item, you will do scores[index]
console.log(scores[0]);
// Go through array, retrieve the value from array
// Show it in the console...
for (var i = 0; i < scores.length; i++){
  console.log(scores[i]);
}

// Add an item at the end of the array
scores.push(50);
console.log(scores);

// Remove the last item from the array
scores.pop();
console.log(scores);
// Use .splice to remove any part of any item.. eg (index, how many items)
scores.splice(1,1);
console.log(scores);

//Create a minMaxAvg function that will return;(the smallest, the largest number in the array & the average number of all the numbers in the array)
var numberArray =  [3,5,1,9,6,4,2];

function minMaxAvg(arr){
  var average = 0;
  var sum = 0;
  //i assume the first one is the smallest one
  var min =  arr[0];
  var max = arr[0];
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  average = sum / arr.length;

for (var i = 0; i < arr.length ; i++){
  if (arr[i]< min){
    min = arr[i];
  }
} 
  for (var i = 0; i < arr.length ; i++){
    if (arr[i] > max) {
      max = arr[i];
    }
  }
return [min,max,average];
}
document.write(minMaxAvg(numberArray));

// Some important methods
var newString = "Asia Developer Academy";
// 1
console.log(newString.length);
// 2
console.log(newString.toUpperCase());
// 3
console.log(newString.toLowerCase());
// 4
console.log(newString.charAt(6));
// 5
console.log(newString.indexOf('ev'));
// 6
console.log(newString.lastIndexOf('e'));
// 7
console.log(newString.substring(5,14));
// 8 - Transform a string into an array (split word by word)
console.log(newString.split(' '));

// Some important Number method
var number = 1.234;
document.write("<br/>");
document.write(number.toPrecision(2));
document.write("<br/>");
document.write(number.toFixed(2));
console.log(Math.round(number)); // 1  (nearest integer)
console.log(Math.ceil(number)); // 2 
console.log(Math.floor(number)); // 1
document.write("<br/>");
document.write(Math.random());
document.write("<br/>");

// Quiz - Generate random number between 1-100
document.write(Math.ceil(Math.random()*100));
