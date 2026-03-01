/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
    // Create a dummy node to handle edge cases (e.g., removing the head)
    const dummy = new ListNode(0);
    dummy.next = head;
    
    let current = dummy;
    
    while (current.next !== null) {
        if (current.next.val === val) {
            // Skip the node by pointing to the one after it
            current.next = current.next.next;
        } else {
            // Move forward only if we didn't delete
            current = current.next;
        }
    }
    
    return dummy.next;
}