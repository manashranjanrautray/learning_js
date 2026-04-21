# 🔹 1. What is Scope?

Scope defines:

> “Where a variable can be accessed”

---

## ✅ Types of Scope

### 1. Global Scope

```js
let appName = "TestApp";

function showApp() {
  console.log(appName);
}
```

👉 `appName` is accessible everywhere

---

### 2. Function Scope

```js
function test() {
  let message = "Inside function";
  console.log(message);
}

// console.log(message); ❌ Error
```

👉 `message` is only available inside the function

---

### 3. Block Scope (`let`, `const`)

```js
if (true) {
  let x = 10;
  console.log(x); // ✅
}

// console.log(x); ❌ Error
```

👉 This is **VERY important in automation**

---

# ⚠️ 2. `var` vs `let` / `const` (Common Bug Source)

---

## ❌ Using `var`

```js
if (true) {
  var value = 100;
}

console.log(value); // ✅ accessible (unexpected)
```

---

## ✅ Using `let`

```js
if (true) {
  let value = 100;
}

// console.log(value); ❌ Error (correct behavior)
```

---

## 🔥 QA Insight

👉 Always use:

* `const` (default)
* `let` (if value changes)

🚫 Avoid `var` in automation scripts

---

# 🔹 3. Scope Chain (How JS Finds Variables)

---

```js
let globalVar = "global";

function outer() {
  let outerVar = "outer";

  function inner() {
    console.log(globalVar);
    console.log(outerVar);
  }

  inner();
}
```

👉 JS looks:

1. Inside function
2. Then parent
3. Then global

---

# 🔹 4. Closures (The Real Concept)

Now the important part.

---

## 🧠 Definition (Simple)

A closure is:

> A function that remembers variables from its outer scope even after that scope is finished

---

## 🧪 Example

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

let counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
```

---

## 🤯 What’s happening?

* `outer()` runs once
* `inner()` still remembers `count`
* `count` is NOT reset

👉 This “memory” = **closure**

---

# 🔥 QA Analogy (Very Important)

Think of closure like:

> A test utility remembering previous state/data

---

## 🧪 QA Example

```js
function createSession(user) {
  return function() {
    console.log("User session:", user);
  };
}

let session = createSession("admin");

session(); // User session: admin
```

👉 Even after `createSession` is done, `user` is remembered

---

# 🔥 Where You’ll See This in Automation

You may not write closures directly, but they exist in:

* Test frameworks (internally)
* Callbacks
* Hooks
* Async flows

Example (awareness only):

```js
test("example", async () => {
  // closure context maintained here
});
```

---

# ⚠️ Common Mistakes

---

## ❌ Expecting block variable outside

```js
if (true) {
  let data = "test";
}

console.log(data); // ❌ Error
```

---

## ❌ Variable overwrite confusion

```js
let value = 10;

function test() {
  let value = 20;
  console.log(value); // 20
}

test();
console.log(value); // 10
```

---

# 🧪 Mini Exercise

What will this output?

```js
function outer() {
  let name = "QA";

  return function() {
    console.log(name);
  };
}

let func = outer();
func();
```

---

# 🧠 Key Takeaways

* Scope = where variables are accessible
* `let`/`const` = block scoped (safe)
* `var` = function scoped (avoid)
* Closure = function remembers outer variables

---
