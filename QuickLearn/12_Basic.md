# 🟣 Now Let’s Move to Lesson 12: Error Handling (Real QA Power)

This is what separates:
👉 “Script writers” vs “Reliable automation engineers”

---

# 🟣 **Lesson 12: Error Handling (try/catch + Real Failures)**

## 🎯 Goal

* Handle failures gracefully
* Prevent test crashes
* Write stable automation scripts

---

# 🔹 1. What is Error Handling?

Error handling means:

> Managing failures without breaking your script

---

# 🔹 2. `try...catch` Basics

---

```js
try {
  // code that may fail
} catch (error) {
  // handle error
}
```

---

## 🧪 Example

```js
try {
  let result = undefinedVariable; // error
} catch (error) {
  console.log("Error occurred");
}
```

---

👉 Instead of crashing → handled safely

---

# 🔹 3. Using with `async/await` (🔥 IMPORTANT)

---

```js
async function test() {
  try {
    let data = await getData();
    console.log(data);
  } catch (error) {
    console.log("Failed:", error);
  }
}
```

---

👉 This is **real automation pattern**

---

# 🔹 4. Throwing Custom Errors

---

```js
function validateStatus(status) {
  if (status !== 200) {
    throw new Error("Invalid status code");
  }
}
```

---

## 🧪 QA Example

```js
try {
  validateStatus(500);
} catch (error) {
  console.log(error.message);
}
```

---

# 🔥 Real QA Scenario

---

## ❌ Without Error Handling

```js
let user = response.data.user.name; // ❌ crash if missing
```

---

## ✅ With Handling

```js
try {
  let user = response.data.user.name;
  console.log(user);
} catch (e) {
  console.log("User not found");
}
```

---

# 🔹 5. `finally` Block

---

```js
try {
  console.log("Try block");
} catch (e) {
  console.log("Catch block");
} finally {
  console.log("Always runs");
}
```

---

👉 Useful for:

* Cleanup
* Logging
* Closing sessions

---

# 🔥 Automation Insight

In tools like:

* Playwright

You often rely on:

* built-in retries
* assertions

But still use `try/catch` for:

* optional steps
* cleanup
* custom validations

---

# ⚠️ Common Mistakes

---

## ❌ Swallowing errors

```js
catch (e) {
  // nothing ❌
}
```

👉 Hides failures → dangerous

---
