
// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Output: 15 (Addition)
console.log(a - b); // Output: 5 (Subtraction)
console.log(a * b); // Output: 50 (Multiplication)
console.log(a / b); // Output: 2 (Division)
console.log(a % b); // Output: 0 (Modulus) is used to find the remainder of a division operation.
console.log(a ** b); // Output: 100000 (Exponentiation) 

// Comparison Operators
console.log(a == b); // Output: false (Equal to) checks for value equality but not the type
console.log(a != b); // Output: true (Not equal to) checks for value inequality only but not the type.
console.log(a === b); // Output: false (Strict equal to) checks for value and type equality.
console.log(a !== b); // Output: true (Strict not equal to) checks for value and type inequality.
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

//unary assignment operator
c++; // This is equivalent to c = c + 1
console.log(c); // Output: 11
c+=1; // This is equivalent to c = c + 1
console.log(c); // Output: 12


// Ternary Operator - A shorthand for an if-else statement that returns a value based on a condition.
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.

// Nullish Coalescing Operator (??) - Returns the right-hand operand when the left-hand operand is null or undefined,
// otherwise returns the left-hand operand.
let value = null;
let result = value ?? "default value";
console.log(result); // "default value"

//Optional Chaining (?.) - Allows you to safely access nested properties of an object without having to check if each level of the object exists.
//Example of optional chaining
//Without optional chaining, we would have to check if each level of the object exists before accessing the property
let userWithoutOptionalChaining = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
};
console.log(userWithoutOptionalChaining.address.street); // Output: 123 Main St
//If we try to access a property that does not exist, we will get an error
//console.log(userWithoutOptionalChaining.email.toLowerCase()); // This will cause an error because userWithoutOptionalChaining.email is undefined  
//With optional chaining, we can safely access nested properties without worrying about errors

let user = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
};
console.log(user.address?.street); // Output: 123 Main St
console.log(user.email?.toLowerCase()); // Output: undefined (because user.email is undefined)
