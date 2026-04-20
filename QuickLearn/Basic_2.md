# 🧠 1. What is a Data Type?

A data type defines:

> “What kind of value a variable holds”

Example:

```js
let name = "Manash";   // string
let age = 30;          // number
let isLoggedIn = true; // boolean
```

---

# 🔹 2. Primitive Data Types (Most Important)

These are used everywhere in automation.

---

## ✅ 1. String (Text Data)

```js
let username = "admin";
let message = 'Login successful';
```

👉 Used in:

* Input fields
* Error messages
* UI validation

---

## ✅ 2. Number

```js
let price = 100;
let discount = 20.5;
```

👉 Used in:

* Pricing validation
* Counts (cart items, results)

---

## ✅ 3. Boolean (True/False)

```js
let isVisible = true;
let isEnabled = false;
```

👉 Used in:

* Assertions:

```js
expect(isVisible).toBe(true);
```

---

## ⚠️ 4. `undefined` (Very Common Bug Source)

```js
let value;
console.log(value); // undefined
```

👉 Means:

> Variable declared but **no value assigned**

---

## ⚠️ 5. `null`

```js
let data = null;
```

👉 Means:

> “Intentionally empty”

---

### 🔥 Difference (Important for QA)

| Value       | Meaning          |
| ----------- | ---------------- |
| `undefined` | Not assigned yet |
| `null`      | Explicitly empty |

👉 Many API bugs come from confusing these two.

---

# 🔸 3. Non-Primitive Types

---

## ✅ 6. Object (Most Important for API Testing)

```js
let user = {
  name: "Manash",
  age: 30,
  isAdmin: true
};
```

👉 Used in:

* API responses
* Test data
* JSON handling

---

## ✅ 7. Array (List of Data)

```js
let users = ["Manash", "Vivek", "Amit"];
```

👉 Used in:

* Lists in UI
* API response collections

---

# 🔍 4. Type Checking (`typeof`)

```js
console.log(typeof "hello"); // string
console.log(typeof 123);     // number
console.log(typeof true);    // boolean
```

⚠️ Weird case:

```js
typeof null // "object" ❗ (JS bug, remember this)
```

---

# ⚡ 5. Truthy vs Falsy (VERY IMPORTANT for Conditions)

In JavaScript, not everything is just true/false.

---

## ❌ Falsy Values:

```js
false
0
""
null
undefined
NaN
```

---

## ✅ Truthy Values:

Everything else!

```js
"hello"
123
[]
{}
```

---

## 🔥 QA Example:

```js
let errorMessage = "";

if (errorMessage) {
  console.log("Error displayed");
}
```

👉 This will NOT run because `""` is falsy.

---

# 🧪 Real QA Examples

---

## ✅ Example 1: UI Validation

```js
let actualText = "Login successful";
let expectedText = "Login successful";

console.log(actualText === expectedText); // true
```

---

## ✅ Example 2: API Response

```js
let response = {
  status: 200,
  data: null
};

console.log(response.data); // null
```

---

## ✅ Example 3: Bug Scenario

```js
let value;

if (value) {
  console.log("Has value");
}
```

👉 This will NOT run → because `undefined` is falsy

---

# 🧠 Mental Model

| Type      | QA Usage           |
| --------- | ------------------ |
| string    | UI text, inputs    |
| number    | counts, prices     |
| boolean   | assertions         |
| null      | empty API response |
| undefined | missing data bug   |
| object    | JSON/API           |
| array     | lists/tables       |

---

# 🧪 Mini Exercise

Try this:

```js
let name = "QA";
let count = 0;
let isActive = false;

console.log(typeof name);
console.log(typeof count);
console.log(typeof isActive);
```

👉 Then test:

```js
if (count) {
  console.log("Count exists");
}
```

Question:
👉 Will it print? Why?

