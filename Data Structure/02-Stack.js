class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        if (this.items.length == 0) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
    getSize() {
        return this.items.length;
    }
    isEmpty() {
        return this.getSize() === 0
    }
}
const stack = new Stack();

stack.push("osama")
stack.push("salem")
stack.pop()
/* 
console.log(stack.peek())
console.log(stack.getSize())
console.log(stack.isEmpty())
console.log(stack) 
*/
