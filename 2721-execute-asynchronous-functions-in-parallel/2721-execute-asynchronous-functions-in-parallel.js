/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        // Array to store results in the correct order
        const results = new Array(functions.length);
        
        // Counter to track how many promises have resolved
        let resolvedCount = 0;
        
        // If empty array, resolve immediately with empty array
        if (functions.length === 0) {
            resolve([]);
            return;
        }
        
        // Execute all functions and handle their promises
        functions.forEach((fn, index) => {
            // Execute the function to get the promise
            fn()
                .then((value) => {
                    // Store the resolved value at the correct index
                    results[index] = value;
                    
                    // Increment the counter
                    resolvedCount++;
                    
                    // If all promises have resolved, resolve the main promise
                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    // If any promise rejects, reject the main promise immediately
                    reject(error);
                });
        });
    });
};