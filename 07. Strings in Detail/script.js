// Strings
const single = 'This is a string';
const double = 'This is also a string';
const backticks = `This is yet another string`;
console.log(single);
console.log(double);
console.log(backticks);

const rows = `1
2
3`; // This is a template literal
console.log(rows);

// String Length
const myName = `Amit`;
console.log(myName); // Amit
console.log(myName.length); // 4

// UPPERCASE and lowercase Strings
const str = `This is a string`;
const lower = str.toLowerCase();
const upper = str.toUpperCase();
console.log(lower); // this is a string
console.log(upper); // THIS IS A STRING

// Searching for a Substring
const hobbies = `I love HTML, CSS, JavaScript, React, NextJS, and NodeJS`;

// indexOf
console.log(hobbies.indexOf(`JavaScript`));  // 22
console.log(hobbies.indexOf(`JavaScript`, 22)); // 22
console.log(hobbies.indexOf(`MongoDB`)); // -1
console.log(`\n`);

// includes
console.log(hobbies.includes(`JavaScript`)); // true
console.log(hobbies.includes(`JavaScript`, 22)); // true
console.log(hobbies.includes(`MongoDB`)); // false
console.log(`\n`);

// startsWith
console.log(hobbies.startsWith(`I love`)); // true
console.log(hobbies.startsWith(`love`)); // false
// endsWith
console.log(hobbies.endsWith(`NodeJS`)); // false
console.log(hobbies.endsWith(`NodeJS.`)); // true
console.log(`\n`);

// Getting a Substring
const exampleString = 'hotdog';
console.log(exampleString.slice(3)); // dog
console.log(exampleString.slice(3, 6)); // dog

// Split a String
const eg = 'dog';
const sentence = 'The quick brown fox jumps over the lazy dog.';
// split()
console.log(eg.split('')); // ["d", "o", "g"] - returns an array
console.log(sentence.split(' ')); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

// Reverse a String
const str1 = 'Hello World!';
console.log(str1);
console.log(str1.split('').reverse().join('')); // !dlroW olleH

// Repeat a String
const str2 = 'Hello World!';
console.log(str2.repeat(2)); // Hello World!Hello World!

// trim()
const str3 = '   Hello, World!   ';
console.log(str3.trim()); // Hello, World!

// Execrise
const guestList = 'Our guests are: Emma, Isabella, Jane, Gwen';

// 1. Length of the string
const length = guestList.length;
console.log(length);

// 2. Uppercase the string
const upperCasedGuestList = guestList.toUpperCase();
console.log(upperCasedGuestList);

// 3. Check whether 'GWEN' is on the upperCasedGuestList
const isGwenOnTheList = upperCasedGuestList.includes('GWEN');
console.log(isGwenOnTheList);

// 4. Create a substring that contains only the guest names
const ind = guestList.indexOf('Emma');
const substr = guestList.slice(ind); 
console.log(substr);

// 5. Create an array of the guest names
const guests = substr.split(', ');
console.log(guests);
