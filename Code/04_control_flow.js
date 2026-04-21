// Control flow statements are essential for making decisions and performing repetitive tasks in JavaScript. They allow you to control the flow of your program based on certain conditions and to execute blocks of code multiple times, which is crucial for creating dynamic and interactive applications.

// Conditional Statements
// If statement - The if statement executes a block of code if a specified condition is true.
// Else statement - The else statement executes a block of code if the specified condition is false.
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
        break; // The break statement is used to exit the switch statement after a case has been executed. Without it, the code would continue to execute the next cases until it encounters a break or reaches the end of the switch statement.
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
// While loop - A while loop continues to execute a block of code as long as a specified condition is true. 
// It is useful when the number of iterations is not known beforehand but the loop needs to run until a certain condition is met.
let j = 0;
while (j < 5) {
    console.log(j); // Output: 0, 1, 2, 3, 4
    j++; //code to increment the value of j by 1 in each iteration to avoid an infinite loop
}
// Do...while loop
// A do...while loop is similar to a while loop, 
// but it guarantees that the block of code will be executed at least once, even if the condition is false.
let k = 0;
do {
    console.log(k); // Output: 0, 1, 2, 3, 4
    k++;
} while (k < 5);


// For loop
// A for loop is a more concise way to write a loop that includes initialization, condition, and increment/decrement in a single line.
// It is commonly used when the number of iterations is known beforehand.
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
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
 





   




