# 🔵 Now Let’s Move to Lesson 8: Arrays (VERY PRACTICAL)

This is where things become *real automation work*:

* Handling lists
* Tables
* Multiple UI elements

---

# 🟦 **Lesson 8: Arrays (Iteration + UI Data Handling)**

## 🎯 Goal

* Work with collections of data
* Loop through UI/API results
* Use powerful array methods

---

# 🔹 1. What is an Array?

An array is:

> A list of values

---

## 🧪 Example

```js
let users = ["Manash", "Vivek", "Amit"];
```

---

## 🧠 QA Thinking

| Array | QA Meaning       |
| ----- | ---------------- |
| Array | List of elements |
| Index | Position         |
| Value | Actual data      |

---

# 🔹 2. Accessing Array Values

---

```js
let users = ["Manash", "Vivek", "Amit"];

console.log(users[0]); // Manash
console.log(users[1]); // Vivek
```

👉 Index starts from **0**

---

# 🔹 3. Looping Through Arrays (MOST IMPORTANT)

---

## ✅ `for...of` (Preferred)

```js
let users = ["Manash", "Vivek", "Amit"];

for (let user of users) {
  console.log(user);
}
```

---

## 🧪 QA Example (UI List Validation)

```js
let items = ["Login", "Signup", "Logout"];

for (let item of items) {
  console.log("Checking:", item);
}
```

---

# 🔹 4. Array of Objects (🔥 REAL-WORLD DATA)

---

```js
let users = [
  { name: "Manash", role: "admin" },
  { name: "Vivek", role: "user" }
];
```

---

## 🧪 QA Scenario

```js
for (let user of users) {
  if (user.role === "admin") {
    console.log("Admin found:", user.name);
  }
}
```

---

# 🔹 5. Important Array Methods (🔥 HIGHLY USED)

---

## ✅ `map()` → Transform Data

```js
let numbers = [1, 2, 3];

let doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6]
```

---

## 🧪 QA Example

```js
let users = ["manash", "vivek"];

let upperUsers = users.map(u => u.toUpperCase());
```

---

## ✅ `filter()` → Select Data

```js
let numbers = [1, 2, 3, 4];

let even = numbers.filter(n => n % 2 === 0);

console.log(even); // [2, 4]
```

---

## 🧪 QA Example

```js
let users = [
  { name: "A", active: true },
  { name: "B", active: false }
];

let activeUsers = users.filter(u => u.active);
```

---

## ✅ `reduce()` → Combine Data

You’ve already seen this 👍

```js
let numbers = [1, 2, 3];

let sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 6
```

---

# 🔥 When to Use What

| Method   | Use Case       |
| -------- | -------------- |
| `map`    | Transform data |
| `filter` | Extract data   |
| `reduce` | Aggregate      |

---

# 🔹 6. Length Property

```js
let users = ["A", "B", "C"];

console.log(users.length); // 3
```

---

## 🧪 QA Example

```js
if (users.length > 0) {
  console.log("Users exist");
}
```

---

# 🔹 7. Adding / Removing Elements

---

## Add:

```js
users.push("D"); // add at end
```

---

## Remove:

```js
users.pop(); // remove last
```

---

# 🔥 Real QA Scenario

---

## Validate All Prices > 0

```js
let prices = [100, 200, 0];

for (let price of prices) {
  if (price <= 0) {
    console.log("Invalid price found");
  }
}
```

---

# ⚠️ Common Mistakes

---

## ❌ Forgetting return in `map`

```js
numbers.map(n => {
  n * 2; // ❌ no return
});
```

---

## ❌ Wrong index

```js
users[3] // undefined if only 3 elements
```

---

# 🧪 Mini Exercise

What will this output?

```js
let nums = [0, 1, 2, 3];

let result = nums.filter(n => n);

console.log(result);
```

---
