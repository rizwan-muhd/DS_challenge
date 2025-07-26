// Queue
// simple queue
// circular queue

// enqueue add in rear
// dequeue remove in front

class Queue {
  constructor() {
    this.items = [];
  }

  equeue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.items[0];
  }

  isEmpty() {
    this.items.length === 0;
  }

  size() {
    this.items.length;
  }

  print() {
    console.log(this.items.join("<-"));
  }
}

const queue = new Queue();

queue.equeue(10);
queue.equeue(20);
queue.equeue(30);
queue.dequeue();

queue.print();

//priority queue
// accending order
// decending order
