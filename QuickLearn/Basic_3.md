# 🔹 1. Comparison Operators

---

## ✅ Loose Equality (`==`) — ⚠️ Avoid

```js
console.log(5 == "5"); // true ❗
```

👉 Why?

* JS converts types automatically

---

## ✅ Strict Equality (`===`) — ✅ Always Use

```js
console.log(5 === "5"); // false ✅
```

👉 Checks:

* Value
* Type

---

## 🔥 QA Rule (Very Important)

👉 ALWAYS use `===` in automation

---

## 🧪 QA Example

```js
let actual = "200";
let expected = 200;

console.log(actual == expected);  // true ❌
console.log(actual === expected); // false ✅
```

👉 This catches real bugs in API/UI mismatch

---

# 🔸 2. Other Comparison Operators

```js
>   // greater than
<   // less than
>=  // greater or equal
<=  // less or equal
```

---

## Example:

```js
let price = 100;

if (price > 50) {
  console.log("Valid price");
}
```

---

# 🔹 3. Logical Operators

---

## ✅ AND (`&&`)

```js
if (true && true) // true
```

QA Example:

```js
if (isVisible && isEnabled) {
  console.log("Click element");
}
```

---

## ✅ OR (`||`)

```js
if (false || true) // true
```

QA Example:

```js
if (errorMessage || warningMessage) {
  console.log("Show alert");
}
```

---

## ✅ NOT (`!`)

```js
!true // false
```

QA Example:

```js
if (!isLoggedIn) {
  console.log("Redirect to login");
}
```

---

# 🔸 4. Ternary Operator (Short If-Else)

```js
condition ? value1 : value2;
```

---

## Example:

```js
let status = isLoggedIn ? "Welcome" : "Please Login";
```

---

# 🧪 Real QA Scenarios

---

## ✅ Scenario 1: Login Validation

```js
let actualMessage = "Success";
let expectedMessage = "Success";

if (actualMessage === expectedMessage) {
  console.log("Test Passed");
}
```

---

## ✅ Scenario 2: Button State

```js
let isVisible = true;
let isEnabled = true;

if (isVisible && isEnabled) {
  console.log("Safe to click");
}
```

---

## ❌ Common Mistake

```js
if (value == null)
```

👉 This checks BOTH:

* `null`
* `undefined`

Sometimes useful, but often hides bugs.

---

# 🧪 Mini Exercise

Predict output:

```js
console.log(10 == "10");
console.log(10 === "10");

let isLoggedIn = false;

console.log(!isLoggedIn);
```

