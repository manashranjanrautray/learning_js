/**
 * Functions:
Declaring Functions
Function Parameters and Arguments
Return Statements
 */
// Declaring a function
function greet() {
    console.log("Hello, World!");
}
// Calling the function
greet(); // Output: Hello, World!
// Function with parameters
function greetPerson(name) {
    console.log("Hello, " + name + "!");
}
// Calling the function with an argument
greetPerson("Alice"); // Output: Hello, Alice!
// Function with a return statement
function add(a, b) {
    return a + b;
}
// Calling the function and storing the result
var sum = add(5, 3);
console.log(sum); // Output: 8
// Function with default parameters
function greetWithDefault(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greetWithDefault(); // Output: Hello, Guest!
greetWithDefault("Bob"); // Output: Hello, Bob!
// Function expression
var multiply = function(x, y) {
    return x * y;
};
console.log(multiply(4, 6)); // Output: 24
// Arrow function
var divide = (x, y) => x / y;
console.log(divide(10, 2)); // Output: 5
// Function with multiple parameters
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 3)); // Output: 15
// Function with no parameters and a return value
function getCurrentYear() {
    return new Date().getFullYear();
}
console.log(getCurrentYear()); // Output: Current year
// Function with rest parameters
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10
// Function with a callback
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}
fetchData((data) => {
    console.log("Data received: " + data);
}); // Output after 1 second: Data received: Sample Data
// Function with a default parameter and a return value
function greetWithDefaultAndReturn(name = "Guest") {
    return "Hello, " + name + "!";
}
console.log(greetWithDefaultAndReturn()); // Output: Hello, Guest!
console.log(greetWithDefaultAndReturn("Charlie")); // Output: Hello, Charlie!
//iife (Immediately Invoked Function Expression)
(function() {
    console.log("This function runs immediately!");
})(); // Output: This function runs immediately!

//recursive function with explanation
// Recursive function to calculate factorial
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
}
// Calling the recursive function
console.log(factorial(5)); // Output: 120
/*
In this example, the factorial function calls itself with a smaller value of n until it reaches the base case (n = 0 or n = 1).
The function calculates the factorial of a number by multiplying it with the factorial of the number one less than it, c
creating a chain of function calls that eventually resolves back to the original call.*/






