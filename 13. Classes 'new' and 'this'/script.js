// Classes 'new' and 'this'

// The 'new' keyword
// It creates a new empty object {}
const person = {}; // empty object
const person1 = new Object(); // empty object

person.firstName = 'Amit';
person1.firstName = 'Amit';

console.log(person); // { firstName: 'Amit' }
console.log(person1); // { firstName: 'Amit' }

// for arrays
const arr = [1, 2, 3];
const arr1 = new Array(1, 2, 3);

console.log(arr); // [1, 2, 3]
console.log(arr1); // [1, 2, 3]

// for Dates
const myDate = new Date();
const DOB = new Date('November 04, 2003');
console.log(myDate); 
console.log(DOB); 
console.log(typeof myDate); // object
console.log(DOB.getFullYear()); // 2003

// Everything in JavaScript is an object
console.log(Array); // [Function: Array]
console.log(Object); // [Function: Object]
console.log(Date); // [Function: Date]
console.log(String); // [Function: String]
console.log(Number); // [Function: Number]
console.log(Boolean); // [Function: Boolean]
console.log(Function); // [Function: Function]

const num = new Number(100.234);
console.log(num.toFixed(0)); // 100
console.log('\n');

// new and [], {}, etc are used all for the same purpose and function, so we don't need to use new keyword, except for special cases like the Date object.

// The 'this' keyword
// It refers to the current object
// It is used to access properties of the current object
function Sentence(words) {
	this.words = words;
	console.log(this);
}
const fristString = new Sentence('Hello, this is a sentence'); 

console.log(this); // refers to the global object

const myself = {
	firstName: 'Amit',
	lastName: 'Kumar',
	getName() {
		console.log(this);
	},
	getFullName() {
		console.log(this.firstName + ' ' + this.lastName);
	},
};
myself.getName(); // the myself object itself
myself.getFullName(); // Amit Kumar

function Car(color, brand, wheels) {
	this.color = color;
	this.brand = brand;
	this.wheels = wheels;

	console.log(this);
}
const blueCar = new Car('blue', 'BMW', 4);
const redCar = new Car('red', 'Ferrari', 4);
console.log(blueCar); // Car { color: 'blue', brand: 'BMW', wheels: 4 }
console.log(redCar); // Car { color: 'red', brand: 'Ferrari', wheels: 4 }
// JavaScript turning more function oriented than object oriented

// Classes
// Classes are special functions
const newPerson = {
	name: 'Melissa',
	age: 24,
	isWorking: true,
};
console.log(newPerson);

// Classes are blueprints for creating objects
// Classes are not hoisted
// Classes are executed in strict mode

// What is Strict Mode?
// Strict mode makes it easier to write "secure" JavaScript.
// Strict mode changes previously accepted "bad syntax" into real errors.
// As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
class Person {
	constructor(name, age, isWorking) {
		this.name = name;
		this.age = age;
		this.isWorking = isWorking;
	}
}

const user = new Person('Amit', 20, false);
console.log(user);

const createPerson = (name, age, isWorking) => {
	return { name, age, isWorking };
};
const user1 = createPerson('Amit', 20, false);
console.log(user1);
