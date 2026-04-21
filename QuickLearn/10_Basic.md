
---

# 🟣 Now Let’s Move to Lesson 10: Promises

This is where async becomes **controllable** instead of confusing.

---

# 🟣 **Lesson 10: Promises (Handling Async Properly)**

## 🎯 Goal

* Understand what a Promise is
* Use `.then()` and `.catch()`
* Prepare for `async/await` (next lesson)

---

# 🔹 1. What is a Promise?

A Promise is:

> A placeholder for a future value

---

## 🧪 Example (Real-life analogy)

👉 Ordering food:

* Order placed → **pending**
* Delivered → **resolved**
* Failed → **rejected**

---

## 🔹 Promise States

| State    | Meaning     |
| -------- | ----------- |
| Pending  | In progress |
| Resolved | Success     |
| Rejected | Failed      |

---

# 🔹 2. Creating a Promise

---

```js
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
```

---

# 🔹 3. Consuming a Promise (`.then`, `.catch`)

---

```js
myPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
```

---

# 🧪 QA Example (API Simulation)

```js
function getData() {
  return new Promise((resolve, reject) => {
    resolve({ status: 200 });
  });
}

getData()
  .then(response => {
    console.log(response.status);
  })
  .catch(error => {
    console.log(error);
  });
```

---

# 🔹 4. Chaining Promises

---

```js
getData()
  .then(res => {
    console.log("Step 1");
    return res;
  })
  .then(res => {
    console.log("Step 2");
  });
```

---

👉 Used in:

* Multiple API validations
* Sequential steps

---

# 🔹 5. Error Handling

---

```js
getData()
  .then(res => {
    throw new Error("Something went wrong");
  })
  .catch(err => {
    console.log(err.message);
  });
```

---

# 🔥 Real QA Scenario

---

## ❌ Without Promise Handling

```js
let data = getData();
console.log(data); // ❌ Promise, not actual data
```

---

## ✅ Correct Way

```js
getData().then(data => {
  console.log(data);
});
```

---

# 🧠 Mental Model

| Concept | QA Meaning       |
| ------- | ---------------- |
| Promise | API/UI result    |
| resolve | success response |
| reject  | failure          |
| then    | validate success |
| catch   | handle failure   |

---

# ⚠️ Common Mistakes

---

## ❌ Forgetting `return` in chain

```js
.then(res => {
  res; // ❌ lost value
})
```

---

## ❌ Nested Promises (callback hell)

```js
.then(() => {
  getData().then(() => {
    // messy ❌
  });
});
```

---

# 🧪 Mini Exercise

What will this output?

```js
let promise = new Promise((resolve, reject) => {
  resolve(10);
});

promise
  .then(num => {
    return num * 2;
  })
  .then(num => {
    console.log(num);
  });
```

---

