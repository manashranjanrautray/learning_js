/**
 * Scope and Closures explanation and examples in JavaScript
Global Scope
Local Scope
Closure Concept
Closure Examples*/
//Scope defines the accessibility of variables and functions in different parts of the code. 
// In JavaScript, there are three types of scope: global scope, local scope, and block scope.
// Closures are a powerful feature of JavaScript that allow inner functions to access variables from their outer functions even after the outer function has finished executing. 
// This is because closures create a persistent reference to the variables in their outer scope, allowing them to maintain access to those variables even when the outer function is no longer active. 
// Closures are commonly used for data privacy, creating private variables and methods, and implementing functional programming patterns.



// Global Scope
let globalVariable = "I am a global variable";
function globalScopeExample() {
    console.log(globalVariable); // Output: I am a global variable
}
globalScopeExample();
// Local Scope
function localScopeExample() {
    let localVariable = "I am a local variable";
    console.log(localVariable); // Output: I am a local variable
}
localScopeExample();
// Closure Concept
function outerFunction() {
    let outerVariable = "I am an outer variable";
    function innerFunction() {
        console.log(outerVariable); // Output: I am an outer variable
    }
    return innerFunction;
}
let closureExample = outerFunction();
closureExample();// Output: I am an outer variable

// Closure Examples
function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
let increment = counter();
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3
// This code demonstrates the concepts of global scope, local scope, and closures in JavaScript.
// It shows how variables can be accessed within different scopes and how closures allow inner functions to access variables from their outer functions even after the outer function has finished executing. 