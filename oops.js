/**
 * Explain below concepts related to JavaScript classes:
 * Class basic syntax
Class inheritance
Static properties and methods
Private and protected properties and methods
Extending built-in classes
Class checking: "instanceof"
 */

// Class basic syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Class inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent class constructor
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} is studying.`);
  }
}

// Static properties and methods
class MathUtils {
  static PI = 3.14159;
  static square(x) {
    return x * x;
  }
}

// Private and protected properties and methods
class BankAccount {
  #balance; // Private property
    constructor(initialBalance) {
    this.#balance = initialBalance;
  }
    deposit(amount) {
    this.#balance += amount;
  }
    getBalance() {
    return this.#balance;
  }
}

// Extending built-in classes
class CustomArray extends Array {
  sum() {
    return this.reduce((acc, val) => acc + val, 0);
  }
}     
// Class checking: "instanceof"
const person = new Person("Alice", 30);
const student = new Student("Bob", 20, "A");
console.log(person instanceof Person); // true
console.log(student instanceof Student); // true
console.log(student instanceof Person); // true, because Student inherits from Person
console.log(person instanceof Student); // false, because Person does not inherit from Student  
console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.square(5)); // 25
const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
const customArray = new CustomArray(1, 2, 3, 4, 5);
console.log(customArray.sum()); // 15  

//Explain object-oriented programming (OOP) concepts in JavaScript, such as encapsulation, inheritance, and polymorphism.

// Object-oriented programming (OOP) is a programming paradigm that uses objects and classes to structure code. In JavaScript, OOP concepts include encapsulation, inheritance, and polymorphism.
// Encapsulation is the concept of bundling data and methods that operate on that data within a single unit, such as a class. This helps to protect the internal state of an object and only expose necessary functionality. In JavaScript, we can achieve encapsulation using classes and private properties/methods.
// Inheritance is the ability of a class to inherit properties and methods from another class. This promotes code reusability and allows for the creation of more specific classes based on general ones. In JavaScript, we can use the "extends" keyword to create a subclass that inherits from a parent class.
// Polymorphism is the ability of different classes to be treated as instances of the same class through a common interface. This allows for flexibility in code and enables objects of different types to be used interchangeably. In JavaScript, we can achieve polymorphism through method overriding, where a subclass provides a specific implementation of a method that is already defined in its parent class.
// Overall, OOP concepts in JavaScript help to create more organized, reusable, and maintainable code by structuring it around objects and classes.
// Example of encapsulation
class Car {
  #make; // Private property
  #model; // Private property
  constructor(make, model) {
    this.#make = make;
    this.#model = model;
  }
  getMake() {
    return this.#make;
  }
  getModel() {
    return this.#model;
  }
}
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getMake()); // Output: Toyota
console.log(myCar.getModel()); // Output: Corolla
// Example of inheritance and polymorphism
class Animal {
  speak() {
    console.log("The animal makes a sound.");
  }
}
class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}
class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
} 
const myDog = new Dog();
const myCat = new Cat();
myDog.speak(); // Output: The dog barks.
myCat.speak(); // Output: The cat meows.
// Both myDog and myCat are instances of the Animal class, but they have their own specific implementations of the speak method, demonstrating polymorphism.
class Example {
  greet() {
    console.log("Hi there!");
  }
  // This definition overwrites the previous 'greet'
  greet(name) {
    console.log(`Hi, ${name}!`);
  }
}

const e = new Example();
e.greet("Jesse"); // Output: Hi, Jesse! (The two-parameter version is called)
e.greet();        // Output: Hi, undefined! (Still calls the two-parameter version, ignoring missing args)
// In JavaScript, the second definition of the greet method overwrites the first one, so only the second version is available. This is a common pitfall when trying to implement method overloading in JavaScript, which does not natively support it. 
// To achieve similar functionality, you can use default parameters or check the number of arguments within a single method definition.

//prototype-based inheritance
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
}
function Student(name, grade) {
  Person.call(this, name); // Call the parent constructor
  this.grade = grade;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
  console.log(`${this.name} is studying.`);
}
const student1 = new Student("Charlie", "A");
student1.greet(); // Output: Hello, my name is Charlie.
student1.study(); // Output: Charlie is studying.
// In this example, we define a Person constructor function and add a greet method to its prototype. Then we define a Student constructor function that calls the Person constructor to initialize the name property. We set the Student prototype to be an object created from the Person prototype, allowing Student instances to inherit the greet method. Finally, we add a study method to the Student prototype.
// In summary, JavaScript classes provide a more structured and familiar syntax for creating objects and implementing OOP concepts, while prototype-based inheritance allows for more flexible and dynamic object creation. Both approaches have their own advantages and use cases, and understanding them can help you write better JavaScript code.
// Explain the difference between class-based and prototype-based inheritance in JavaScript.
// Class-based inheritance is a programming paradigm where classes are defined as blueprints for creating objects. In class-based inheritance, you create a class that defines properties and methods, and then you can create instances of that class. The class can also inherit from another class, allowing you to reuse code and create a hierarchy of classes. This approach is common in languages like Java and C++.
// Prototype-based inheritance, on the other hand, is a programming paradigm where objects can directly inherit from other objects. In JavaScript, every object has a prototype, which is another object that it inherits properties and methods from. When you access a property or method on an object, JavaScript first looks for it on the object itself, and if it doesn't find it, it looks up the prototype chain until it finds it or reaches the end of the chain. This approach allows for more dynamic and flexible object creation, as you can create new objects that inherit from existing ones without needing to define a class.
// In summary, class-based inheritance focuses on defining classes as blueprints for creating objects, while prototype-based inheritance focuses on objects inheriting directly from other objects. Both approaches have their own advantages and use cases, and understanding them can help you write better JavaScript code.
