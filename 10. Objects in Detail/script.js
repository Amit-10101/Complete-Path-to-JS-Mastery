// Objects in Detail\
// Objects : an unordered collection of related data in the form of key : value pairs

const person = {
	firstName: 'Amit',
	lastName: 'Kumar',
	age: 20,
	car: {
		name: 'BMW',
		model: 'X5',
		color: 'White',
		price: 1000000,
	},
};
console.log(person);

// If key and value are same, we can omit the value, like let firstName = 'Amit' can be written as let firstName = firstName, after omiting the value, it will be only firstName.

// Accessing, Adding and Updating Properties of an Object
// DOT NOTATION
console.log(person.firstName);

person.hobbies = {
	professional: 'Coding',
	weeb: ['Gaming', 'Anime', 'Manga', 'Light Novel'],
};
console.log(person.hobbies.professional);

// SQUARE BRACKET NOTATION
// can be used to access properties dynamically
const property = 'age';
console.log(person[property]);
// does not work with dot notation
console.log('\n');

// Object Methods
// Methods are functions that are stored as object properties
const dog = {
	name: 'Fluffy',
	age: 2,
	bark: () => {
		console.log('Woof! Woof!');
	},
	listAllProperties: function () {
		// this keyword refers to the object it belongs to
		// doesn't work with arrow functions
		console.log(this.name, this.age); // Fluffy 2
	},
};
dog.bark(); // Woof! Woof!
dog.listAllProperties(); // Fluffy 2
console.log('\n');

// Built-in Object Methods

// 1. Object.keys() returns an array of a given object's own enumerable property names
const company = {
	boss: 'Amit',
	secretary: 'Gwen',
	sales: 'Jim',
	accountant: 'Stan',
	developer: 'Oscar',
};
const positions = Object.keys(company);
console.log(positions); // ["boss", "secretary", "sales", "accountant", "developer"]

// 2. Object.values() returns an array of a given object's own enumerable property values
const session = {
	id: 1,
	time: `26-July-2021`,
	device: `Mobile`,
	browser: `Chrome`,
};
const sessionInfo = Object.values(session);
console.log(sessionInfo); // [1, "26-July-2021", "Mobile", "Chrome"]

// 3. Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs
const operatingSystem = {
	name: 'Ubuntu',
	version: 18.04,
	license: 'Open Source',
};
const entries = Object.entries(operatingSystem);
console.log(entries); // [["name", "Ubuntu"], ["version", 18.04], ["license", "Open Source"]]

// Loop through the results
entries.forEach((entry) => {
	let key = entry[0];
	let value = entry[1];
	console.log(`${key}: ${value}`); // name: Ubuntu version: 18.04 license: Open Source
});

// 4. Object.freeze() freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed, it also prevents the prototype from being changed.
const user = {
	username: 'AzureDiamond',
	password: 'hunter2',
};

const admin = Object.freeze(user);

admin.username = 'test';
admin.password = '123456';
console.log(admin); // {username: "AzureDiamond", password: "hunter2"}

// 5. Object.seal() seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
const user1 = {
	username: 'AzureDiamond',
	password: 'hunter2',
};
const newUser = Object.seal(user1);
newUser.username = 'test';
newUser.active = true;

console.log(newUser); // {username: "test", password: "hunter2"}
