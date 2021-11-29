class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.first = node; //if the list is empty, set last and first to current node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }

  isEmpty() {
    if (this.length === 0) return true;
    return false;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
console.log(myQueue.peek());
//Joy
//Matt
//Pavel
//Samir
