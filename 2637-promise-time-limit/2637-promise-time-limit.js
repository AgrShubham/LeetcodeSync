/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function timeLimit(fn, t) {
    return async function(...args) {
        // Create a timeout promise that rejects after t milliseconds
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });
        
        // Race between the function and the timeout
        return Promise.race([
            fn(...args),      // The actual function
            timeoutPromise    // The timeout
        ]);
    };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */