/**
 * Objects explanation and examples in JavaScript
Creating Objects
Accessing Object Properties
Object Methods
Hoisting and Scope
Object Comparison
Object Manipulation (Adding, Modifying, Deleting Properties)
Object Conversion (toString(), valueOf())
 */
// Creating Objects
let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
// Accessing Object Properties
console.log(person.name); // Output: Alice
console.log(person["age"]); // Output: 30
person.greet(); // Output: Hello, my name is Alice
// Object Methods
person.sayGoodbye = function() {
    console.log("Goodbye!");
};
person.sayGoodbye(); // Output: Goodbye!
// Hoisting and Scope
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
let person1 = createPerson("Bob", 25);
console.log(person1);
// Object Comparison
let obj1 = { key: "value" };
let obj2 = { key: "value" };
console.log(obj1 === obj2); // Output: false (different references)
// Object Manipulation
person.city = "New York"; // Adding a property
person.age = 31; // Modifying a property
delete person.city; // Deleting a property
console.log(person);
// Object Conversion
console.log(person.toString()); // Output: [object Object]
console.log(person.valueOf()); // Output: { name: 'Alice', age: 31, greet: [Function], sayGoodbye: [Function] }
// This code demonstrates various operations with objects in JavaScript, including creating objects, accessing properties, defining methods, understanding hoisting and scope, comparing objects, manipulating object properties, and converting objects to strings and values.
    