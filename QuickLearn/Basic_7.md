# 🧠 1. What is an Object?

An object is:

> A collection of key-value pairs

---

## 🧪 Basic Example

```js
let user = {
  name: "Manash",
  age: 30,
  isAdmin: true
};
```

👉 Think of it like:

* `name` → key
* `"Manash"` → value

---

## 🧠 QA Thinking

| Object | QA Meaning               |
| ------ | ------------------------ |
| Object | API response / test data |
| Key    | Field name               |
| Value  | Actual data              |

---

# 🔹 2. Accessing Object Values

---

## ✅ Dot Notation (Most Common)

```js
console.log(user.name); // Manash
```

---

## ✅ Bracket Notation

```js
console.log(user["age"]); // 30
```

---

## 🔥 When to use bracket notation?

When key is dynamic:

```js
let key = "name";
console.log(user[key]); // Manash
```

---

# 🔹 3. Nested Objects (🔥 VERY IMPORTANT)

Real APIs are always nested.

---

## 🧪 Example

```js
let response = {
  status: 200,
  data: {
    user: {
      name: "Manash",
      role: "admin"
    }
  }
};
```

---

## ✅ Access Nested Values

```js
console.log(response.data.user.name); // Manash
```

---

## 🧪 QA Example

```js
if (response.data.user.role === "admin") {
  console.log("Correct role");
}
```

---

# 🔹 4. Adding / Updating Values

---

## ✅ Update

```js
user.name = "QA Engineer";
```

---

## ✅ Add new property

```js
user.email = "test@test.com";
```

---

# 🔹 5. Objects Inside Arrays (REAL API CASE)

---

```js
let users = [
  { name: "Manash", role: "admin" },
  { name: "Vivek", role: "user" }
];
```

---

## ✅ Access

```js
console.log(users[0].name); // Manash
```

---

## 🔥 QA Scenario

```js
for (let user of users) {
  if (user.role === "admin") {
    console.log("Admin found:", user.name);
  }
}
```

---

# 🔹 6. Destructuring (🔥 MODERN JS, USED IN FRAMEWORKS)

---

## Without Destructuring

```js
let name = user.name;
let age = user.age;
```

---

## ✅ With Destructuring

```js
let { name, age } = user;
```

---

## 🧪 QA Example

```js
let response = {
  status: 200,
  message: "Success"
};

let { status, message } = response;

console.log(status);  // 200
console.log(message); // Success
```

---

# 🔥 Why Destructuring Matters

You’ll see this a lot in:

* Playwright test code
* API responses
* Fixtures

---

# 🔹 7. Optional Chaining (🔥 Prevents Crashes)

---

## Problem:

```js
console.log(response.data.user.name);
```

👉 If `user` is missing → ❌ crash

---

## ✅ Solution:

```js
console.log(response.data?.user?.name);
```

👉 Returns `undefined` instead of crashing

---

# 🧪 Real QA Scenarios

---

## ✅ API Validation

```js
let response = {
  status: 200,
  data: {
    name: "Manash"
  }
};

if (response.status === 200) {
  console.log(response.data.name);
}
```

---

## ❌ Bug Scenario

```js
let response = {
  status: 200
};

console.log(response.data.name); // ❌ error
```

---

## ✅ Safe Version

```js
console.log(response.data?.name);
```

---

# 🧠 Mental Model

| Concept           | QA Usage              |
| ----------------- | --------------------- |
| Object            | API response          |
| Nested object     | JSON response         |
| Array of objects  | UI tables / API lists |
| Destructuring     | clean code            |
| Optional chaining | avoid test crashes    |

---

# 🧪 Mini Exercise

What will this output?

```js
let response = {
  data: {
    user: {
      name: "QA"
    }
  }
};

let { data } = response;

console.log(data.user.name);
```

