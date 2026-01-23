function isPalindrome(x) {
    // Negative numbers are not palindromes
    // Numbers ending in 0 (except 0 itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let reversedHalf = 0;
    
    // Reverse half of the number
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // For even length numbers: x === reversedHalf
    // For odd length numbers: x === Math.floor(reversedHalf / 10)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}