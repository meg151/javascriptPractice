//Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line
}

// Difference btween == and ===
// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//Comparison with the Strict Inequality Operator
3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true

//Comparison with the Greater Than Operator
5 > 3; // true
7 > "3"; // true
2 > 3; // false
"1" > 9; // false

//Comparison with the Greater&Less Than Or Equal To Operator
6 >= 6; // true
7 >= "3"; // true
2 >= 3; // false
"7" >= 9; // false

//Comparisons with the Logical And Operator
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
//Same
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

//Comparisons with the Logical Or Operator
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

//Introducing Else Statements
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

//Introducing Else If Statements
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

//Logical Order in If Else Statements **
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);
