// Functions
console.log('test');

// Funtion : A BLOCK OF CODE => PERFORMS A TASK

// 1. Function Declaration (defining a function)
function square(number) {
	// console.log("I'm here!");
	return number * number;
}

// 2. Function Call (invoking/calling/executing a function)
const result = square(5);
console.log('Square :', result);

// 3. Function Expression
const square2 = function (number) {
	return number * number;
};

// 4. Arrow Function
const cube = (number) => {
	return number * number * number;
};

// 5. Arrow Function (shorter)
const cube2 = (number) => number * number * number;

// 6. Arrow Function (shortest)
const cube3 = (number) => number * number * number;

// Example
function sayHello(name) {
	console.log('Hello ' + name);
}

sayHello('Amit');

// Every function returns undefined if no return statement is provided

function sum(a, b) {
	return a + b;
}

const answer = sum(1, 2);
console.log(answer);

// Arrow Function
// Does not have its own 'this' keyword
const multiply = (a, b) => {
	return a * b;
};

const answer2 = multiply(2, 3);
console.log(answer2);

// Parameters vs Arguments
// Parameters : used when defining a function
// Arguments : used when calling a function
