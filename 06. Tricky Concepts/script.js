// Tricky Parts

// Global Scope
// Variables declared outside of a function are attached to the window object, and are therefore globally scoped.
const name1 = 'Amit';
const logName = () => {
	console.log(name1); // 'name' is deprecated, as it is a reserved keyword
};
logName();

// Local Scope/Function Scope
// Variables declared inside a function are locally scoped.
const logName2 = () => {
	const name2 = 'Amit';
	console.log(name2);
};
logName2();

// Block Scope
// Variables declared inside a block are block scoped.
// Variables declared with var are function scoped.
// Variables declared with let and const are block scoped.
// Variables declared with let and const are also function scoped.
// Variables declared with var are not block scoped.

if (true) {
	const name3 = 'Amit';
	console.log(name3);
} // name3 is not accessible here
// console.log(name3);

// Hoisting
// Variables and functions (declaration) are hoisted to the top of the scope.
// Variables are initialized with a value of undefined.

var age = 20;
console.log(age); // 20

// 3. Closures
// A function bundled together with its lexical scope forms a closure.

const outer = () => {
	const name4 = 'Amit';
	const inner = () => {
		console.log(name4);
	};
	return inner;
};
const innerFunction = outer();
innerFunction();
