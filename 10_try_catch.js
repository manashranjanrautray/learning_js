/**
 * Error Handling explanation and examples of Try...Catch statements in JavaScript
Try...Catch Examples
Try...Catch with Finally
Try...Catch with Async/Await
*/

// Try...Catch Examples
try {
    let result = 10 / 0; // This will not throw an error in JavaScript, but let's assume it does for demonstration
    console.log(result);
} catch (error) {
    console.error("An error occurred: " + error.message);
}
// Try...Catch with Finally
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.error("An error occurred: " + error.message);
} finally {
    console.log("This will always execute, regardless of an error.");
}
// Try...Catch with Async/Await
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("An error occurred while fetching data: " + error.message);
    }
}
