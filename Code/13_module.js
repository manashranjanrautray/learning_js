/**
 * Explain how modules work in JavaScript and provide an example of how to create and use a module.
 * Export before declarations
Export apart from declarations
Import *
Import “as”
Export “as”
Export default
Re-export
*/

// In JavaScript, modules are a way to organize and encapsulate code into reusable and maintainable units. A module can export functions, objects, or values that can be imported and used in other parts of the application. This helps to avoid global namespace pollution and promotes code reusability.

// There are two main types of modules in JavaScript: CommonJS (used in Node.js) and ES6 modules (used in modern JavaScript). Here, we will focus on ES6 modules.
// To create a module, you can use the `export` keyword to export functions, objects, or values. For example, let's create a simple module that provides utility functions for math operations:

// mathUtils.js
export function add(a, b) {
    return a + b;
}
// Exporting another function
export function subtract(a, b) {
    return a - b;
}

// Now, we can import and use these functions in another file:  
// main.js
import { add, subtract } from './mathUtils.js';
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
// In this example, we created a module called `mathUtils.js` that exports two functions: `add` and `subtract`. We then imported these functions in `main.js` using the `import` statement and used them to perform some calculations. This demonstrates how modules help to organize code and promote reusability in JavaScript.
// Note: When using ES6 modules in a browser environment, you need to include the `type="module"` attribute in the script tag:
// <script type="module" src="main.js"></script>
// This tells the browser to treat the script as a module and allows you to use the `import` and `export` syntax.
// In Node.js, you can use CommonJS modules by using `module.exports` and `require` instead of `export` and `import`. However, with the introduction of ES6 modules, you can also use the same syntax in Node.js by enabling ES6 module support.
// For example, in Node.js, you can create a module like this:
// mathUtils.js
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
module.exports = { add, subtract };
// And then import it in another file:
// main.js
const { add, subtract } = require('./mathUtils.js');
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
// This demonstrates how to create and use modules in both ES6 and CommonJS formats in JavaScript.

//Dynamic imports
// Dynamic imports allow you to load modules on demand, which can improve performance by reducing the initial load time of your application. You can use the `import()` function to dynamically import a module when needed. For example:
// main.js
async function loadMathUtils() {
    const mathUtils = await import('./mathUtils.js');
    console.log(mathUtils.add(5, 3));
    console.log(mathUtils.subtract(5, 3));
}
loadMathUtils();
// In this example, the `loadMathUtils` function dynamically imports the `mathUtils.js` module when it is called. This allows you to load the module only when it is needed, which can help to optimize the performance of your application.    
// Re-exporting modules
// You can also re-export modules, which allows you to create a single entry point for multiple modules. For example:
// index.js
export { add, subtract } from './mathUtils.js';
// main.js
import { add, subtract } from './index.js';
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
// In this example, we re-exported the `add` and `subtract` functions from `mathUtils.js` in `index.js`. This allows us to import these functions from a single entry point (`index.js`) instead of importing them directly from `mathUtils.js`. This can help to simplify the import statements and improve the organization of your code. 
// Exporting default values
// You can also export a default value from a module, which allows you to import it without using curly braces. For example:
// mathUtils.js
export default function multiply(a, b) {
    return a * b;
}
// main.js
import multiply from './mathUtils.js';
console.log(multiply(5, 3)); // Output: 15
// In this example, we exported a default function `multiply` from `mathUtils.js`. When importing it in `main.js`, we can simply use the name `multiply` without curly braces, as it is the default export of the module. This can be useful when you want to export a single value or function from a module.
// Exporting with aliases
// You can also export values with aliases, which allows you to give them different names when importing. For example:
// mathUtils.js
function add(a, b) {
    return a + b;
}   
function subtract(a, b) {
    return a - b;
}
export { add as sum, subtract as difference };
// main.js
import { sum, difference } from './mathUtils.js';
console.log(sum(5, 3)); // Output: 8
console.log(difference(5, 3)); // Output: 2
// In this example, we exported the `add` function as `sum` and the `subtract` function as `difference`. When importing them in `main.js`, we can use the aliases `sum` and `difference` instead of their original names. This can help to improve the readability of your code and make it more descriptive.
// This demonstrates how to use aliases when exporting and importing modules in JavaScript.
//importing all exports from a module
// You can also import all exports from a module using the `import * as` syntax. This allows you to access all exported values under a single namespace. For example:
// mathUtils.js
export function add(a, b) {
    return a + b;
}   
export function subtract(a, b) {
    return a - b;
}
// main.js
import * as mathUtils from './mathUtils.js';
console.log(mathUtils.add(5, 3)); // Output: 8
console.log(mathUtils.subtract(5, 3)); // Output: 2
// In this example, we imported all exports from `mathUtils.js` under the namespace `mathUtils`. We can then access the `add` and `subtract` functions using the `mathUtils` namespace. This can be useful when you want to import multiple values from a module and keep them organized under a single namespace.  
// This demonstrates how to import all exports from a module using the `import * as` syntax in JavaScript.
// Note: When using ES6 modules in a browser environment, you need to ensure that your server supports serving ES6 modules and that you are using the correct file extensions (e.g., `.js` for JavaScript files). Additionally, when using modules in Node.js, you may need to enable ES6 module support by adding `"type": "module"` to your `package.json` file or using the `.mjs` file extension for your module files.
// This concludes the explanation of how modules work in JavaScript and how to create and use them effectively in your applications. Modules are a powerful tool for organizing and structuring your code, and they play a crucial role in modern JavaScript development.






