class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.first = null;
  this.last = null;
  this.length = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  for (let i = 0; i < this.length; i++) {
    if (this.key == key) {
      let val = this.value; //Save value\
      //Delete node
      this.delete();
      //Add to front of quueue
      this.put(key, val);
      return val;
    } else {
      return -1;
    }
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.length == this.capacity) {
    //Remove last if queue is full
    this.last = this.last.previous;
    this.last.next.previous = null;
    this.last.next = null;
  }
  //add to queueu
  let newNode = new Node(key, value);

  if (this.first == null) {
    //if cache is Empty add to the head and set tail
    this.first = this.last = newNode;
    this.length++;
  } else {
    //If node exists, add to head of queue
    newNode.next = this.first;
    this.first.previous = newNode;
    this.first = newNode;
    this.length++;
  }
  LRUCache.prototype.delete = function (key) {
    //     //if empty
    //     if(this.length == 0){
    //         return "Empty queue"
    //     }

    //if only 1 node
    if (this.length == 1) {
      this.first = null;
      this.last = null;
      this.length--;
      return;
    }
    //if head
    if ((this.first = this)) {
      this.first = this.next;
      this.next.previous = null;
      this.next = null;
      this.length--;
      return;
    }
    //if tail
    if ((this.last = this)) {
      this.last = this.previous;
      this.last.next = null;
      this.previous = null;
      this.length--;
      return;
    }
    //if middle
    else {
      this.previous.next = this.next;
      this.next.previous = this.previous;
      this.next = null;
      this.previous = null;
      this.length--;
      return;
    }
  };
};
