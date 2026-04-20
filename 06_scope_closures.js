/**
 * Hoisting
 * Global Scope
 * Function Scope
 * Block Scope
 * Lexical Scope
 * Closures
 */

//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.
//This means that you can use variables and functions before they are declared in the code, but it can lead to unexpected behavior if not used carefully.

console.log(hoistedVar); // Output: undefined (due to hoisting, the declaration is moved to the top but not the assignment)
var hoistedVar = "I am hoisted";


//Global scope is the outermost scope in JavaScript. 
// Variables declared in the global scope i.e. on file level are accessible from anywhere in the code, including inside functions and blocks.
//Global scope is applicable to variables declared with var, let, and const.
var globalVar = "I am a global variable";
let globalLet = "I am also a global variable";
const globalConst = "I am a global constant";

function exampleFunction() {
    //Function scope is the scope created by a function. 
    // Variables declared within a function are only accessible within that function and its nested functions.
    //Function scope is applicable to variables declared with var, let, and const.
    // Although var is function-scoped, let and const are block-scoped, 
    // meaning they are only accessible within the block they are defined in (e.g., inside an if statement or a loop).

    var functionVar = "I am a function variable";
    let functionLet = "I am also a function variable";
    const functionConst = "I am a function constant";
    console.log(globalVar); // Accessible due to global scope
    console.log(globalLet); // Accessible due to global scope
    console.log(globalConst); // Accessible due to global scope
    console.log(functionVar); // Accessible due to function scope
    console.log(functionLet); // Accessible due to block scope within the function
    console.log(functionConst); // Accessible due to block scope within the function
}

exampleFunction(); 

console.log(globalVar); // Accessible due to global scope
console.log(globalLet); // Accessible due to global scope   
console.log(globalConst); // Accessible due to global scope
console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined and also due to function scope
console.log(functionLet); // Uncaught ReferenceError: functionLet is not defined and also due to block scope within the function   
console.log(functionConst); // Uncaught ReferenceError: functionConst is not defined and also due to block scope within the function


//Block scope
if (true) {
    var blockVar = "I am a block var";
    let blockLet = "I am a block let";
    const blockConst = "I am a block constant";
    console.log(blockVar); // Accessible due to var's function scope and since if block is not a function, blockVar is accessible within the block
    console.log(blockLet); // Accessible due to block scope
    console.log(blockConst); // Accessible due to block scope
}
console.log(blockVar); // Accessible due to var's function scope and since if block is not a function, blockVar is accessible outside the block
console.log(blockLet); // Uncaught ReferenceError: blockLet is not defined
console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined
//In summary, 'var' has function scope and is hoisted, while 'let' and 'const' have block scope and are not hoisted.
// It's important to understand these differences to avoid bugs and write clean code.
// Always use 'let' and 'const' for better readability and maintainability of your code.

//lexical scope and closures
//Lexical scope means that the scope of a variable is determined by its position in the source code explained as above and also that inner functions have access to the variables of their outer functions.
//A closure is a function that has access to its own scope, the outer function's scope, and the global scope. 
//Closures are created whenever a function is created, and they allow functions to access variables from an enclosing scope even after that scope has finished executing.

function outerFunction() {
    let outerVar = "I am an outer variable";// This variable is in the scope of outerFunction and will be accessible to innerFunction due to function scope and also due to lexical block scope
    function innerFunction() {
        console.log(outerVar); // This will log "I am an outer variable" because innerFunction has access to the variables of its outer function (outerFunction) due to lexical block scope
    }
    return innerFunction;// We return the innerFunction along with its lexical scope which includes the outerVar variable,
    // creating a closure that allows innerFunction to access outerVar even after outerFunction has finished executing
}
const closureExample = outerFunction();// We call outerFunction and store the returned innerFunction in closureExample
closureExample(); // Output: I am an outer variable
//In this example, the innerFunction has access to the outerVar variable even after the outerFunction has finished executing,
// demonstrating the concept of closures in JavaScript.

    