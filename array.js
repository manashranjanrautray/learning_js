// The most common and straightforward way to create an array in JavaScript is by using array literal syntax, 
// which involves enclosing the elements in square brackets [].
// This method is concise and easy to read, making it the preferred way to create arrays in most cases.
// The usecase for this is when you want to create an array with specific values right away,
// without needing to use the Array constructor or any other method.
// For example:
// The following code creates an array of strings representing different fruits using array literal syntax:
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// When you use the Array constructor with multiple arguments, it creates an array containing those arguments as its elements.
// The usecase for this is when you want to create an array with specific values right away,
// without having to use array literal syntax (square brackets).
// For example:
// The following code creates an array with the elements 1, 2, 3, 4, and 5 using the Array constructor:

let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// When you use the Array constructor with a single numeric argument, it creates an array with that length,
// but the elements are not initialized (they are empty slots).
// For example:
// The usecase for this is when you want to create an array of a specific size and fill it later,
// or when you want to create an array with a certain number of empty slots for some reason.
// The following code creates an array with a length of 5, but it does not contain any actual values:

let emptyArray = new Array(5); // This creates an array with 5 empty slots
console.log(emptyArray); // Output: [ <5 empty items> ]

// Accessing Array Elements - You can access individual elements of an array using their index, which starts at 0.
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry

// Array Methods with explanations
// push() - Adds an element to the end of the array and returns the new length of the array
fruits.push('Date');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']

// pop() - Removes the last element from the array 
fruits.pop();
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// shift() - Removes the first element from the array 
fruits.shift();
console.log(fruits); // Output: ['Banana', 'Cherry']

// unshift() - Adds an element to the beginning of the array
fruits.unshift('Apricot');
console.log(fruits);
// Output: ['Apricot', 'Banana', 'Cherry']

// length - Returns the number of elements in the array.
// it is not a method but a property of the array object that gives you the total number of elements in the array.
console.log(fruits.length); // Output: 3

// indexOf() - Returns the index of the first matching occurrence of a specified value.
console.log(fruits.indexOf('Banana')); // Output: 1

//If it is not present in the array, it returns -1.
console.log(fruits.indexOf('Date')); // Output: -1

// includes() - Checks if an array contains a specified value and returns true or false accordingly.
console.log(fruits.includes('Cherry')); // Output: true
console.log(fruits.includes('Date')); // Output: false

fruits.push('Apple');
console.log(fruits);// Output: ['Apricot', 'Banana', 'Cherry', 'Apple'  ]

// slice() - Returns a shallow copy of a section of an array into a new array object selected from start to end (end not included)
// The usecase for this is when you want to create a new array that contains a portion of the original array,
// without modifying the original array. This is useful for extracting specific elements or creating subarrays.
let citrus = fruits.slice(0, 2);
console.log(citrus); // Output: ['Apricot', 'Banana']


// splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements
// The usecase for this is when you want to modify an array by adding, removing, or replacing elements at specific positions.
// For example, the following code uses splice() to replace 'Banana' with 'Blueberry' in the fruits array:
// The first argument  specifies the index at which to start changing the array (the index of 'Banana').
// The second argument (2) specifies the number of elements to remove starting from that index (removing 'Banana' and 'Cherry').
// The third argument ('Blueberry') is the new element to add at the specified index after removing the old element.
console.log(fruits);// Output: ['Apricot', 'Banana', 'Cherry', 'Apple'  ]
fruits.splice(); // No arguments means no changes to the array
console.log(fruits); // Output: ['Apricot', 'Banana', 'Cherry', 'Apple'  ]
fruits.splice(1, 2 , 'Blueberry');// This will replace 'Banana' and 'Cherry' with 'Blueberry'
console.log(fruits); // Output: ['Apricot', 'Blueberry', 'Apple'  ]

// join() - Joins all elements of an array into a string 
// The usecase for this is when you want to create a single string from an array of strings,
// often with a specific separator between the elements. 
// This is useful for displaying array contents in a readable format or for creating CSV-like strings.
let fruitString = fruits.join(', ');
console.log(fruitString); // Output: Apricot, Blueberry, Cherry

// reverse() - Reverses the order of the elements in an array
// The usecase for this is when you want to display the elements of an array in reverse order.
console.log(fruits); // Output: ['Apricot', 'Blueberry', 'Cherry']
fruits.reverse();
console.log(fruits); // Output: ['Cherry', 'Blueberry', 'Apricot']

// sort() - Sorts the elements of an array in place and returns the sorted array
// The usecase for this is when you want to arrange the elements of an array in a specific order, such as alphabetically or numerically.
console.log(fruits); // Output: ['Cherry', 'Blueberry', 'Apricot']
fruits.sort();
console.log(fruits); // Output: ['Apricot', 'Blueberry', 'Cherry']


//Most important functions for arrays in JavaScript are  map(), filter(),reduce(), find(), findIndex(), some(), every(), concat(), and the spread operator.


// map() - Transfomer :Use map when you want to perform the same operation on every item in an array. 
// It creates a new array with the results of calling a provided function on every element in the calling array.
let upperCaseFruit = fruits.map(fruit=>fruit.toUpperCase());

//Describe above code with a for loop
let upperCaseFruitForLoop = [];// This will create an empty array to store the uppercase fruits
for (let i = 0; i < fruits.length; i++) {
    // This will take each fruit from the fruits array, convert it to uppercase, and add it to the upperCaseFruitForLoop array
    upperCaseFruitForLoop.push(fruits[i].toUpperCase());
}
console.log(upperCaseFruit); 
console.log(upperCaseFruitForLoop); 


//filter() - The Selector : Use filter to keep only the items that meet specific criteria 
// It creates a new array with all elements that pass the test implemented by the provided function.
// For example, if we want to filter out fruits that have more than 6 characters in their name:
let longFruits = fruits.filter(fruit => fruit.length > 6);

//Describe above code with a for loop
let longFruitsForLoop = []; // This will create an empty array to store the long fruits
for (let i = 0; i < fruits.length; i++) {
    // This will check if the length of each fruit is greater than 6, and if so, it will add it to the longFruitsForLoop array  
    if (fruits[i].length > 6) {
        longFruitsForLoop.push(fruits[i]);
    }
}
console.log(longFruits);
console.log(longFruitsForLoop);




// reduce() - The Accumulator : Use reduce to boil down an entire array into one final result, like a sum or a single object. 
// The usecase for this is when you want to combine all the elements of an array into a single value, such as a sum, product, or a concatenated string.
//syntax of reduce() is array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// For example, if we want to concatenate all the fruit names into a single string:
let allFruitsString = fruits.reduce((accumulator, currentValue) => accumulator + ', ' + currentValue);
console.log(allFruitsString); // Output: , Apricot, Blueberry, Cherry

// The initial value is an empty string '', which means that the first time the callback function is called, the accumulator will be an empty string and the currentValue will be 'Apple'.
// The callback function concatenates the current value to the accumulator with a comma and a space in between.
// The result is a single string that contains all the fruit names separated by commas. Note that there is a leading comma and space at the beginning of the result because of the way the accumulator is initialized. You can remove it by adjusting the initial value or by using a different approach to concatenate the strings.

//How to avoid leading comma in the above code? You can initialize the accumulator with the first element of the array and start the reduce from the second element. Here's how you can do it:
let allFruitsStringNoLeadingComma = fruits.reduce((accumulator, currentValue) => accumulator + ', ' + currentValue, fruits[0]);
console.log(allFruitsStringNoLeadingComma); // Output: Apple, Banana, Cherry



//Describe above code with a for loop
let accumulator = '';

for (let i = 0; i < fruits.length; i++) {
    let currentValue = fruits[i];
    
    if (accumulator === '') {
        accumulator = currentValue; // avoid leading comma
    } else {
        accumulator = accumulator + ', ' + currentValue;
    }
}

let allFruitsStringForLoop = accumulator;


// find() - Returns the value of the first element in the array that satisfies the provided testing function
let foundFruit = fruits.find(fruit => fruit.startsWith('B'));
console.log(foundFruit);
// Output: Blueberry

// findIndex() - Returns the index of the first element in the array that satisfies the provided testing function
let foundIndex = fruits.findIndex(fruit => fruit.startsWith('B'));
console.log(foundIndex); // Output: 1

// some() - Tests whether at least one element in the array passes the test implemented by the provided function
let hasLongFruit = fruits.some(fruit => fruit.length > 6);
console.log(hasLongFruit); // Output: true

// every() - Tests whether all elements in the array pass the test implemented by the provided function
let allLongFruits = fruits.every(fruit => fruit.length > 6);
console.log(allLongFruits); // Output: false

// concat() - Merges two or more arrays into a new array
let moreFruits = ['Elderberry', 'Fig'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['Apricot', 'Blueberry', 'Cherry', 'Elderberry', 'Fig']

// spread operator - Another way to merge arrays
let allFruitsSpread = [...fruits, ...moreFruits];
console.log(allFruitsSpread); // Output: ['Apricot', 'Blueberry', 'Cherry', 'Elderberry', 'Fig']

// Array destructuring - Extracting values from arrays into variables
let [firstFruit, secondFruit] = fruits;
console.log(firstFruit); // Output: Apricot
console.log(secondFruit); // Output: Blueberry

// Nested arrays - Arrays can contain other arrays
let nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray); // Output: [[1, 2], [3, 4], [5, 6]]
console.log(nestedArray[0]); // Output: [1, 2]
console.log(nestedArray[0][1]); // Output: 2

// Multidimensional arrays - Arrays with more than one level of nesting
let multiDimensionalArray = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
console.log(multiDimensionalArray); // Output: [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
console.log(multiDimensionalArray[0][1][0]); // Output: 3

// forEach() - Executes a provided function once for each array element
fruits.forEach(fruit => console.log(fruit)); // Output: Apricot, Blueberry, Cherry (each on a new line)

// The for...of loop provides a simpler syntax for iterating over arrays compared to the traditional for loop. 
// It allows you to directly access the values of the array elements without needing to use an index.
for (let fruit of fruits) {
    console.log(fruit); // Output: Apricot, Blueberry, Cherry (each on a new line)
}
    



