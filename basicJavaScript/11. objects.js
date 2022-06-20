//Build JavaScript Objects
//Objects are similar to arrays, except that instead of using indexes to access and modify their data,
//you access the data in objects through what are called properties.
const myDog = {
  // Only change code below this line
  name: "Daniel",
  legs: 4,
  tails: 1,
  friends: ["orlando", "hewson"],
};

//Accessing Object Properties with Dot Notation
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

const hatValue = testObj.hat;

//Accessing Object Properties with Bracket Notation
const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

const entreeValue = testObj2["an entree"];
const drinkValue = testObj2["the drink"];

//Accessing Object Properties with Variables
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

const playerNumber = 16;
const player = testObj3[playerNumber];

//Do it again
const someObj = {
  propName: "John",
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);

//Updating Object Properties
const myDog2 = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog2.name = "Happy Coder";
myDog2["name"] = "Happy Coder";

//Add New Properties to a JavaScript Object
const myDog3 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog.bark = "woof";

//Delete Properties from a JavaScript Object
const myDog4 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

delete myDog4.tails;

//Using Objects for Lookups
function phoneticLookup(val) {
  let result = "";
  let lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];
  // Only change code above this line
  return result;
}

//Testing Objects for Properties
//.hasOwnProperty(propname)
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
    // Only change code above this line
  }
}

//Manipulating Complex Objects
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  }, //add more datas
  {
    artist: "deep",
    title: "title",
    release_year: 1992,
    formats: ["CD", "Cassette,"],
  },
];

//Accessing Nested Objects
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];

//Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

// Record Collection Do it again
