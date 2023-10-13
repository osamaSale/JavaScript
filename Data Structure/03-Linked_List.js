// Construct Single Node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
// Create/Get/Remove Nodes From Linked List
class Linked_List {
    constructor() {
        this.head = null;
        this.size++;
    }

    // 1 insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    // 2 insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;
        // if empty , make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    // 3 Get at index
    insertAt(data, index) {
        //  If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }
    // 4 Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                console.log(current.data);
                return " index " + current.data;
            }
            count++;
            current = current.next;
        }

        return null;
    }
    // 5 Remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }
    // 6 Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }
    // 7 Print list data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const li = new Linked_List();
/*
 li.insertFirst(100);
 li.insertFirst(200);
 li.insertFirst(300);
 li.insertLast(400);
 li.insertAt(500, 3);
 li.removeAt(1)
 li.getAt(0)
 li.clearList()
 li.printListData(); 
 
 */
