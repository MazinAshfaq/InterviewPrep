class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    let node = new Node(value); //Create new node
    if (this.isEmpty()) this.bottom = node; // if first node in stack, set bottom pointer.
    node.next = this.top; //Set new node pointer to head of linked list
    this.top = node; //Set new head pointer
    this.length++;
    return this;
  }
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
    }
    let temp = this.top.next;
    delete this.top;
    this.top = temp;
    this.length--;
  }
  isEmpty() {
    if (this.length == 0) {
      return true;
    }
    return false;
  }
}

const myStack = new Stack();
myStack.push("Discord");

console.log(myStack.push("Udemy"));
// console.log(myStack.peek());
// myStack.pop();
// console.log(myStack.peek());
// myStack.pop();
// console.log(myStack.peek());

//Discord
//Udemy
//google

// Array Implementation
class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

//Discord
//Udemy
//google
