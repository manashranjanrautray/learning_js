
---

# 🟢 **Lesson 16: JavaScript in Automation Tools (Playwright/Cypress Mapping)**

## 🎯 Goal

By the end, you’ll:

* See how JS concepts map to automation
* Understand real test scripts
* Stop treating Playwright/Cypress as “magic”

---

# 🧠 1. Big Picture

Everything you learned so far maps like this:

| JavaScript Concept | Automation Meaning  |
| ------------------ | ------------------- |
| Variable           | Test data           |
| Function           | Test step           |
| Object             | Page / API response |
| Array              | List of elements    |
| Async/Await        | Wait for UI         |
| DOM                | UI structure        |
| Selector           | Locator             |

---

# 🔹 2. A Simple Automation Flow

Let’s take a real scenario:

👉 “Login to a website and verify success message”

---

## 🧪 Raw JavaScript Thinking

```js id="nvy6ja"
let username = "admin";
let password = "1234";
```

---

## 🔁 Automation Version (Conceptual)

```js id="ijz98r"
await page.fill("#username", username);
await page.fill("#password", password);
await page.click("#login");

let message = await page.textContent("#message");

if (message === "Success") {
  console.log("Test Passed");
}
```

---

👉 This is just:

* variables
* async/await
* condition

Nothing new—just applied

---

# 🔹 3. Understanding `page` Object

In tools like:

* Playwright

👉 `page` represents:

> The browser tab (DOM + actions)

---

## Example:

```js id="fm6kkg"
await page.click("#submit");
```

👉 Internally:

```js id="2mh6p1"
document.querySelector("#submit").click();
```

---

# 🔹 4. Locators (Selectors)

---

## JS DOM

```js id="0qr4mn"
document.querySelector("#username");
```

---

## Automation

```js id="qeq13r"
await page.locator("#username");
```

---

👉 Same concept, different API

---

# 🔹 5. Async is Everywhere

---

## ❌ Wrong

```js id="fhfa5k"
page.click("#login");
page.fill("#username", "admin");
```

👉 Runs without waiting → flaky

---

## ✅ Correct

```js id="fdas6g"
await page.fill("#username", "admin");
await page.click("#login");
```

---

# 🔹 6. Assertions (Validation)

---

## JS Style

```js id="d7ah1d"
if (value === "Success") {
  console.log("Pass");
}
```

---

## Automation Style

```js id="3xj2c1"
expect(message).toBe("Success");
```

---

👉 Same logic, better syntax

---

# 🔹 7. Real Test Example

---

```js id="r42pvh"
test("Login Test", async ({ page }) => {
  await page.goto("https://example.com");

  await page.fill("#username", "admin");
  await page.fill("#password", "1234");
  await page.click("#login");

  let message = await page.textContent("#message");

  expect(message).toBe("Success");
});
```

---

## 🧠 What’s happening?

| Line     | Concept         |
| -------- | --------------- |
| `test()` | function        |
| `async`  | async flow      |
| `await`  | wait for UI     |
| `page`   | DOM interaction |
| `expect` | assertion       |

---

# 🔹 8. Handling Lists (Real UI Case)

---

```js id="bgudic"
let items = await page.locator(".item").allTextContents();

for (let item of items) {
  console.log(item);
}
```

---

👉 This uses:

* arrays
* loops
* async

---

# 🔹 9. Common QA Mistakes

---

## ❌ Not using await

```js id="l8e3c1"
let text = page.textContent("#msg"); // ❌ Promise
```

---

## ❌ Weak selectors

```js id="k7q9a3"
page.click("button"); // ❌ too generic
```

---

## ❌ Hard waits

```js id="m3t7l2"
await page.waitForTimeout(5000); // ❌ bad practice
```

---

## ✅ Better approach

```js id="r8w5c4"
await page.waitForSelector("#message");
```

---

# 🔥 Real QA Insight

👉 Automation is NOT new knowledge
👉 It is **JavaScript applied to browser actions**

---

# 🧠 Mental Model Upgrade

Before:

> “Playwright is complex”

Now:

> “It’s just JS + async + DOM”

---

# 🧪 Mini Exercise

What is wrong in this code?

```js id="7j6l2x"
test("Check message", async ({ page }) => {
  page.goto("https://example.com");

  let msg = page.textContent("#message");

  expect(msg).toBe("Success");
});
```
