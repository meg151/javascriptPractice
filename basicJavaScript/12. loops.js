//Iterate with JavaScript While Loops
//Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
const myArray = [];

// Only change code below this line
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

//Iterate with JavaScript For Loops
//Use a for loop to push the values 1 through 5 onto myArray.
const myArray3 = [];

for (let i = 1; i < 6; i++) {
  myArray3.push(i);
}

console.log(myArray3);

//Iterate Odd Numbers With a For Loop
const myArray4 = [];

for (let i = 1; i < 10; i += 2) {
  myArray4.push(i);
}

//Count Backwards With a For Loop
const myArray5 = [];

for (let i = 9; i > 0; i -= 2) {
  myArray5.push(i);
}

//Iterate Through an Array with a For Loop
//Declare and initialize a variable total to 0.
//Use a for loop to add the value of each element of the myArr array to total.
const myArr = [2, 3, 4, 5, 6];

let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

//Nesting For Loops (again)
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

//Iterate with JavaScript Do...While Loops (again)
var myArray6 = [];
var k = 10;

do {
  myArray.push(k);
  k++;
} while (k <= 10);

//Replace Loops using Recursion
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

//Profile Lookup
function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
