
---

# 🟤 Now Let’s Move to Lesson 14: Classes & OOP (VERY IMPORTANT)

This is where you step into:
👉 **Real automation framework design (Page Object Model)**

---

# 🟤 **Lesson 14: Classes & OOP (Page Object Model Foundation)**

## 🎯 Goal

* Understand classes
* Learn how automation frameworks are structured
* Prepare for Page Object Model (POM)

---

# 🔹 1. What is a Class?

A class is:

> A blueprint to create objects

---

## 🧪 Example

```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

let user1 = new User("Manash");
user1.greet();
```

---

## 🧠 QA Thinking

| Concept | QA Meaning           |
| ------- | -------------------- |
| Class   | Page                 |
| Object  | Page instance        |
| Method  | Action (click, fill) |

---

# 🔹 2. Constructor

---

```js
constructor(name) {
  this.name = name;
}
```

👉 Runs when object is created

---

# 🔹 3. Methods

---

```js
greet() {
  console.log("Hello");
}
```

👉 Functions inside class

---

# 🔹 4. `this` Keyword (IMPORTANT)

---

```js
this.name
```

👉 Refers to **current object**

---

## 🧪 Example

```js
class Test {
  constructor(value) {
    this.value = value;
  }

  print() {
    console.log(this.value);
  }
}
```

---

# 🔥 Real QA Example (POM Style)

---

```js
class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    console.log("Logging in with", username);
  }
}
```

---

👉 This is EXACTLY how frameworks like:

* Playwright
  are structured

---

# 🔹 5. Creating Object

---

```js
let loginPage = new LoginPage(page);
loginPage.login("admin", "1234");
```

---

# 🔹 6. Inheritance (Basic Idea)

---

```js
class BasePage {
  open() {
    console.log("Opening page");
  }
}

class LoginPage extends BasePage {
  login() {
    console.log("Login action");
  }
}
```

---

👉 Reuse common functionality

---

# 🔥 Why This Matters for QA

This is how you build:

* Page Object Model (POM)
* Reusable test framework
* Maintainable test code

---

# ⚠️ Common Mistakes

---

## ❌ Forgetting `this`

```js
constructor(name) {
  name = name; // ❌ wrong
}
```

---

## ✅ Correct

```js
this.name = name;
```

---

## ❌ Not using `new`

```js
let user = User("Manash"); // ❌
```

---

## ✅ Correct

```js
let user = new User("Manash");
```

---

# 🧪 Mini Exercise

What will this output?

```js
class Test {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

let t = new Test(10);

console.log(t.getValue());
```
