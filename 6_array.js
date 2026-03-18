// Creating Arrays
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']
// Accessing Array Elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry
// Array Methods with explanations
// push() - Adds an element to the end of the array
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
// length - Returns the number of elements in the array
console.log(fruits.length); // Output: 3
// indexOf() - Returns the index of the first occurrence of a specified value
console.log(fruits.indexOf('Banana')); // Output: 1
// includes() - Checks if an array contains a specified value
console.log(fruits.includes('Cherry')); // Output: true
console.log(fruits.includes('Date')); // Output: false
// slice() - Returns a shallow copy of a portion of an array into a new array
let citrus = fruits.slice(1);
console.log(citrus); // Output: ['Banana', 'Cherry']
// splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements
fruits.splice(1, 1, 'Blueberry');
console.log(fruits); // Output: ['Apricot', 'Blueberry', 'Cherry']
// join() - Joins all elements of an array into a string
let fruitString = fruits.join(', ');
console.log(fruitString); // Output: Apricot, Blueberry, Cherry
// reverse() - Reverses the order of the elements in an array
fruits.reverse();
console.log(fruits); // Output: ['Cherry', 'Blueberry', 'Apricot']
// sort() - Sorts the elements of an array in place and returns the sorted array
fruits.sort();
console.log(fruits); // Output: ['Apricot', 'Blueberry', 'Cherry']
// map() - Creates a new array populated with the results of calling a provided function on every element in the calling array
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);
// Output: ['APRICOT', 'BLUEBERRY', 'CHERRY']
// filter() - Creates a new array with all elements that pass the test implemented by the provided function
let longFruits = fruits.filter(fruit => fruit.length > 6);
console.log(longFruits); // Output: ['Blueberry', 'Cherry']
// reduce() - Executes a reducer function on each element of the array, resulting in a single output value
let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength); // Output: Total length of all fruit names
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

//for of loop - Iterating over array elements
for (let fruit of fruits) {
    console.log(fruit); // Output: Apricot, Blueberry, Cherry (each on a new line)
}
    



