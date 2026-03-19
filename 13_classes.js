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
  
