
class Queue {
    constructor() {
        this.items = []
    }

    enqueue(items) {
        this.items.push(items)
    }
    dequeue() {
        return this.items.shift()
    }
    peek() {
        return this.items[0]
    }
    getSize() {
        return this.items.length
    }
    isEmpty() {
        return this.getSize() === 0
    }
}


const queue = new Queue()
queue.enqueue("osama")
queue.enqueue("Ahmad")
queue.enqueue("Ali")

console.log(queue)