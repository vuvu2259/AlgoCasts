// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  size() {
    let length = 0;
    let node = this.head;

    while (node) {
      length++;
      node = node.next;
    }

    return length;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  getFirst() {
    return this.head;
  }

  removeFirst() {
    if (this.size() === 0) return;
    this.head = this.head.next;
  }

  insertLast(data) {
    const node = new Node(data);
    if (this.size() === 0) this.head = node;
    else this.getLast().next = node;
  }

  getLast() {
    if (this.size() === 0) return null;
    let node = this.head;

    while (1) {
      if (!node.next) return node;
      else node = node.next;
    }

    return node;
  }

  removeLast() {
    if (this.size() === 0) return;
    if (this.size() === 1) {
      this.head = null;
      return;
    }
    let nodeBefore = this.head;
    let nodeAfter = nodeBefore.next;

    while (1) {
      if (!nodeAfter.next) {
        nodeBefore.next = null;
        return;
      } else {
        nodeBefore = nodeAfter;
        nodeAfter = nodeAfter.next;
      }
    }
  }

  clear() {
    this.head = null;
  }

  getAt(index) {
    if (index > this.size() - 1 || index < 0) return null;
    let node = this.head;
    if (index === 0) return node;

    for (let i = 1; i <= index; i++) {
      node = node.next;
    }

    return node;
  }

  removeAt(index) {
    if (index > this.size() - 1 || index < 0) return;
    if (index === 0) {
      return this.removeFirst();
    }
    this.getAt(index - 1).next = this.getAt(index + 1);
  }

  insertAt(data, index) {
    if (index > this.size() - 1 || index < 0) {
      return this.insertLast(data);
    }
    if (index === 0) {
      return this.insertFirst(data);
    }
    this.getAt(index - 1).next = new Node(data, this.getAt(index));
  }

  forEach(callback) {
    for (let i = 0; i < this.size(); i++) {
      callback(this.getAt(i));
    }
  }

	// [Symbol.iterator]() {
	// 	let node = this.head;
	// 	return {
	// 		next: () => {
	// 			if (!node) return { done: true };
	// 			const value = node;
	// 			node = node.next;
	// 			return {
	// 				done: false,
	// 				value
	// 			}
	// 		}
	// 	}
	// }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
