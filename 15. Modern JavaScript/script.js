// Modern JavaScript

// ECMAScript 2015 (ES6 / ES2015/ ECMAScript 6)
// const and let
// - const is used for variables that will not change
// - let is used for variables that will change

// var is the old way of declaring variables, enables you to re initialize variables, not best practice
// var age = 30;
// console.log(age);
// var age = 20;
// console.log(age);
// doesn't give an error, but not best practice
// error if you use let or const

// Arrow Functions

// Default Parameters

// Template Strings `...`

// ES7 / ES2016
// await and async

// IMPORTANT: ES6 and ES7 are not supported in all browsers, so you need to use a compiler to convert your code to ES5

// Babel is a compiler that converts ES6 and ES7 to ES5

// Babel REPL (Read Evaluate Print Loop) - https://babeljs.io/repl/

// Babel CLI (Command Line Interface) - https://babeljs.io/docs/usage/cli/

// Babel Node - https://babeljs.io/docs/usage/cli/#babel-node

// ---------------------------------------------------------------

// IMPORTS AND EXPORTS
// import dogs from './dogs.js';
// for single imports

import { dogs, numberOfDogs } from './dogs.js';
import onlyOneThing from './test.js';
// if there is only one thing you are importing , then any name can be given to it, like import abc from './test.js';, it will still be same as above

console.log(`My dogs are: ${dogs}`);
console.log(`Number of dogs is: ${numberOfDogs}`);
console.log(`Only one thing: ${onlyOneThing}`);

// ---------------------------------------------------------------

// Spread and Rest Operators (...)
// Also called the three dots operator
// Spread operator is used to split up array elements or object properties
// Rest operator is used to merge a list of function arguments into an array
// also introduced in ES6

// const add = (a, b) => {
// 	return a + b;
// };

const add = (...args) => {
	// console.log(args);
	return args.reduce((acc, val) => acc + val, 0);
};

console.log(add(2, 2));
console.log(add(2, 2, 5, 6));
// will ignore the extra arguments, if not for rest operator
// if you want to add more arguments, then you can use the rest operator

// Spread operator
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8];

console.log(numbers);
console.log(...numbers);
console.log(newNumbers);
console.log(...newNumbers);

const object = { name: 'AK', age: 20 };
const object1 = { ...object, name: 'Amit' };

console.log(object); // { name: 'AK', age: 20 }
console.log(object1); // { name: 'Amit', age: 20 }
console.log('\n');

// ---------------------------------------------------------------

// Object Destructuring

// also introduced in ES6
// it means extracting values from objects and storing them in variables

const person = {
	firstName: 'Gary',
	lastName: 'Vee',
	car: {
		color: 'red',
		wheels: 4,
	},
	animals: {
		dog: {
			name: 'Fluffy',
			age: 3,
		},
		cat: {
			name: 'Kitty',
			age: 3,
		},
	},
};

console.log(person);

// DRY - Don't Repeat Yourself
// WET - Write Everything Twice

// const firstName = person.firstName;
// const lastName = person.lastName;
// const color = person.car.color;
// const dogName = person.animals.dog.name;
// const catName = person.animals.cat.name;
// Wrong way of doing it

const {
	firstName,
	lastName,
	car: { color, wheels },
	animals: { dog, cat },
} = person;

console.log(firstName);
console.log(lastName);
console.log(color);
console.log(wheels);
console.log(dog.name);
console.log(cat.name);
console.log('\n');

// Node
const test = (req, res) => {
	const { body, params } = req;
};

// React
const Component = ({ keys, values }) => {
	return;
};

// ---------------------------------------------------------------

// Array Destructuring
const introduction = ['Hello', 'I', 'am', 'AK'];
// const greeting = introduction[0];
// const name = introduction[3];

const [greeting, , , name] = introduction;
// if you don't want to use a value, then you can leave it blank

console.log(greeting, name);
