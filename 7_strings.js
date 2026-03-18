/**
 * Strings
Creating Strings
String Properties and Methods - (charAt(), charCodeAt(), toUpperCase(), toLowerCase()
indexOf(), lastIndexOf(), substring(), slice(), substr(), split(), trim(), trimStart(), trimEnd())
String Comparison and Manipulation - ( using === or localeCompare(), Case-Insensitive Comparison, Replacing Substrings (replace())
Concatenating Strings, Modifying Strings
String Conversion Converting to Numbers, Converting to Arrays
 */
// Creating Strings
let str1 = "Hello, World!";
let str2 = 'JavaScript is fun!';
let str3 = `Template literals allow for multi-line strings and interpolation.`;
// String Properties and Methods
let sampleString = "Hello, JavaScript!";
console.log(sampleString.charAt(0)); // Output: H
console.log(sampleString.charCodeAt(0)); // Output: 72
console.log(sampleString.toUpperCase()); // Output: HELLO, JAVASCRIPT!
console.log(sampleString.toLowerCase()); // Output: hello, javascript!
console.log(sampleString.indexOf("JavaScript")); // Output: 7
console.log(sampleString.lastIndexOf("a")); // Output: 15
console.log(sampleString.substring(7, 17)); // Output: JavaScript
console.log(sampleString.slice(7, 17)); // Output: JavaScript
console.log(sampleString.split(",")); // Output: ['Hello', ' JavaScript!']
console.log(sampleString.trim()); // Output: Hello, JavaScript!
console.log(sampleString.trimStart()); // Output: Hello, JavaScript!
console.log(sampleString.trimEnd()); // Output: Hello, JavaScript!
console.log(sampleString.length); // Output: 18
    
// String Comparison and Manipulation
let strA = "Hello";
let strB = "hello";
console.log(strA === strB); // Output: false
console.log(strA.localeCompare(strB)); // Output: -1 (strA comes before strB)
console.log(strA.toLowerCase() === strB.toLowerCase()); // Output: true
let replacedString = sampleString.replace("JavaScript", "World");
console.log(replacedString); // Output: Hello, World!
// Concatenating Strings
let greeting = "Hello";
let name = "Alice";
let message = greeting + ", " + name + "!";
console.log(message); // Output: Hello, Alice!
// Modifying Strings
let originalString = "Hello, World!";
let modifiedString = originalString.replace("World", "JavaScript");
console.log(modifiedString); // Output: Hello, JavaScript!
// String Conversion
let numString = "123";
let num = Number(numString);
console.log(num); // Output: 123
let arrayString = "apple,banana,orange";
let fruitsArray = arrayString.split(",");
console.log(fruitsArray); // Output: ['apple', 'banana', 'orange']
// Note: Strings in JavaScript are immutable, meaning that once a string is created, it cannot be changed. Methods that appear to modify a string actually return a new string.
// This code demonstrates various string operations in JavaScript, including creating strings, using string properties and methods, comparing and manipulating strings, concatenating strings, modifying strings, and converting strings to numbers and arrays.

