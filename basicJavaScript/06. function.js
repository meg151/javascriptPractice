//Create a function called reusableFunction which prints the string Hi World to the dev console.
//Call the function.
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

//Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
//Call the function with two numbers as arguments.
function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(1, 5);

//Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
function timesFive(num) {
  return num * 5;
}

console.log(timesFive(5));

//Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
//Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords.
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Global Scope, Local Scope
function myLocalScope() {
  // Only change code below this line
  var myVar;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);

//Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

//Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

//Call the processArg function with an argument of 7 and assign its return value to the variable processed.
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

//Stand in Line (이해못함)
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const removed = arr.shift();
  return removed;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
