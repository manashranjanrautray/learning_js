//Console.log is used to print something to the console
console.log("Hello, World!");

//Variables are used to store data that can be used later in the program
//In JavaScript, we can declare a variable using the 'let' keyword
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
//In JavaScript, we can also use 'var' to declare variables, but it is not recommended
//because it has some quirks and can lead to bugs in larger programs
var city = "New York";
console.log(city);

//In summary, use 'let' for variables that may change and 'const' for variables that should not change. 
//Avoid using 'var' to prevent potential issues such as variable hoisting and scope confusion. 
// Always declare your variables to maintain clean and predictable code.Example of variable hoisting and scope confusion with 'var':
function hoistingExample() {
    console.log(hoistedVar); // Output: undefined (due to hoisting)
    var hoistedVar = "I am hoisted!";
    console.log(hoistedVar); // Output: I am hoisted!
}
hoistingExample();
//In this example, the variable 'hoistedVar' is hoisted to the top of the function scope, but its value is not assigned until the line where it is declared. 
//This can lead to confusion and bugs, which is why it's recommended to use 'let' or 'const' instead of 'var'.






































