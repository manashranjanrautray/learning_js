
# 🟢 Now Let’s Move to Lesson 4: Control Flow

This is where your scripts start behaving like *real test logic*.

---

## 🎯 Goal

* Make decisions in tests
* Handle different UI states
* Loop through elements (tables, lists)

---

# 🔹 1. `if`, `else if`, `else`

---

## Basic Structure:

```js
if (condition) {
  // run if true
} else {
  // run if false
}
```

---

## 🧪 QA Example: Login Validation

```js
let actualMessage = "Login successful";

if (actualMessage === "Login successful") {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
```

---

## 🔸 Multiple Conditions

```js
let statusCode = 500;

if (statusCode === 200) {
  console.log("Success");
} else if (statusCode === 400) {
  console.log("Bad Request");
} else {
  console.log("Server Error");
}
```

---

# 🔹 2. `switch` (Cleaner Alternative)

Used when checking multiple fixed values.

```js
let role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  default:
    console.log("Guest");
}
```

---

# 🔹 3. Loops (VERY IMPORTANT for Automation)

You’ll use these for:

* Tables
* Lists
* Multiple elements

---

## ✅ `for` Loop

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

---

## 🧪 QA Example: Iterating Elements

```js
let users = ["Manash", "Vivek", "Amit"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
```

---

## ✅ `for...of` (Cleaner, Preferred)

```js
let users = ["Manash", "Vivek", "Amit"];

for (let user of users) {
  console.log(user);
}
```

👉 This is heavily used in automation frameworks.

---

## ✅ `while` Loop

```js
let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}
```

---

# 🔥 Real QA Scenario

---

## Validate All Items in UI List

```js
let prices = [100, 200, 300];

for (let price of prices) {
  if (price > 0) {
    console.log("Valid price:", price);
  }
}
```

---

# ⚠️ Common Mistakes

---

## ❌ Infinite Loop

```js
while (true) {
  // never ends ❗
}
```

---

## ❌ Wrong Condition

```js
if (value = 10) // ❌ assignment, not comparison
```

---

# 🧪 Mini Exercise

What will this print?

```js
let values = [0, 1, 2];

for (let val of values) {
  if (val) {
    console.log(val);
  }
}
```
