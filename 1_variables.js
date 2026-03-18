/**
 * When you declare a variable with var,
 * it belongs to the current function scope, or the global scope if declared outside any function
. It ignores block boundaries like if statements or for loops.
 */
//Example of global scope with var
var globalVar = "I am a global variable";

function exampleFunction() {
    console.log(globalVar);
    globalVar = "I am a new global variable"; // This will create a global variable if not declared with var, let, or const
    console.log(globalVar); // Output: I am a global variable
}
exampleFunction();
console.log(globalVar); // Output: I am a new global variable, because the assignment in the function changed the global variable due to var's function scope.

//Example of function scope with var
function anotherFunction() {
    var localVar = "I am a local variable";
    console.log(localVar); // Output: I am a local variable
}
anotherFunction();
// console.log(localVar); // This will throw an error: ReferenceError: localVar is not defined, because localVar is only accessible within anotherFunction due to var's function scope.

//Example of var ignoring block scope
if (true) {
    var blockVar = "I am a block variable";
}
console.log(blockVar); // Output: I am a block variable, because var does not respect block scope and blockVar is accessible outside the if statement.

//Example of var redeclaration
var redeclareVar = "First declaration";
var redeclareVar = "Second declaration";
console.log(redeclareVar); // Output: Second declaration, because var allows for redeclaration, which can lead to unexpected behavior.

//Example of var hoisting
console.log(hoistedVar); // Output: undefined, because var declarations are hoisted to the top of their scope, but not their assignments.
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: I am hoisted, because the declaration of hoistedVar is hoisted, but the assignment happens at the original line.

// In general, it is recommended to use let and const instead of var to avoid issues with variable scope and redeclaration.
// Using let and const provides block scope and prevents redeclaration, which can help prevent bugs and improve code readability.
// Example of using let and const
let a = 5
let b = 10
let c = a + b
console.log(c) // Output: 15
// Reassigning variable a
a = 20
c = a + b
console.log(c) // Output: 30
// Using const for a variable that should not be reassigned
const pi = 3.14159
console.log(pi) // Output: 3.14159
// Attempting to reassign a const variable will result in an error
//pi = 3.14 // This will throw an error: TypeError: Assignment to constant variable.
// Using let for a variable that can be reassigned
let radius = 5
let circumference = 2 * pi * radius
console.log(circumference) // Output: 31.4159   
// Reassigning radius
radius = 10
circumference = 2 * pi * radius
console.log(circumference) // Output: 62.8318
// Example of using Let for block scope
if (true) {
    let blockLet = "I am a block variable declared with let";
    console.log(blockLet); // Output: I am a block variable declared with let
}
// console.log(blockLet); // This will throw an error: ReferenceError: blockLet is not defined, because blockLet is only accessible within the if statement due to let’s block scope.
// Example of using const for block scope
if (true) {
    const blockConst = "I am a block variable declared with const";
    console.log(blockConst); // Output: I am a block variable declared with const
}
// console.log(blockConst); // This will throw an error: ReferenceError: blockConst is not defined, because blockConst is only accessible within the if statement due to const’s block scope.


//example of temporal dead zone with let and const
//console.log(tempLet); // This will throw an error: ReferenceError: Cannot access 'tempLet' before initialization, because tempLet is in the temporal dead zone until it is declared and initialized.
//let tempLet = "I am a temporal dead zone variable";
//console.log(tempConst); // This will throw an error: ReferenceError: Cannot access 'tempConst' before initialization, because tempConst is in the temporal dead zone until it is declared and initialized.
//const tempConst = "I am a temporal dead zone variable";
