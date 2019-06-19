const _Node = require('./Node');


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);
        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            this.last.next = node;
            node.prev = this.last;
        }
        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;

        if (node === this.last) {
            this.last = null;
            this.first = null;
        } else {
            this.first = this.first.next;
            this.first.prev = null;
        }

        return node.value;
    }

    peek() {
        return this.first.value;
    }

    isEmpty() {
        if (this.first === null) {
            return true;
        }
        return false;
    }

    display(q) {
        let currentChar = q.first;

        while (currentChar !== null) {
            console.log(currentChar.value);
            currentChar = currentChar.next;
        }
    }
}

module.exports = Queue;