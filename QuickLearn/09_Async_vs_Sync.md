
---

# 🟣 Now Let’s Move to Lesson 9: Sync vs Async (CRITICAL)

This is the **most important concept for UI automation**.

If you understand this well:

* No flaky tests
* No random failures
* No unnecessary waits

---

# 🟣 **Lesson 9: Synchronous vs Asynchronous JavaScript**

## 🎯 Goal

* Understand why JS doesn’t wait
* Learn how UI & API behave
* Prepare for Promises & async/await

---

# 🔹 1. Synchronous Code (Normal Flow)

---

## 🧪 Example

```js
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
```

👉 Output:

```
Step 1
Step 2
Step 3
```

✔️ Runs **line by line**

---

# 🔹 2. Asynchronous Code (Real World)

Some operations take time:

* API calls
* UI loading
* File reading

---

## 🧪 Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 2000);

console.log("End");
```

---

## ❓ Output?

👉 Answer:

```
Start
End
Inside timeout
```

---

## 🧠 Why?

JS does NOT wait for:

```js
setTimeout
```

👉 It continues execution

---

# 🔥 QA Analogy (Very Important)

Think of this:

```js
clickLogin();
checkDashboard();
```

👉 But UI needs time to load!

❌ Without wait → test fails

---

# 🔹 3. Call Stack Concept (Simple View)

JS executes:

1. Current line
2. Moves forward
3. Async tasks handled separately

👉 That’s why timing issues happen

---

# 🔹 4. Real QA Problem

---

## ❌ Wrong Approach

```js
clickLogin();
console.log("Checking dashboard");
```

👉 Dashboard may not be loaded yet

---

## ✅ Correct Thinking

> “This step takes time → I must wait or handle async properly”

---

# 🔥 Why This Matters for You

In tools like:

* Playwright
* Cypress

Everything is:
👉 **asynchronous**

---

# 🔹 5. Another Example

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

---

## Output:

```
A
C
B
```

👉 Even with 0 delay!

---

# 🧠 Mental Model

| Type   | Behavior     |
| ------ | ------------ |
| Sync   | Step-by-step |
| Async  | Doesn’t wait |
| UI/API | Always async |

---

# 🧪 Mini Exercise

What will this output?

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");
```
