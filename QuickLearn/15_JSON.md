
# 🧠 1. What is JSON?

JSON is:

> A format to store and exchange data

---

## 🧪 Example JSON

```json
{
  "name": "Manash",
  "age": 30,
  "isAdmin": true
}
```

---

## 🧠 Important Rule

👉 JSON looks like a JS object, BUT:

* Keys are always **strings**
* Uses **double quotes**

---

# 🔹 2. JSON vs JavaScript Object

---

## ✅ JavaScript Object

```js
let user = {
  name: "Manash",
  age: 30
};
```

---

## ✅ JSON

```json
{
  "name": "Manash",
  "age": 30
}
```

---

### 🔥 Key Difference

| Feature | JS Object        | JSON              |
| ------- | ---------------- | ----------------- |
| Keys    | no quotes needed | must be in quotes |
| Usage   | inside code      | data exchange     |

---

# 🔹 3. Where QA Uses JSON

---

## ✅ 1. API Responses (MOST COMMON)

```json
{
  "status": 200,
  "data": {
    "user": {
      "name": "Manash"
    }
  }
}
```

---

## 🧪 Access in JS

```js
let response = {
  status: 200,
  data: {
    user: {
      name: "Manash"
    }
  }
};

console.log(response.data.user.name);
```

---

# 🔹 4. Converting JSON ↔ JS Object

---

## ✅ JSON → JS Object

```js
let jsonString = '{"name": "Manash"}';

let obj = JSON.parse(jsonString);

console.log(obj.name); // Manash
```

---

## ✅ JS Object → JSON

```js
let user = { name: "Manash" };

let json = JSON.stringify(user);

console.log(json);
```

---

# 🔥 QA Use Case

---

## API returns JSON (string)

```js
let response = '{"status":200}';
```

👉 Convert:

```js
let data = JSON.parse(response);
```

---

# 🔹 5. JSON in API Testing

---

## 🧪 Example API Response

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "id": 101,
    "name": "Product A"
  }
}
```

---

## ✅ Validation

```js
expect(response.status).toBe(200);
expect(response.data.name).toBe("Product A");
```

---

# 🔹 6. JSON in UI Automation

---

## Scenario: Validate UI with API

---

```js
let apiResponse = await getData();

let uiText = await page.textContent("#name");

expect(uiText).toBe(apiResponse.data.name);
```

---

👉 This is **real-world QA validation**

---

# 🔹 7. JSON Arrays (VERY COMMON)

---

```json
{
  "users": [
    { "name": "A" },
    { "name": "B" }
  ]
}
```

---

## Access:

```js
console.log(response.users[0].name);
```

---

# 🔥 QA Scenario

```js
for (let user of response.users) {
  console.log(user.name);
}
```

---

# 🔹 8. Nested JSON (Real APIs)

---

```json
{
  "order": {
    "id": 1,
    "items": [
      {
        "name": "Laptop",
        "price": 50000
      }
    ]
  }
}
```

---

## Access:

```js
console.log(response.order.items[0].price);
```

---

# ⚠️ Common Mistakes

---

## ❌ Forgetting parse

```js
let data = '{"name":"QA"}';

console.log(data.name); // ❌ undefined
```

---

## ✅ Correct

```js
let obj = JSON.parse(data);
console.log(obj.name);
```

---

## ❌ Wrong key access

```js
response.data.userName // ❌ if actual is name
```

---

# 🧠 Mental Model

| Concept   | QA Meaning             |
| --------- | ---------------------- |
| JSON      | API data               |
| Object    | Parsed JSON            |
| Array     | List response          |
| Parse     | Convert to usable data |
| Stringify | Send data              |

---
