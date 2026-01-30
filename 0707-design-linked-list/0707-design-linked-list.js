class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    /**
     * Get the value of the index-th node in the linked list
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) {
            return -1;
        }
        
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        
        return current.val;
    }
    
    /**
     * Add a node of value val before the first element
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const newNode = new Node(val);
        
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        
        this.size++;
    }
    
    /**
     * Append a node of value val as the last element
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const newNode = new Node(val);
        
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        this.size++;
    }
    
    /**
     * Add a node of value val before the index-th node
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) {
            return;
        }
        
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }
        
        const newNode = new Node(val);
        let current = this.head;
        
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
        
        this.size++;
    }
    
    /**
     * Delete the index-th node in the linked list
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return;
        }
        
        // Delete head
        if (index === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            this.size--;
            return;
        }
        
        // Delete tail
        if (index === this.size - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
            return;
        }
        
        // Delete middle node
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        
        current.prev.next = current.next;
        current.next.prev = current.prev;
        
        this.size--;
    }
}

// Test with the example
const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
console.log(myLinkedList.get(1));              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
console.log(myLinkedList.get(1));              // return 3