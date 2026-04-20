//Primitive data types in JavaScript include string, number, boolean, null, undefined, symbol, and bigint.
//JavaScript also has a special type called "object" which is used to store collections of data and more complex entities.

// Example of using string type
let firstname = "John Doe";
console.log(typeof(firstname)); // Output: string

// Example of using number type
let age = 30;
console.log(typeof(age));
// Output: number

// Example of using boolean type
let isStudent = true;
console.log(typeof(isStudent)); // Output: boolean

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

// Type conversion, also known as type coercion, is the process of converting a value from one type to another. 
// In JavaScript, type conversion can happen implicitly (automatically by the JavaScript engine) or explicitly (manually by the developer). 
// Here are some examples of both implicit and explicit type conversion in JavaScript:    
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

//In JavaScript, you can also use the parseInt() and parseFloat() functions to convert strings to numbers. The parseInt() function parses a string and returns an integer, while the parseFloat() function parses a string and returns a floating-point number. Here are some examples:
let integerString = "42";
let parsedInteger = parseInt(integerString);
console.log(parsedInteger); // Output: 42, because the string "42" is parsed as an integer using the parseInt() function.
let floatString = "3.14";
let parsedFloat = parseFloat(floatString);
console.log(parsedFloat); // Output: 3.14, because the string "3.14" is parsed as a floating-point number using the parseFloat() function.
// If the string cannot be parsed as a number, both parseInt() and parseFloat() will return NaN.
let invalidIntegerString = "abc";   
let invalidParsedInteger = parseInt(invalidIntegerString);
console.log(invalidParsedInteger); // Output: NaN, because the string "abc" cannot be parsed as an integer using the parseInt() function.
let invalidFloatString = "xyz";
let invalidParsedFloat = parseFloat(invalidFloatString);
console.log(invalidParsedFloat); // Output: NaN, because the string "xyz" cannot be parsed as a floating-point number using the parseFloat() function.  
// In summary, the parseInt() and parseFloat() functions are useful for converting strings to numbers in JavaScript. They will return NaN if the string cannot be parsed as a valid number, so it's important to check for this case when using these functions in your code.
// In addition to the built-in type conversion functions, JavaScript also provides a way to convert values to specific types using the unary plus operator (+). This operator can be used to convert a value to a number. For example:
let stringValue = "123";
let numberValue = +stringValue;
console.log(numberValue); // Output: 123, because the unary plus operator converts the string "123" to a number.
// If the string cannot be converted to a valid number, the unary plus operator will return NaN.
let invalidStringValue = "abc";
let invalidNumberValue = +invalidStringValue;
console.log(invalidNumberValue); // Output: NaN, because the string "abc" cannot be converted to a valid number using the unary plus operator. 
// In summary, the unary plus operator can be used as a shorthand for converting values to numbers in JavaScript. However, it's important to be cautious when using it, as it will return NaN if the value cannot be converted to a valid number.
// In conclusion, understanding data types and type conversion in JavaScript is essential for writing effective and bug-free code. JavaScript has several built-in data types, including primitive types like string, number, boolean, null, undefined, symbol, and bigint, as well as the object type for more complex data structures. Type conversion can happen implicitly or explicitly, and it's important to be aware of how it works to avoid unexpected behavior in your code. By mastering data types and type conversion, you can write more robust and maintainable JavaScript applications.


/**
 * Below are advanced data types in JavaScript that are not as commonly used in everyday programming but are still important to understand. 
 * These include the symbol type and the bigint type, which were introduced in newer versions of JavaScript (ES6 and ES2020, respectively).
 * The symbol type is used to create unique identifiers for object properties, while the bigint type is used to represent integers that are larger than the maximum safe integer in JavaScript (2^53 - 1). However, these types are not commonly used in Playwright or general programming, but it's good to be aware of them for completeness.
 */

// Example of using symbol type but not much used in playwright and also in general programming
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // Output: symbol

//Example of BigInt type (new to ES2020) but not much used in playwright and also in general programming
let bigIntValue = 123n; // The 'n' at the end indicates that this is a BigInt irrespective of its size/length
console.log(typeof bigIntValue); // Output: bigint

// Example of using object type.learn more on this in objects and oops section but just to show you that it is a data type in JavaScript.
let person = {
    name: "Alice",
    age: 25
};
console.log(typeof person); // Output: object  

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

