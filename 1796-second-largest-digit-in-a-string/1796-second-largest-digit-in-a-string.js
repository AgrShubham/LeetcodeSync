/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    // Use a Set to store unique digits
    const digits = new Set();
    
    // Extract all digits from the string
    for (let char of s) {
        if (char >= '0' && char <= '9') {
            digits.add(parseInt(char));
        }
    }
    
    // Convert Set to array and sort in descending order
    const sortedDigits = Array.from(digits).sort((a, b) => b - a);
    
    // Return second largest if it exists, otherwise -1
    return sortedDigits.length >= 2 ? sortedDigits[1] : -1;
};