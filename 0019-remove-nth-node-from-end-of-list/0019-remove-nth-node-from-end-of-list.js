/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Advance fast by n+1 steps
    // (n+1 so that slow lands just BEFORE the target node)
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both until fast falls off the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Delete the target node
    slow.next = slow.next.next;

    return dummy.next;
}