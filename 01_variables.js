//Console.log is used to print something to the console
console.log("Hello, World!");

//These are comments in JavaScript. They are ignored by the interpreter and are used to explain the code or make notes for developers.
//Single line comments start with two forward slashes

/*
Multi-line comments are enclosed in /* and *\/
This is a multi-line comment.
*/


//Variables are used to store data that can be used later in the program
//In JavaScript, we can declare a variable using the 'let' keyword
//JS is a dynamically typed language, which means we don't have to specify the type of the variable when we declare it
let userName = "Alice";
console.log(userName);

//We can also declare a variable using the 'const' keyword, which means the value cannot be changed
const pi = 3.14;
console.log(pi);
//If we try to change the value of a constant variable, we will get an error
//pi = 3.14159; // This will cause an error

//We can also declare a variable without using 'let' or 'const', but this is not recommended
//because it can lead to unexpected behavior
age = 30;
console.log(age);

//It's best practice to always declare your variables using 'let' or 'const' to avoid any issues

//********************************************************************************************************************************************** */
//In JavaScript, we can also use 'var' to declare variables, but it is not recommended
//because it has some quirks and can lead to bugs in larger programs like re-declaration as below example 
//and variable hoisting which will be explained in the scope section.

//var and let redeclaration example
var x = 10;
var x = 20;
console.log(x); // Output: 20 (var allows redeclaration)

//let does not allow redeclaration in the same scope,Reassignment is allowed but not redeclaration
let y = 10;
//let y = 20; // This will cause an error 
console.log(y); // Output: 10






































