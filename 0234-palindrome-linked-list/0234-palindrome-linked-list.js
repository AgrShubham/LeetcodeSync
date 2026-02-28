/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let nextTemp = current.next;  // Save next
        current.next = prev;          // Reverse the pointer
        prev = current;               // Move prev forward
        current = nextTemp;           // Move current forward
    }
    
    return prev;  // New head
}
function isPalindrome(head) {
    // Step 1: Find middle
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Step 2: Reverse second half
    let secondHalf = reverseList(slow);
    let firstHalf = head;
    
    // Step 3: Compare
    while (secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    return true;
}

// Example: 1 -> 2 -> 2 -> 1
// First half: 1 -> 2
// Second half reversed: 1 -> 2
// They match! Palindrome!