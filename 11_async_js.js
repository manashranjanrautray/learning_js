/**
 * Asynchronous JavaScript explanation and examples of Callback Functions, Promises, Async/Await, Arrow Functions, Sets and Maps, Filter, Map, and Reduce Functions, Iterators and Generators in JavaScript
Callback Functions
Promises
Async/Await
Arrow Functions
Sets and Maps
Filter, Map, and Reduce Functions
Iterators and Generators
*/
// Callback Functions
function fetchData(callback) {
    setTimeout(() => {
        let data = "Data fetched from server";
        callback(data);
    }, 2000);
}
fetchData((data) => {
    console.log(data); // Output: Data fetched from server
});
// Promises
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = "Data fetched from server";
            resolve(data);
        }, 2000);
    });
}
fetchDataPromise()
    .then((data) => {
        console.log(data); // Output: Data fetched from server
    })
    .catch((error) => {
        console.error("An error occurred: " + error.message);
    });
// Async/Await
async function fetchDataAsync() {
    try {
        let data = await fetchDataPromise();
        console.log(data); // Output: Data fetched from server
    } catch (error) {
        console.error("An error occurred: " + error.message);
    }
}
fetchDataAsync();
// Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
// Sets and Maps
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
console.log(mySet); // Output: Set { 1, 2 }
let myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
console.log(myMap); // Output: Map { 'key1' => 'value1', 'key2' => 'value2' }
// Filter, Map, and Reduce Functions
let numbers = [1, 2, 3, 4, 5];
let filteredNumbers = numbers.filter(num => num > 2);
console.log(filteredNumbers); // Output: [3, 4, 5]
let mappedNumbers = numbers.map(num => num * 2);
console.log(mappedNumbers);// Output: [2, 4, 6, 8, 10]
let reducedNumber = numbers.reduce((acc, num) => acc + num, 0);
console.log(reducedNumber); // Output: 15
// Iterators and Generators
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
let generator = generatorFunction();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
// This code demonstrates various concepts of asynchronous JavaScript, including callback functions, promises, async/await, arrow functions, sets and maps, filter/map/reduce functions, and iterators/generators. Each section provides examples to illustrate how these concepts work in practice. 