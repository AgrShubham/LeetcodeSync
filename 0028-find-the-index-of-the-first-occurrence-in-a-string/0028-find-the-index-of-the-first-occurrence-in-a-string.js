var strStr = function(haystack, needle) {
    const n = haystack.length;
    const m = needle.length;

    // Edge case: if needle is empty, return 0 per common convention
    if (m === 0) return 0;

    // Iterate through haystack until there's no room left for the needle
    for (let i = 0; i <= n - m; i++) {
        let match = true;
        
        // Compare each character of the needle
        for (let j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }

        // If the inner loop finishes without finding a mismatch
        if (match) return i;
    }

    return -1;
};
