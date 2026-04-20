# 🟣 **Lesson 11: Async / Await (🔥 MOST IMPORTANT FOR UI AUTOMATION)**

## 🎯 Goal

* Replace `.then()` with clean syntax
* Write readable automation code
* Understand how Playwright actually works

---

# 🔹 1. Problem with `.then()`

---

```js
getData()
  .then(res => {
    console.log(res);
  });
```

👉 Works, but:

* Hard to read in long chains
* Becomes messy in real tests

---

# 🔹 2. Async / Await (Solution)

---

## ✅ Basic Syntax

```js
async function test() {
  let result = await getData();
  console.log(result);
}
```

---

## 🔥 Key Rules

| Keyword | Meaning                     |
| ------- | --------------------------- |
| `async` | function returns a promise  |
| `await` | wait for promise to resolve |

---

# 🔹 3. Example Conversion

---

## ❌ Using `.then()`

```js
getData().then(res => {
  console.log(res);
});
```

---

## ✅ Using `async/await`

```js
async function run() {
  let res = await getData();
  console.log(res);
}
```

---

👉 Cleaner and easier to debug

---

# 🔹 4. Real QA Example

---

```js
function getUser() {
  return Promise.resolve({ name: "Manash" });
}

async function test() {
  let user = await getUser();
  console.log(user.name);
}
```

---

# 🔥 This is EXACTLY how automation works

In tools like:

* Playwright

You’ll see:

```js
await page.click();
await page.fill();
await page.locator();
```

👉 Every step is async

---

# 🔹 5. Error Handling with `try/catch`

---

```js
async function test() {
  try {
    let data = await getData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

---

👉 Equivalent to `.catch()`

---

# 🔹 6. Common Mistakes

---

## ❌ Forgetting `await`

```js
let data = getData(); // ❌ Promise, not value
```

---

## ❌ Using `await` without `async`

```js
function test() {
  let data = await getData(); // ❌ error
}
```

---

## ❌ Not handling errors

👉 Causes test crashes

---

# 🔥 Real QA Scenario

---

## ❌ Wrong

```js
page.click();
page.fill();
```

👉 Runs without waiting → flaky tests

---

## ✅ Correct

```js
await page.click();
await page.fill();
```

---

# 🧠 Mental Model

| Concept   | QA Meaning      |
| --------- | --------------- |
| async     | test function   |
| await     | wait for UI/API |
| promise   | async result    |
| try/catch | error handling  |

---

# 🧪 Mini Exercise

What will this output?

```js
function getNumber() {
  return Promise.resolve(5);
}

async function test() {
  let num = await getNumber();
  console.log(num * 2);
}

test();
```

