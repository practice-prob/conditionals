// Is Truthy
// declare a variable input
// if input is false
// print the boolean value false is falsy
// else if input is null
// print the null value is falsy
// else if input is undefined
// print undefined is falsy
// else if the input is 0
// print "The number 0 is falsy (the only falsy number)"
// else if the input is ""
// print "The empty string is falsy (the only falsy string)"
// else print true

// let input = "I am a string";

if (input === false) {
    console.log("The boolean value false is falsy");
} else if (input === null) {
    console.log("The null value is falsy");
} else if (input === undefined) {
    console.log("undefined is falsy");
} else if (input === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
} else if (input === "") {
    console.log("The empty string is falsy (the only falsy string)");
} else {
    console.log(true);
}

// Number Line
// Declare a variable for num1 and num2
// If the sum of two numbers is less than -1000
// Print sum + “is less than -1000”
// If the sum of two numbers is a negative number
// Print sum + “is a negative number”
// If the sum of two numbers is equal to 0
// Print sum + “is equal to 0”
// If the sum of two numbers is greater than 100
// Print sum + “is greater than 100"
// Else, print sum + “is larger than 0"

let num1 = -5;
let num2 = 0;
let sum = num1 + num2;
if (sum < -1000) {
    console.log(sum + " is less than -1000");
} else if (sum < 0) {
    console.log(sum + " is a negative number");
} else if (sum === 0) {
    console.log(sum + " is equal to 0");
} else if (sum > 100) {
    console.log(sum + " is greater than 100");
} else {
    console.log(sum + " is larger than 0");
}

// Greater than 5
// declare two variables called number1 and number2
// if num1 is greater than or equal to 5 and num 2 is greater than or equal to 5, print true
// else, print false

let number1 = 5;
let number2 = 5;
if (number1 >= 5 && number2 >= 5) {
    console.log(true);
} else {
    console.log(false);
}

// Pair and Compare
// Declare variables for param1A, param1B, param2A, param2B
// If param1A is strictly equal to param1B or param2A is strictly equal to param2B, print true
// else, print false
let param1A = "cake";
let param1B = "cake";
let param2A = "pie";
let param2B = "pie";
if (param1A === param1B || param2A === param2B) {
    console.log(true);
} else {
    console.log(false);
}
