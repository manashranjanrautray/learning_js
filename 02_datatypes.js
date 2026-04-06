// Example of using string type
let firstname = "John Doe";
console.log(typeof firstname); // Output: string

// Example of using number type
let age = 30;
console.log(typeof age);
// Output: number

// Example of using boolean type
let isStudent = true;
console.log(typeof isStudent); // Output: boolean

//Example of using Truthy and Falsy values
let falsyValue = 0; // This is a falsy value
if (falsyValue) {
    console.log("This will not be printed because falsyValue is falsy");
} else {
    console.log("This will be printed because falsyValue is falsy");
}
//list of falsy values in JavaScript: false, 0, -0, 0n (BigInt zero), "", null, undefined, and NaN. 
// All other values are considered truthy.
let truthyValue = "Hello"; // This is a truthy value
if (truthyValue) {
    console.log("This will be printed because truthyValue is truthy");
} else {
    console.log("This will not be printed because truthyValue is truthy");
}


// Example of using null type
let emptyValue = null;
console.log(typeof emptyValue);
// Output: object (this is a known quirk in JavaScript, where typeof null returns "object")

// Example of using undefined type
let undefinedValue; // This variable is declared but not assigned a value, so it is undefined
console.log(typeof undefinedValue); // Output: undefined

// Example of using object type
let person = {
    name: "Alice",
    age: 25
};
console.log(typeof person); // Output: object

// Example of using symbol type
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // Output: symbol

//Example of BigInt type (new to ES2020)
let bigIntValue = 123n; // The 'n' at the end indicates that this is a BigInt irrespective of its size/length
console.log(typeof bigIntValue); // Output: bigint

// JavaScript also has dynamic typing, which means that the type of a variable can change at runtime. For example:
let dynamicVar = "I am a string";
console.log(typeof dynamicVar); // Output: string
dynamicVar = 42; // Now dynamicVar is assigned a number
console.log(typeof dynamicVar); // Output: number

// In JavaScript, you can also use the instanceof operator to check if an object is an instance of a specific class or constructor function. For example:
let date = new Date();
console.log(date instanceof Date); // Output: true
console.log(date instanceof Object); // Output: true, because all objects in JavaScript are instances of Object 
// In summary, JavaScript has several built-in types, and you can use the typeof operator to check the type of a value. Additionally, JavaScript's dynamic typing allows variables to change types at runtime, and the instanceof operator can be used to check if an object is an instance of a specific class or constructor function.

//Special Numbers in JavaScript

// Example of Infinity
let positiveInfinity = Infinity;
console.log(positiveInfinity); // Output: Infinity
let negativeInfinity = -Infinity;
console.log(negativeInfinity); // Output: -Infinity
// Infinity is a special numeric value that represents positive infinity. It is the result of dividing a positive number by zero or any operation that exceeds the maximum representable number in JavaScript.
let divideByZero = 1 / 0;
console.log(divideByZero); // Output: Infinity
let largeNumber = Number.MAX_VALUE * 2;
console.log(largeNumber); // Output: Infinity, because it exceeds the maximum representable number in JavaScript

// Example of NaN (Not-a-Number)
let notANumber = NaN;
console.log(notANumber); // Output: NaN
// NaN is a special value that represents an invalid number. It is the result of undefined or erroneous mathematical operations, such as dividing zero by zero or taking the square root of a negative number.
let invalidOperation = 0 / 0;
console.log(invalidOperation); // Output: NaN
let negativeSqrt = Math.sqrt(-1);
console.log(negativeSqrt); // Output: NaN
// NaN is unique in that it is not equal to itself. This means that if you compare NaN to NaN, it will return false.
console.log(NaN === NaN); // Output: false 
// To check if a value is NaN, you can use the isNaN() function or the Number.isNaN() method. The isNaN() function will return true for any value that cannot be converted to a number, while Number.isNaN() will only return true for values that are actually NaN.
console.log(isNaN("hello")); // Output: true, because "hello" cannot be converted to a number
console.log(isNaN(123)); // Output: false, because 123 can be converted to a number
console.log(Number.isNaN(NaN)); // Output: true, because NaN is the only value that is considered NaN by Number.isNaN() method
console.log(Number.isNaN("hello")); // Output: false, because "hello" is not NaN, even though it cannot be converted to a number
console.log(Number.isNaN(123)); // Output: false, because 123 is not NaN, even though it can be converted to a number

//Explain Type conversion in JavaScript with examples
// Type conversion, also known as type coercion, is the process of converting a value from one type to another. In JavaScript, type conversion can happen implicitly (automatically
//by the JavaScript engine) or explicitly (manually by the developer). Here are some examples of both implicit and explicit type conversion in JavaScript:    
// Implicit type conversion
let implicitString = "The answer is " + 42;
console.log(implicitString); // Output: "The answer is 42", because the number 42 is implicitly converted to a string and concatenated with the other string.
let implicitNumber = "5" * 2;
console.log(implicitNumber); // Output: 10, because the string "5" is implicitly converted to a number and multiplied by 2.
let implicitBoolean = 0 || "Hello";
console.log(implicitBoolean); // Output: "Hello", because 0 is a falsy value, so the || operator returns the second operand, which is "Hello".
// Explicit type conversion
let explicitString = String(123);
console.log(explicitString); // Output: "123", because the number 123 is explicitly converted to a string using the String() function.
let explicitNumber = Number("456");
console.log(explicitNumber);// Output: 456, because the string "456" is explicitly converted to a number using the Number() function.      
let explicitBoolean = Boolean(0);
console.log(explicitBoolean); // Output: false, because the number 0 is explicitly converted to a boolean using the Boolean() function, and 0 is a falsy value. 
// In summary, type conversion in JavaScript can happen implicitly or explicitly, and it allows values to be converted from one type to another. Implicit type conversion is performed automatically by the JavaScript engine, while explicit type conversion is done manually by the developer using functions like String(), Number(), and Boolean(). Understanding how type conversion works can help prevent unexpected behavior in your code and improve its readability.



