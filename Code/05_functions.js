/**
 * Function Types
 *    Function declaration
 *    Function expression
 *    Arrow functions
 * Parameters
 *    Default params
 *    Rest params
 * Return values
 * Higher-order functions (intro)
 */

// Function declaration - hoisted, can be called before declaration.
// This is also known as named function or function statement or function definition.
// Declaring a function with the function keyword followed by the function name and parameters.
function add(a, b) {
  //return keyword is used to return the result of the addition operation.
  return a + b;
}
// Calling the function
console.log(add(5, 3)); // Output: 8

// Function expression - not hoisted, cannot be called before declaration.
// This is also known as anonymous function or function literal as the function does not have a name but assigned to a variable.
const subtract = function (a, b) {
  return a - b;
};

// Arrow function - not hoisted, cannot be called before declaration.
// It is a shorter syntax for function expression and does not have its own 'this' context.
// This is also known as lambda function or fat arrow function.
const multiply = (a, b) => a * b;

//IIFE (Immediately Invoked Function Expression) - a function that is defined and immediately called.
//This is also anonymous function that is executed immediately after it is defined.
(function () {
  console.log("This is an IIFE!");
})();


// Default parameters - allows you to set default values for parameters if they are not provided.
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
// Rest parameters - allows you to represent an indefinite number of arguments as an array.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Higher-order functions - functions that take other functions as arguments or return functions as their result.
function higherOrderFunction(callback) {
  return function (a, b) {
    return callback(a, b);
  };
}
//add method is passed as a callback to higherOrderFunction, which returns a new function that takes two arguments
// and calls the add function with those arguments.
const addWithHigherOrder = higherOrderFunction(add);
console.log(addWithHigherOrder(5, 3)); // Output: 8

/************Optional************************ */
//Recursion - a function that calls itself in order to solve a problem.
function factorial(n) {
  if (n === 0) { 
    return 1; // Base case: factorial of 0 is 1
  }
  return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}
console.log(factorial(5)); // Output: 120
