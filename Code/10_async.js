/**
Callbacks
Promises
Async/Await
Promise.all 
*/

// Callbacks
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched";
        callback(data);
    }, 5000);// Simulating an asynchronous operation with setTimeout which takes 5 seconds to complete
}

fetchData((result) => {
    console.log(result); // Output: Data fetched after 5 seconds
});

//Issues with Callbacks
// 1. Callback Hell: When you have multiple nested callbacks, it can lead to code that is difficult to read and maintain.
// 2. Error Handling: It can be challenging to handle errors properly in a callback-based approach, as you need to ensure that errors are passed back through the callback chain.  
// 3. Inversion of Control: When using callbacks, you are giving control to the function that calls the callback, which can lead to unexpected behavior if the caller does not handle the callback correctly.


