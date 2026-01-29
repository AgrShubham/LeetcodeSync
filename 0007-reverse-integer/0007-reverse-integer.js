function reverse(x) {
    const INT_MIN = -2147483648; // -2^31
    const INT_MAX = 2147483647;  // 2^31 - 1
    
    let result = 0;
    
    while (x !== 0) {
        // Extract the last digit
        const digit = x % 10;
        
        // Remove the last digit from x
        x = Math.trunc(x / 10); // Math.trunc handles both positive and negative
        
        // Check for overflow BEFORE updating result
        // For positive overflow: result > INT_MAX/10 or (result == INT_MAX/10 && digit > 7)
        if (result > Math.trunc(INT_MAX / 10) || 
            (result === Math.trunc(INT_MAX / 10) && digit > 7)) {
            return 0;
        }
        
        // For negative overflow: result < INT_MIN/10 or (result == INT_MIN/10 && digit < -8)
        if (result < Math.trunc(INT_MIN / 10) || 
            (result === Math.trunc(INT_MIN / 10) && digit < -8)) {
            return 0;
        }
        
        // Safe to update result
        result = result * 10 + digit;
    }
    
    return result;
}

// Test cases
console.log(reverse(123));      // Output: 321
console.log(reverse(-123));     // Output: -321
console.log(reverse(120));      // Output: 21
console.log(reverse(1534236469)); // Output: 0 (would overflow)
console.log(reverse(-2147483648)); // Output: 0 (would overflow)
console.log(reverse(0));        // Output: 0