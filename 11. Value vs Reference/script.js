// Value vs Reference

// Primitive values : (Number, String, Boolean...)
// Complex values : (Object, Array)

let firstPerson = 'Mark';
let secondPerson = firstPerson;

firstPerson = 'Austin';

console.log(firstPerson); // Austin
console.log(secondPerson); // Mark

console.log('\n');

const animals = ['cat', 'dog'];
const otherAnimals = animals;

console.log(animals === otherAnimals); // true

animals.push('llamas');

console.log(animals); // ['cat', 'dog', 'llamas']
console.log(otherAnimals); // ['cat', 'dog'] : expected, [ 'cat', 'dog', 'llamas'] : actual

// Why is this happening?
// Because when we assign a primitive value to a variable, the value is copied.
// But when we assign a complex value to a variable, the reference is copied.(Same memory address as in pointer)
// So, when we change the value of the complex value, the value of the variable is also changed.
// This is called mutation.

// animals and otherAnimals are pointing to the same memory address.

const animals1 = ['cat', 'dog']; // 123asd
const otherAnimals1 = ['cat', 'dog']; // 3321dsa

console.log(animals1 === otherAnimals1); // false
console.log('\n');

// Cloning Arrays
// 1st way: Spread Operator
const numbers = [1, 2, 3, 4, 5]; // 123asd
const copiedNumbers = numbers; // 123asd
const newNumbers = [...numbers]; // 321dsa

numbers.push(6);

console.log(copiedNumbers === numbers); // true
console.log(newNumbers === numbers); // false

console.log(numbers); // [1, 2, 3, 4, 5, 6]
console.log(copiedNumbers); // [1, 2, 3, 4, 5, 6]
console.log(newNumbers); // [1, 2, 3, 4, 5]

// 2nd way: Slice Method
const numbers1 = [1, 2, 3, 4, 5]; // 123asd
const newNumbers1 = numbers1.slice(); // 321dsa

numbers1.push(6);

console.log(numbers1); // [1, 2, 3, 4, 5, 6]
console.log(newNumbers1); // [1, 2, 3, 4, 5]
console.log('\n');

// Cloning Objects
// 1st way: Spread Operator
const person = {
	name: 'Mark',
	age: 20,
};
const otherPerson = { ...person };

person.age = 22;

console.log(person); // { name: 'Mark', age: 22 }
console.log(otherPerson); // { name: 'Mark', age: 20 }

// 2nd way: Object.assign()
const person1 = {
	name: 'Mark',
	age: 20,
};
const otherPerson1 = Object.assign({}, person1);
// Assign the properties of person1 to an empty object.

person1.age = 22;

console.log(person1); // { name: 'Mark', age: 22 }
console.log(otherPerson1); // { name: 'Mark', age: 20 }
console.log('\n');

// Deep Cloning
// Difference between shallow cloning and deep cloning is that
// shallow cloning only clones the first level of the object.
// But deep cloning clones the whole object.
const nextPerson = {
	firstName: 'Emma',
	car: {
		brand: 'BMW',
		color: 'blue',
		wheels: 4,
	},
};

const newPerson = { ...nextPerson };

nextPerson.car.color = 'red';

console.log(nextPerson); // { firstName: 'Emma', car: { brand: 'BMW', color: 'red', wheels: 4 } }
console.log(newPerson); // { firstName: 'Emma', car: { brand: 'BMW', color: 'red', wheels: 4 } }

// The color of the car in newPerson is also changed.
// Because the car object is not cloned, only the reference is copied.
// So, both nextPerson and newPerson are pointing to the same car object.
// This is called shallow cloning.

// Deep cloning
const nextPerson1 = {
	firstName: 'Emma',
	car: {
		brand: 'BMW',
		color: 'blue',
		wheels: 4,
	},
};

const newPerson1 = { ...nextPerson1, car: { ...nextPerson1.car } };

nextPerson1.car.color = 'red';

console.log(nextPerson1); // { firstName: 'Emma', car: { brand: 'BMW', color: 'red', wheels: 4 } }
console.log(newPerson1); // { firstName: 'Emma', car: { brand: 'BMW', color: 'blue', wheels: 4 } }
console.log('\n');

// The color of the car in newPerson1 is not changed.
// But this is not a good way to deep clone an object. Because if the object is very complex,
// we have to clone every property of the object.

// Deep cloning using JSON
const human = {
	firstName: 'Emma',
	car: {
		brand: 'BMW',
		color: 'blue',
		wheels: 4,
	},
};

const stringifiedHuman = JSON.stringify(human);
const newHuman = JSON.parse(stringifiedHuman);
// const newHuman = JSON.parse(JSON.stringify(human)); // This is also same as above.

newHuman.firstName = 'Mia';
newHuman.car.color = 'red';

console.log(human);
console.log(newHuman);
