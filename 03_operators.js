/**
 * Operators:
Arithmetic Operators
Comparison Operators
Logical Operators
 */
// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Output: 15 (Addition)
console.log(a - b); // Output: 5 (Subtraction)
console.log(a * b); // Output: 50 (Multiplication)
console.log(a / b); // Output: 2 (Division)
console.log(a % b); // Output: 0 (Modulus)
console.log(a ** b); // Output: 100000 (Exponentiation)
// Comparison Operators
console.log(a == b); // Output: false (Equal to) checks for value equality with type coercion
console.log(a != b); // Output: true (Not equal to) checks for value inequality with type coercion  
console.log(a === b); // Output: false (Strict equal to) checks for value equality without type coercion
console.log(a !== b); // Output: true (Strict not equal to) checks for value inequality without type coercion
console.log(a > b); // Output: true (Greater than) checks if a is greater than b
console.log(a < b); // Output: false (Less than) checks if a is less than b
console.log(a >= b); // Output: true (Greater than or equal to) checks if a is greater than or equal to b
console.log(a <= b); // Output: false (Less than or equal to) checks if a is less than or equal to b
//! operators are used to negate a boolean value, while != and !== are used for inequality comparisons.
//More example of === 
let val1 = 5;
let val2 = "5";
console.log(val1 == val2); // Output: true (Equal to, because it performs type coercion)
console.log(val1 === val2); // Output: false (Strict equal to, because it does not perform type coercion and the types are different)
//type coercion example
let num = 10;
let str = "20";
console.log(num + str); // Output: "1020" (The number 10 is coerced into a string and concatenated with "20")

// Logical Operators
let x = true;
let y = false;
console.log(x && y); // Output: false (Logical AND)
console.log(x || y); // Output: true (Logical OR)
console.log(!x); // Output: false (Logical NOT) 
console.log(!y); // Output: true (Logical NOT) 
// In addition to these basic operators, JavaScript also has other operators such as assignment operators, bitwise operators, and ternary operators, among others. Understanding how to use these operators is essential for writing effective JavaScript code.
// Assignment Operators
let c = 10;
c += 5; // Equivalent to c = c + 5
//bitwise operators - Not commonly used in everyday JavaScript programming, but they perform bitwise operations on binary representations of numbers.
// Ternary Operator - A shorthand for an if-else statement that returns a value based on a condition.
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.

