/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
function debounce(fn, t) {
    let timeoutId = null;
    
    return function(...args) {
        // Clear the previous timer if it exists
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        
        // Set a new timer
        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);
    };
}
/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */