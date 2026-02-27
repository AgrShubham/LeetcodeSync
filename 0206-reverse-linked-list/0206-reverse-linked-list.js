/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
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