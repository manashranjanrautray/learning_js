# 🔹 1. What is a Function?

A function is:

> A reusable block of code that performs a task

---

## 🧪 Example

```js
function greet() {
  console.log("Hello QA");
}

greet(); // calling the function
```

---

## 🧠 QA Thinking

| Concept       | QA Meaning        |
| ------------- | ----------------- |
| Function      | Test step         |
| Function call | Execute test step |

---

# 🔹 2. Functions with Parameters

---

```js
function greetUser(name) {
  console.log("Hello " + name);
}

greetUser("Manash");
```

---

## 🧪 QA Example

```js
function login(username, password) {
  console.log("Logging in with", username, password);
}

login("admin", "1234");
```

👉 This is how reusable login steps are built.

---

# 🔹 3. Return Values (VERY IMPORTANT)

---

```js
function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result); // 5
```

---

## 🧪 QA Example

```js
function getStatus() {
  return "Success";
}

let status = getStatus();

if (status === "Success") {
  console.log("Test Passed");
}
```

---

# 🔹 4. Function Expression

---

```js
const greet = function() {
  console.log("Hello QA");
};
```

👉 Stored in a variable

---

# 🔹 5. Arrow Functions (🔥 MOST IMPORTANT)

Used heavily in modern JS + Playwright.

---

## Basic Arrow Function

```js
const greet = () => {
  console.log("Hello QA");
};
```

---

## With Parameters

```js
const add = (a, b) => {
  return a + b;
};
```

---

## Short Form

```js
const add = (a, b) => a + b;
```

---

## 🧪 QA Example (Very Real)

```js
const validateLogin = (actual, expected) => {
  return actual === expected;
};

let result = validateLogin("Success", "Success");

console.log(result); // true
```

---

# 🔥 Why Arrow Functions Matter for You

You’ll see this everywhere in automation tools like:

* Playwright
* Cypress

Example (just for awareness):

```js
test("login test", async () => {
  // arrow function here
});
```

---

# ⚠️ Common Mistakes

---

## ❌ Forgetting `return`

```js
const add = (a, b) => {
  a + b; // ❌ no return
};
```

---

## ❌ Confusing function call vs definition

```js
function greet() {} // definition

greet(); // call
```

---

# 🧪 Mini Exercise

What will this output?

```js
const checkValue = (value) => {
  if (value) {
    return "Valid";
  } else {
    return "Invalid";
  }
};

console.log(checkValue(0));
console.log(checkValue(5));
```

