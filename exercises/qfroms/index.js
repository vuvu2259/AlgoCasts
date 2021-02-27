// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.data = new Stack();
    }

    add(record) {
        const s = new Stack();

        if (!this.data.peek()) {
            this.data.push(record);
            return;
        }

        do {
            if (this.data.peek()) {
                s.push(this.data.pop());
            } else {
                this.data.push(record);
                while (s.peek()) {
                    this.data.push(s.pop());
                }
            }
        } while (s.peek());
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data.peek();
    }
}

module.exports = Queue;
