// Arrays
// -ordered collections of values
// -0 based indexing
// -can hold any type of data

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'Octomber',
	'November',
	'December',
];
console.log(months);
console.log(months.length);

for (let i = 0; i < months.length; i++) {
	console.log(months[i]);
}
console.log('\n');

// Array Methods
const names = ['John', 'Peter', 'Bob', 'Maria'];

// 1. Arrray push : add an item to the end of an array
console.log(names.push('Brad')); // 5 - push returns the new length of the array

// 2. Array pop : remove an item from the end of an array
console.log(names.pop()); // Brad - pop returns the item that was removed

// 3. Array shift : remove an item from the beginning of an array
console.log(names.shift()); // John - shift returns the item that was removed

// 4. Array unshift : add an item to the beginning of an array
console.log(names.unshift('John')); // 4 - unshift returns the new length of the array

// 5. Array Splice : remove an item by index position
console.log(names.splice(2, 1, 'Jenny', 'Johnny')); // ['Bob'] - splice returns an array of the removed items
console.log(names);

// 6. Array Slice : copy an array from a start index until an end index
const noOneLikesJonAndMaria = names.slice(1, 4);
console.log(noOneLikesJonAndMaria); // ['Peter', 'Jenny', 'Johnny' ] - slice returns a new array
// Also works with single arguments like slice(1)

// 7. Array forEach : iterate over an array
names.forEach((name, i) => {
	// (values, index) - syntax
	console.log(i, name);
});
// names.forEach((name, i) => console.log(i, name)); // Generally used like this
// forEach always returns undefined, use when you want to do something with each item in the array, BUT NOT when you want to stop or break the loop when some condition is true, also not when working with async code

// or
console.log('\n');
const logTheName = (name, i) => console.log(i, name); 
names.forEach(logTheName);
console.log('\n');

// 8. Array map : iterate over an array and create a new array
// Difference between forEach and map is that map returns a new array, and allocates memory for returning it

const inventory = [
	{ price: 5, name: 'apple' },
	{ price: 4, name: 'banana' },
	{ price: 3, name: 'pear' },
	{ price: 2, name: 'mango' },
	{ price: 1, name: 'grapes' },
];

const prices = inventory.map((item) => item.price);
const items = inventory.map((item) => item.name);
console.log(prices); // [5, 4, 3, 2, 1]
console.log(items); // ['apple', 'banana', 'pear', 'mango', 'grapes']
console.log('\n');

// 9. Array filter : iterate over an array and filter out elements based on a condition
const numbers = [-10, 0, -2, 15, -36, 25];

const positiveNumbers = numbers.filter((number) => {
	return number >= 0;
});

console.log(numbers); // [-10, 0, -2, 15, -36, 25]
console.log(positiveNumbers); // [0, 15, 25]

console.log('\n');
const employeesData = [
	{ name: 'Sebastian', overtime: 5 },
	{ name: 'Cardi Vee', overtime: 10 },
	{ name: 'George Lopez', overtime: 12 },
];

const employeesToReward = employeesData.filter(
	(employee) => employee.overtime >= 7
);
console.log(employeesToReward); // [{ name: 'Cardi Vee', overtime: 10 }, { name: 'George Lopez', overtime: 12 }]
const employeeNames = employeesToReward.map((employee) => employee.name);
console.log(employeeNames); // ['Cardi Vee', 'George Lopez']
console.log('\n');
employeeNames.forEach((name) => console.log(`${name} received a reward`)); // Cardi Vee received a reward, George Lopez received a reward
console.log('\n');

// 10. Array find : find the first element in an array that matches a condition
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const value = nums.find((num) => num > 5);
console.log(value); // 6

const states = ['Alaska', 'California', 'Colorado', 'Hawaii'];
const state = states.find((state) => state.startsWith('C'));
console.log(state); // California
console.log('\n');

// 11. Array includes : check if an array contains a certain element
const array1 = [1, 2, 3];
console.log(array1.includes(2)); // true
console.log(array1.includes(0)); // false
console.log('\n');

// 12. Array Sort : sort the items in an array => alphabetically
const fruits = ['banana', 'apple', 'pear', 'orange'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'orange', 'pear']

const numbers2 = [6, 3, 1, 7, 9, 2];
numbers2.sort();
console.log(numbers2); // [1, 2, 3, 6, 7, 9]

const numbers3 = [6, 3, 1, 7, 71, 19, 2];
numbers3.sort();
console.log(numbers3); // 1, 19, 2, 3, 6, 7, 71

// Ascending order
numbers3.sort((a, b) => a - b);
console.log(numbers3); // 1, 2, 3, 6, 7, 19, 71

// Descending order
numbers3.sort((a, b) => b - a);
console.log(numbers3); // 71, 19, 7, 6, 3, 2, 1
console.log('\n');

// 13. Array Some : check if at least one element in an array matches a condition
const numbers4 = [1, 2, 3, 4, 5];
console.log(numbers4.some((num) => num > 2)); // true
console.log(numbers4.some((num) => num > 5)); // false
console.log('\n');

// 14. Array Every : check if all elements in an array match a condition
const numbers5 = [1, 2, 3, 4, 5];
console.log(numbers5.every((num) => num > 0)); // true
console.log(numbers5.every((num) => num > 2)); // false
console.log('\n');

// 15. Array Reduce : reduce all items in an array to a single value
const groceryList = [29, 12, 45, 35, 87, 110];
console.log(groceryList); // [29, 12, 45, 35, 87, 110]

let total_fE = 0;
groceryList.forEach((price) => (total_fE += price));
console.log(total_fE); // 318

const total = groceryList.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);
// const total = groceryList.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // same as above
console.log(total); // 318
