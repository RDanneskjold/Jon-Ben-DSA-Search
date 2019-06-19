const Queue = require('./Queue');

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    bfs(values=[]) {
        const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
        while (queue.length) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); // add that value from the queue to an array
            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to the queue
            }
        }
        return values;
    }

    linearSearch(array, value) {

        for (let i = 0; i < array.length; i++) {
    
            if (array[i] === value) {
                console.log('Linear Search took', (i + 1), 'iterations');
                return i;
            }
        }
        console.log('Linear Search took', array.length, 'iterations');
        return -1;
    };

    binarySearch(array, value, start, end, count = 0) {
        start = start === undefined ? 0 : start;
        end = end === undefined ? array.length : end;

        if (start > end) {
            console.log('Binary search took', count, 'iterations.');
            return -1;
        }

        const index = Math.floor((start + end) / 2);
        const item = array[index];

        console.log('start:', start, 'end:', end);
        if (item === value) {
            count++;
            console.log('Binary search took', count, 'iterations.')
            return index;
        }
        else if (item < value) {
            count++
            console.log('count:', count, 'item:', item)
            return this.binarySearch(array, value, index + 1, end, count);
        }
        else if (item > value) {
            count++
            console.log('count:', count, 'item:', item)
            return this.binarySearch(array, value, start, index - 1, count);
        }
    };

    dfs(values = []) {
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }
}

module.exports = BinarySearchTree;