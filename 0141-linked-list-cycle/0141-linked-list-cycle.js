/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;  // They met! Cycle exists
        }
    }
    
    return false;
}

// Visualization with cycle:
// 1 -> 2 -> 3 -> 4
//      ^         |
//      |_________|
//
// Eventually slow and fast will meet at some node