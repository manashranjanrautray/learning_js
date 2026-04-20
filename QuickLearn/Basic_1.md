# 🟢 **Lesson 1: JavaScript Basics & Setup (QA-Focused)**

## 🎯 Goal of This Lesson

By the end, you should:

* Understand **what JavaScript actually is**
* Know **where it runs**
* Be able to **write and execute simple JS code**

---

## 🧠 1. What is JavaScript (in simple terms)?

JavaScript is a **programming language used to control behavior**.

* In browser → controls UI (clicks, inputs, validations)
* In automation → controls tests (what to click, what to verify)

👉 Think of it like:

> “Instructions you give to the browser or automation tool”

---

## ⚙️ 2. Where Does JavaScript Run?

### ✅ 1. Browser (Frontend)

* Runs inside Chrome, Edge, etc.
* Used to manipulate UI

Example:

```js
console.log("Hello from browser");
```

You can run this in:
👉 Right click → Inspect → Console

---

### ✅ 2. Backend (Very Important for QA Automation)

Using:
👉 Node.js

This is what tools like:

* Playwright
* Cypress (internally)
  use to execute your test scripts.

---

## 🧪 3. Your First JavaScript Code

```js
console.log("Hello QA World");
```

👉 Output:

```
Hello QA World
```

### What’s happening?

* `console` → object
* `log()` → function
* Used for debugging (VERY important for QA)

---

## 📦 4. Variables (Core Building Block)

Variables store data (like test data, locators, results).

---

### ✅ `let` (can change value)

```js
let username = "Manash";
username = "QA Engineer";
```

---

### ✅ `const` (cannot change)

```js
const url = "https://example.com";
```

👉 Use `const` by default (best practice)

---

### ⚠️ `var` (avoid)

```js
var x = 10;
```

We avoid it because:

* Confusing scope behavior
* Causes bugs in automation scripts

---

## 🧾 5. Naming Rules (Important in Frameworks)

Good:

```js
let loginButton;
let userEmail;
```

Bad:

```js
let x;
let data1;
```

👉 Use meaningful names (helps in debugging failures)

---

## 🔍 6. Small QA-Oriented Example

```js
const baseUrl = "https://testapp.com";
let isLoggedIn = false;

console.log("Opening:", baseUrl);
```

👉 This is how your automation scripts will look internally.

---

## 🧠 Mental Model (Very Important)

Think like this:

| Concept     | Real QA Meaning  |
| ----------- | ---------------- |
| Variable    | Test data        |
| Function    | Test step        |
| Console log | Debugging output |
| JS file     | Test script      |

---

## 🧪 Mini Exercise (Do This)

Try writing this yourself:

```js
const testerName = "YourName";
let testStatus = "Not Started";

console.log(testerName);
console.log(testStatus);
```

Then change:

```js
testStatus = "Passed";
```

