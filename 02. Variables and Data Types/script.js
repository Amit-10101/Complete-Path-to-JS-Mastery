console.log('Hello World!');

// VARIABLE NAMING RULES
// 1. Cannot start with numbers
// 2. Can start with letter, numbers, _ or $
// 3. Are case sensitive
// 4. Cannot use reserved keywords

// Variable Declaration
var variableName = 'Welcome to Variables!!!';
console.log(variableName);

let var1 = 'Variable using let';
console.log(var1);

const PI = 3.14;
console.log(PI);

// Single Line Comment

/*
Multi
Line
Comment
*/

// Data Types
// 1. String
let name1 = 'Amit.'; // Single quotes
let name2 = 'Amit..'; // Double quotes
let name3 = `Amit...`; // Backticks
let msg = `Hello ${name1}!!!`; // String Interpolation
console.log(name1);
console.log(name2);
console.log(name3);
console.log(msg);

// 2. Number
const num1 = 5;
const num2 = 10;
const result = num1 / num2;
console.log(result);
// NaN - Not a Number, when we try to divide a string by a number

// 3. Boolean
// true or false
const isCool = true;
console.log(isCool);
console.log(typeof isCool);

// 4. Null
let age = null;
console.log(age);
console.log(typeof age);

// 5. Undefined
let city; //let city = undefined; - Not preferred
console.log(city);
console.log(typeof city);

// 6. Objects
const person = {
	name: 'Amit',
	age: 30,
	isCool: true,
};
console.log(person);
console.log(typeof person);
console.log(person.name); // Dot Notation

// 7. Arrays
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);

// 8. Date
const date = new Date();
console.log(date);
console.log(typeof date);

// Statically Typed Language
// Java, C#, C++, Kotlin, Swift

// Dynamically Typed Language
// *JavaScript*, Python, Ruby, PHP, Go, R, Perl

// Difference between Statically Typed and Dynamically Typed Language
// In Statically Typed Language, we need to declare the type of variable
// In Dynamically Typed Language, we don't need to declare the type of variable