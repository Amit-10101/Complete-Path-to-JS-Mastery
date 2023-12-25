// Logic and Control Flow

// Truthy and Falsy Values
// Falsy values: false, undefined, null, 0, '', NaN
// Truthy values: all values that are not falsy

console.log('truthy' && 1 && 'test' && 999);
console.log('truthy' && 0 && 'test' && 999);
console.log('truthy' || 1 || 'test' || 999);
console.log('' || 0 || 'test' || 999);
console.log(!0);
console.log(!!0);
console.log(!'truthy');
console.log('\n');

// 1. if / else if / else statements
const age = 18;
if (age >= 18) {
	console.log('You can drive!');
} else if (age === 17) {
	console.log('You can drive next year!');
} else {
	console.log("You can't drive!");
}

// 2. switch statements
const superHero = 'Iron Man';

switch (superHero) {
	case 'Iron Man':
		console.log('I am Iron Man... ');
		break;
	case 'Thor':
		console.log('That is my hammer!');
		break;
	case 'Captain America':
		console.log('Never give up!');
		break;
	case 'Black Widow':
		console.log('One shot, One kill!');
		break;
	default:
		console.log('Enter a valid super hero!');
}
console.log('\n');

// 3. Ternary Operator
// condition ? true : false
const myAge = 18;

myAge >= 18 ? console.log('You can drive!') : console.log("You can't drive!");

console.log('\n');

// 4. Loops
// 4.1 for loop
for (let i = 0; i < 5; i++) {
	console.log(i);
}
console.log('\n');

// 4.2 while loop
let j = 0;
while (j < 5) {
	console.log(j);
	j++;
}
console.log('\n');

// 4.3 do while loop
let k = 0;
do {
	console.log(k);
	k++;
} while (k < 5);

// DRY
// Don't
// Repeat
// Yourself
