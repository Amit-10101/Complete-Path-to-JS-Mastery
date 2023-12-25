# Complete-Path-to-JS-Mastery 🚀

🌟 These are the notes and codes for Complete Path to JS Mastery (JavaScript) course which covers the core concepts of JavaScript, from the basics to the advanced topics. Hope you like it! 💻

## 01 - Introduction to the Course

📚 **Overview:**

-   Understand the importance of JavaScript in web development.
-   Learn about its role in both front-end and back-end development.

## 02 - Variables and Data Types

```javascript
// Declaration and initialization of variables
let age = 25;

// Various data types like strings, numbers, and booleans
let name = 'John';
let height = 180.5;
let isStudent = true;
```

## 03 - Operators

```javascript
// Arithmetic operators
let sum = 5 + 3;

// Comparison operators
let isEqual = 10 === 10;

// Logical operators
let andResult = true && false;
```

## 04 - Logic and Control Flow

```javascript
// Conditional statements
if (condition) {
	// code block executed if the condition is true
} else {
	// code block executed if the condition is false
}

// Loops
for (let i = 0; i < 5; i++) {
	// code block executed in each iteration
}
```

## 05 - Functions

```javascript
// Function declaration
function greet(name) {
	return `Hello, ${name}!`;
}

// Function invocation
let greeting = greet('Alice');
console.log(greeting);
```

## 06 - Tricky Concepts

```javascript
// Delve into challenging JavaScript concepts
// Gain confidence in handling complex scenarios
```

## 07 - Strings in Detail

```javascript
// String methods
let message = 'Hello, World!';
let length = message.length;
let upperCase = message.toUpperCase();
```

## 08 - Arrays in Detail

```javascript
// Array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((num) => num * 2);
```

## 10 - Objects in Detail

```javascript
// Object creation
let person = {
	name: 'John',
	age: 30,
	greet: function () {
		console.log(`Hello, my name is ${this.name}.`);
	},
};
```

## 11 - Value vs. Reference

```javascript
// Value types vs. reference types
let x = 10;
let y = x;
x = 20; // y remains 10

let obj1 = { value: 10 };
let obj2 = obj1;
obj1.value = 20; // obj2.value also becomes 20
```

## 12 - DOM (Document Object Model)

```javascript
// DOM manipulation
let element = document.getElementById('myElement');
element.innerHTML = 'New content';
```

## 13 - Classes, New, and This

```javascript
// ES6 classes
class Person {
	constructor(name) {
		this.name = name;
	}
	greet() {
		console.log(`Hello, my name is ${this.name}.`);
	}
}

let john = new Person('John');
john.greet();
```

## 14 - Asynchronous JavaScript

```javascript
// Asynchronous programming with Promises
function fetchData() {
	return new Promise((resolve, reject) => {
		// asynchronous task
		if (success) {
			resolve(data);
		} else {
			reject(error);
		}
	});
}
```

## 15 - Modern JavaScript

```javascript
// ECMAScript 6 features
const arrowFunction = (param) => param * 2;

// Embrace the latest JavaScript practices
```

Feel free to explore each section. Happy coding! 🚀🌈
