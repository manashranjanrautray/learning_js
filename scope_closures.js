//Example of different scopes in JavaScript like global scope, function scope, and block scope with let,var and const
//Global scope means that the variable is accessible from anywhere in the code applicable to let, var and const
//Function scope means that the variable is only accessible within the function it is declared in and applicable to var and not to let and const
//Block scope means that the variable is only accessible within the block i.e. code sorrounded by {} it is declared in
//and applicable to let and const and not to var

//Global scope

var globalVar = "I am a global variable";
let globalLet = "I am also a global variable";
const globalConst = "I am a global constant";

function exampleFunction() {
    //Function scope
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
    console.log(blockVar); // Accessible due to var's function scope
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

    