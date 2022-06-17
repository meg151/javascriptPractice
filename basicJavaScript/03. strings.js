//Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
const myStr = 'I am a "double quoted" string inside "double quotes".'; // Change this line

//Change the provided string to a string with single quotes at the beginning and end and no escape characters.
var myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

//Assign the following three lines of text into the single variable myStr using escape sequences.

// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	word boundary
// \f	form feed

//Build myStr from the strings This is the start. and This is the end.
//using the + operator. Be sure to include a space between the two strings.
const myStr2 = "This is the start." + "This is the end.";

// Build myStr over several lines by concatenating these two strings:
// This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar
// to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr,
// then add on the second string.
let myStr3 = "This is the first sentence.";
myStr3 += "This is the second sentence.";

//Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!
const myName = "min gyeong eun";
const myStr4 = "Hello, my name is" + myName + "and I am Well!";

//Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
const someAdjective = "beautyful";
let myStr5 = "Learning to code is ";
myStr5 += someAdjective;

//Use the .length property to set lastNameLength to the number of characters in lastName.
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

//Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
// Setup
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName2[0]; // Change this line

//Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.
let myStr6 = "Jello World";
myStr6 = "Hello World";

//Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
// Setup
const lastName3 = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2];

//Use bracket notation to find the last character in the lastName variable.
// Setup
const lastName4 = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1];

//Use bracket notation to find the second-to-last character in the lastName string.
// Setup
const lastName5 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
