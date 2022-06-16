// Modify the new"" array myArray so that it contains both a string and a number (in that order).
const myArray = ["hello", 1];

//Create a nested array called myArray.
const myArray2 = [["bulls", 23], "White Sox", 45];

//Create a variable called myData and set it to equal the first value of myArray using bracket notation.
const myArray3 = [50, 60, 70];
var myData = myArray3[0];

//Modify the data stored at index 0 of myArray to a value of 45.
const myArray4 = [18, 64, 99];
myArray4[0] = 45;

//Using bracket notation select an element from myArray such that myData is equal to 8.
const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray5[2][1];

// Push ["dog", 3] onto the end of the myArray variable.
const myArray6 = [
  ["John", 23],
  ["cat", 2],
];
myArray6.push(["dog", 3]);

//Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
const myArray7 = [
  ["John", 23],
  ["cat", 2],
];
var removedFromMyArray = myArray7.pop();

//Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
const myArray8 = [
  ["John", 23],
  ["dog", 3],
];
let removedFromMyArray2 = myArray8.shift();

//Add ["Paul", 35] to the beginning of the myArray variable using unshift().
const myArray9 = [
  ["John", 23],
  ["dog", 3],
];
myArray9.shift();
myArray9.unshift(["Paul", 35]);
