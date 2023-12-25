// Operators
// 1. Arithmetic Operators
// +, -, *, /, %, **, ++, --
console.log(5 + 10);
console.log(5 - 10);
console.log(5 * 10);
console.log(5 / 10);
console.log(5 % 10);
console.log(5 ** 10);
console.log('\n');

// Increment and Decrement Operators
let num = 5;
console.log(num++);
console.log(num);
console.log(++num);
console.log(num);

console.log('\n');
console.log(num--);
console.log(num);
console.log(--num);
console.log(num);
console.log('\n');

// 2. Comparison Operators and Equality Operators
// returns a boolean value - true or false
// ==, ===, !=, !==, >, <, >=, <=
console.log(5 == 5);
console.log(5 == '5'); // Type Coercion
console.log(5 === 5); // Strict Equality
console.log(5 === '5');
console.log(5 != 5);
console.log(5 != '5');
console.log(5 !== 5);
console.log(5 !== '5');
console.log(5 > 10);
console.log(5 < 10);
console.log(5 >= 10);
console.log(5 <= 10);
console.log('\n');

console.log('This is a string.' === 'This is a string.'); // true
console.log(2 === 2); // true

console.log(5 == '5'); // true
console.log(20 === '20'); // false

'' == '0'; // false
0 == ''; // true
0 == '0'; // true

false == 'false'; // false
false == '0'; // true

false == undefined; // false
false == null; // false
null == undefined; // true

console.log('\n');

// 3. Logical Operators
// &&, ||, !
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('\n');

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('\n');

console.log(!true);
console.log(!false);
console.log('\n');

// 4. Assignment Operators
// =, +=, -=, *=, /=, %=
let x = 5;
x += 5; // x = x + 5;
console.log(x);
x -= 5; // x = x - 5;
console.log(x);
x *= 5; // x = x * 5;
console.log(x);
x /= 5; // x = x / 5;
console.log(x);
x %= 5; // x = x % 5;
console.log(x);
console.log('\n');

// 5. Bitwise Operators
// &, |, ^, ~, <<, >>
console.log(5 & 1); // 0101 & 0001 = 0001 = 1
console.log(5 | 1); // 0101 | 0001 = 0101 = 5
console.log(5 ^ 1); // 0101 ^ 0001 = 0100 = 4
console.log(~5); // ~0101 = 1010 = -6
console.log(5 << 1); // 0101 << 1 = 1010 = 10
console.log(5 >> 1); // 0101 >> 1 = 0010 = 2
console.log('\n');

// 6. typeof Operator
console.log(typeof 5);
console.log(typeof '5');
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});
console.log(typeof NaN);
console.log('\n');
