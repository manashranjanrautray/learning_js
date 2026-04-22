# 🧠 1. What is a String?

A string is:

> Text data

---

## 🧪 Examples

```js
let name = "Manash";
let message = 'Login successful';
let error = `Invalid password`;
```

---

## 🔥 3 Ways to Write Strings

| Type | Example       | When to use                 |
| ---- | ------------- | --------------------------- |
| ""   | `"Hello"`     | standard                    |
| ''   | `'Hello'`     | same as above               |
| ``   | `` `Hello` `` | dynamic strings (important) |

---

# 🔹 2. Template Literals (🔥 VERY IMPORTANT)

---

```js
let name = "Manash";

let message = `Hello ${name}`;
console.log(message);
```

👉 Output:

```
Hello Manash
```

---

## 🧪 QA Example

```js
let expectedUser = "admin";

let text = `User ${expectedUser} logged in`;

expect(text).toContain("admin");
```

---

# 🔹 3. String Length

---

```js
let text = "Hello";

console.log(text.length); // 5
```

---

## 🧪 QA Use

```js
expect(message.length).toBeGreaterThan(0);
```

---

# 🔹 4. Common String Methods (🔥 Daily Use)

---

## ✅ `toLowerCase()` / `toUpperCase()`

```js
let text = "SUCCESS";

console.log(text.toLowerCase()); // success
```

---

## 🧪 QA Example

```js
expect(actual.toLowerCase()).toBe(expected.toLowerCase());
```

👉 Avoid case mismatch failures

---

## ✅ `includes()`

```js
let msg = "Login successful";

console.log(msg.includes("success")); // true
```

---

## 🧪 QA Example

```js
expect(message.includes("success")).toBe(true);
```

---

## ✅ `startsWith()` / `endsWith()`

```js
let text = "Order123";

text.startsWith("Order"); // true
text.endsWith("123");     // true
```

---

## 🧪 QA Example

```js
expect(orderId.startsWith("ORD")).toBe(true);
```

---

## ✅ `trim()` (🔥 VERY IMPORTANT)

---

```js
let text = "  Hello  ";

console.log(text.trim()); // "Hello"
```

---

## 🧪 QA Bug Scenario

```js
let uiText = "Success ";

expect(uiText).toBe("Success"); // ❌ fail
```

---

## ✅ Fix

```js
expect(uiText.trim()).toBe("Success");
```

---

# 🔹 5. Extracting Data

---

## ✅ `slice()`

```js
let text = "Order12345";

console.log(text.slice(5)); // 12345
```

---

## 🧪 QA Example

```js
let orderText = "Order ID: 12345";

let id = orderText.slice(10);

console.log(id);
```

---

## ✅ `split()`

```js
let text = "A,B,C";

let arr = text.split(",");

console.log(arr); // ["A","B","C"]
```

---

## 🧪 QA Example

```js
let users = "A,B,C";

let userList = users.split(",");
```

---

# 🔹 6. Replace Text

---

```js
let text = "Hello QA";

let newText = text.replace("QA", "Automation");

console.log(newText);
```

---

## 🧪 QA Example

```js
let dynamicText = "Order ID: 12345";

let cleaned = dynamicText.replace(/\d+/, "ID");

console.log(cleaned);
```

---

# 🔹 7. Real QA Scenarios

---

## ✅ Validate UI Message

```js
let msg = await page.textContent("#msg");

expect(msg.trim()).toBe("Login successful");
```

---

## ✅ Partial Validation

```js
expect(msg).toContain("successful");
```

---

## ✅ Case-Insensitive Validation

```js
expect(msg.toLowerCase()).toContain("success");
```

---

# ⚠️ Common Mistakes

---

## ❌ Exact match when text is dynamic

```js
expect(msg).toBe("Order ID: 12345"); // ❌
```

---

## ✅ Better

```js
expect(msg).toContain("Order ID");
```

---

## ❌ Ignoring spaces

```js
expect("Success ").toBe("Success"); // ❌
```

---

# 🧠 Mental Model

| String Concept   | QA Usage           |
| ---------------- | ------------------ |
| template literal | dynamic test data  |
| includes         | partial validation |
| trim             | remove UI spaces   |
| toLowerCase      | avoid case issues  |
| split            | parse data         |
| slice            | extract values     |

---

# 🧪 Mini Exercise

What will this output?

```js
let text = "  QA Automation  ";

let result = text.trim().toUpperCase();

console.log(result);
```

---
