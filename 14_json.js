/**
 * Explain JSON (JavaScript Object Notation) and its use cases in JavaScript with examples.
 */
// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of the JavaScript programming language and is commonly used for transmitting data in web applications between a server and a client. JSON represents data as key-value pairs, where keys are strings and values can be strings, numbers, arrays, objects, booleans, or null.
// Use cases for JSON in JavaScript include:
// 1. Data exchange: JSON is commonly used to exchange data between a server and a client in web applications. It allows for easy serialization and deserialization of data, making it a popular choice for APIs and AJAX requests.
// 2. Configuration files: JSON is often used for configuration files in JavaScript applications. It provides a simple and human-readable format for storing settings and preferences.
// 3. Storing data: JSON can be used to store data in local storage or databases. It allows for easy storage and retrieval of structured data.
// 4. Data manipulation: JSON can be easily manipulated using JavaScript's built-in methods, making it convenient for working with complex data structures.
// Example of using JSON in JavaScript
// Creating a JavaScript object
const person = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "traveling", "cooking"]
};
// Converting the JavaScript object to a JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"Alice","age":30,"hobbies":["reading","traveling","cooking"]}
// Parsing the JSON string back to a JavaScript object
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson); // Output: { name: 'Alice', age: 30, hobbies: [ 'reading', 'traveling', 'cooking' ] }
// Accessing properties of the parsed object
console.log(parsedPerson.name); // Output: Alice
console.log(parsedPerson.age);  // Output: 30
console.log(parsedPerson.hobbies); // Output: [ 'reading', 'traveling', 'cooking' ]


