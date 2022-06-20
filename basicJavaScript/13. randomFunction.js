//Generate Random Fractions with JavaScript
function randomFraction() {
  let result = 0;
  while (result === 0) {
    result = Math.random();
  }

  return result;
}

//Generate Random Whole Numbers with JavaScript
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  // Only change code below this line.
  return Math.floor(Math.random() * 10);
}

//Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

//Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");

//Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");

//Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);

//Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);

//Use Recursion to Create a Countdown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

//Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
