/**
 * Objects explanation and examples in JavaScript
Creating Objects
Accessing Object Properties
Object Methods
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
//Accessing non-existent property
console.log(person.address); // Output: undefined
//Accessing properties with variables
let prop = "name";
console.log(person[prop]); // Output: Alice
let prop2 = "age";
console.log(person[prop2]); // Output: 30
let prop3 = "address";
console.log(person[prop3]); // Output: undefined

// The for...in loop iterates over the enumerable properties of an object, allowing you to access both the property names (keys) and their corresponding values.
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}
// Output:
// name: Alice
// age: 30
// greet: function() { ... }


// Object Methods
person.sayGoodbye = function() {
    console.log("Goodbye!");
};
person.sayGoodbye(); // Output: Goodbye!

// Object Comparison
let obj1 = { key: "value" };
let obj2 = { key: "value" };
console.log(obj1 === obj2); // Output: false (different references)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // Output: true (same content)
console.log(obj1 == obj2); // Output: false (different references)
let obj3 = obj1; // obj3 references the same object as obj1
console.log(obj1 === obj3); // Output: true (same reference)

//Cloning and merging, Object.assign with example
let obj4 = Object.assign({}, obj1);
console.log(obj4); // Output: { key: "value" }
let obj5 = { anotherKey: "anotherValue" };
let mergedObj = Object.assign({}, obj1, obj5);
console.log(mergedObj); // Output: { key: "value", anotherKey: "anotherValue" }



// Object Manipulation
person.city = "New York"; // Adding a property
person.age = 31; // Modifying a property
delete person.city; // Deleting a property
console.log(person);
// Object Conversion
console.log(person.toString()); // Output: [object Object]
console.log(person.valueOf()); // Output: { name: 'Alice', age: 31, greet: [Function], sayGoodbye: [Function] }

//Explain this keyword in object methods
// The 'this' keyword in JavaScript refers to the context in which a function is executed.
// In object methods, 'this' refers to the object that the method is a part of.
// It allows you to access the properties and other methods of the same object. 
// For example, in the 'greet' method of the 'person' object, 'this.name' refers to the 'name' property of the 'person' object, allowing us to dynamically access and use that property within the method.
// Example of 'this' in object methods
let car = {
    make: "Toyota",
    model: "Corolla",
    getCarInfo: function() {
        return this.make + " " + this.model;
    }
};
console.log(car.getCarInfo()); // Output: Toyota Corolla
// In this example, 'this.make' and 'this.model' refer to the 'make' and 'model' properties of the 'car' object, allowing the 'getCarInfo' method to return a string that combines those properties.
// Note: The value of 'this' can change based on how a function is called, so it's important to understand the context in which a function is executed to correctly use 'this'.
// Example of 'this' changing context
let anotherCar = {
    make: "Honda",
    model: "Civic"
};
console.log(car.getCarInfo.call(anotherCar)); // Output: Honda Civic
// In this example, we use the 'call' method to change the context of 'this' to 'anotherCar', allowing us to get the car info for 'anotherCar' instead of 'car'.
// Example of 'this' in arrow functions
let bike = {
    make: "Yamaha",
    model: "R1",
    getBikeInfo: () => {
        return this.make + " " + this.model;
    }
};
console.log(bike.getBikeInfo()); // Output: undefined undefined
// In this example, the arrow function does not have its own 'this' context, so it inherits 'this' from the surrounding scope, which is the global scope in this case. As a result, 'this.make' and 'this.model' are undefined. To fix this, we can use a regular function instead of an arrow function for the 'getBikeInfo' method.
let bike2 = {
    make: "Yamaha",
    model: "R1",
    getBikeInfo: function() {
        return this.make + " " + this.model;
    }
};
console.log(bike2.getBikeInfo()); // Output: Yamaha R1

//Explain Constructor and New Keyword in JavaScript
// In JavaScript, a constructor is a special function that is used to create and initialize objects. The 'new' keyword is used to create an instance of an object using a constructor function. When you use the 'new' keyword, it does the following:
// 1. Creates a new empty object.
// 2. Sets the prototype of the new object to the constructor's prototype.
// 3. Binds 'this' to the new object within the constructor function.
// 4. Executes the constructor function, allowing you to initialize properties on the new object.
// 5. Returns the new object (unless the constructor explicitly returns a different object).
// Example of a constructor function and using the 'new' keyword
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}   
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);
console.log(person1.name); // Output: Alice
console.log(person2.name); // Output: Bob
person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob
// In this example, the 'Person' function is a constructor that initializes the 'name', 'age', and 'greet' properties for each new instance of 'Person'. By using the 'new' keyword, we create two separate objects, 'person1' and 'person2', each with their own properties and methods.   
//Nested objects and accessing nested properties
let company = {
    name: "Tech Co.",
    address: {  
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};
console.log(company.name); // Output: Tech Co.
console.log(company.address.street); // Output: 123 Main St
console.log(company.address.city); // Output: Anytown
console.log(company.address.state); // Output: CA
