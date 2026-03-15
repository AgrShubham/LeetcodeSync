/**
 * @param {string} s
 * @return {number}
 */
function maxFreqSum(s) {
    const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
    const freq = {};

    // Step 1: Count frequency of each character
    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let maxVowel = 0;
    let maxConsonant = 0;

    // Step 2: Find max frequency for vowels and consonants separately
    for (const [ch, count] of Object.entries(freq)) {
        if (VOWELS.has(ch)) {
            maxVowel = Math.max(maxVowel, count);
        } else {
            maxConsonant = Math.max(maxConsonant, count);
        }
    }

    // Step 3: Return the sum
    return maxVowel + maxConsonant;
}