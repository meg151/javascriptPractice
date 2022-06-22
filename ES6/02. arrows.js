//Use Arrow Functions to Write Concise Anonymous Functions
var magic = function () {
  return new Date();
};

const magic = () => new Date();

//Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;

//Use the Rest Parameter with Function Parameters
const sum1 = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};

const sum2 = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

//Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

//Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line

//Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES2 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today: hightToday, tomorrow: highTomorrw } = HIGH_TEMPERATURES2;

// Only change code above this line
//Use Destructuring Assignment to Assign Variables from Arrays => 뭔말이지
