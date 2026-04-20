# 🟤 Now Let’s Move to Lesson 13: Modules (Framework Building)

This is where you start thinking like:
👉 **Automation framework developer, not just script writer**

---

# 🟤 **Lesson 13: Modules (import / export)**

## 🎯 Goal

* Split code into multiple files
* Reuse functions across tests
* Build scalable automation frameworks

---

# 🔹 1. Problem Without Modules

---

```js
// everything in one file ❌
function login() {}
function logout() {}
function addItem() {}
```

👉 Becomes:

* messy
* hard to maintain
* not reusable

---

# 🔹 2. What are Modules?

A module is:

> A file that exports reusable code

---

# 🔹 3. Exporting Functions

---

## ✅ Named Export

```js id="p3krli"
// utils.js
export function login() {
  console.log("Login function");
}
```

---

# 🔹 4. Importing Functions

---

```js id="95n1zd"
// test.js
import { login } from "./utils.js";

login();
```

---

# 🔹 5. Default Export

---

```js id="caw96w"
// utils.js
export default function login() {
  console.log("Login");
}
```

---

## Import:

```js id="fa0ygl"
import login from "./utils.js";
```

---

# 🔥 Difference

| Type    | Import Style |
| ------- | ------------ |
| Named   | `{ login }`  |
| Default | `login`      |

---

# 🔹 6. Multiple Exports

---

```js id="nl9r4r"
// utils.js
export function login() {}
export function logout() {}
```

---

```js id="1wz2g6"
import { login, logout } from "./utils.js";
```

---

# 🔥 Real QA Structure

---

### Example Framework:

```
/tests
  login.spec.js
/utils
  auth.js
/pages
  loginPage.js
```

---

## 🧪 Example

### utils/auth.js

```js id="ojdjfy"
export function login(user, pass) {
  console.log("Logging in", user);
}
```

---

### test file

```js id="s6ho5g"
import { login } from "../utils/auth.js";

login("admin", "1234");
```

---

# 🔥 Why Modules Matter

In tools like:

* Playwright

You’ll ALWAYS:

* split files
* reuse functions
* build Page Object Model

---

# ⚠️ Common Mistakes

---

## ❌ Wrong path

```js
import { login } from "utils.js"; // ❌
```

---

## ✅ Correct

```js
import { login } from "./utils.js";
```

---

## ❌ Mixing default & named incorrectly

---

# 🧪 Mini Exercise

Assume:

```js
// utils.js
export function add(a, b) {
  return a + b;
}
```

What will this print?

```js
import { add } from "./utils.js";

console.log(add(2, 3));
```
