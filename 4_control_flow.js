// Control flow statements are essential for making decisions and performing repetitive tasks in JavaScript. They allow you to control the flow of your program based on certain conditions and to execute blocks of code multiple times, which is crucial for creating dynamic and interactive applications.

// Conditional Statements
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
//Multiple if else statements 
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
//Equivalent switch statement to the above if-else statement for better readability
switch (true) {
    case score >= 90:
        console.log("Grade: A");
        break;
    case score >= 80:
        console.log("Grade: B");
        break;
    case score >= 70:
        console.log("Grade: C");
        break;
    case score >= 60:
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}    
// Loops
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}
// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Output: 0, 1, 2, 3, 4
    j++;
}
// Do...while loop
let k = 0;
do {
    console.log(k); // Output: 0, 1, 2, 3, 4
    k++;
} while (k < 5);
// For...in loop (used for iterating over the properties of an object)
let person = { name: "Alice", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// For...of loop (used for iterating over iterable objects like arrays)
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number); // Output: 1, 2, 3, 4, 5
}

//break statement is used to exit a loop or switch statement prematurely when a certain condition is met. It can be used in for, while, do...while loops, and switch statements.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i); // Output: 0, 1, 2, 3, 4
}
//continue statement is used to skip the current iteration of a loop and move on to the next iteration. It can also be used in for, while, and do...while loops.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop when i is 5
    }
    console.log(i); // Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
}
 



   




