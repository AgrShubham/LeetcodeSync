/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    // Helper function to check for alphanumeric characters using ASCII values
    // This is significantly faster than using Regular Expressions
    const isAlphaNumeric = (char) => {
        const code = char.charCodeAt(0);
        return (code >= 48 && code <= 57) || // Numbers 0-9
               (code >= 65 && code <= 90) || // Uppercase A-Z
               (code >= 97 && code <= 122);  // Lowercase a-z
    };

    while (left < right) {
        // Skip non-alphanumeric characters from the left
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        
        // Skip non-alphanumeric characters from the right
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // Compare the valid characters in lowercase
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false; // Mismatch found, not a palindrome
        }

        // Move both pointers inward to check the next set of characters
        left++;
        right--;
    }

    // If all characters match, it's a palindrome
    return true;
};