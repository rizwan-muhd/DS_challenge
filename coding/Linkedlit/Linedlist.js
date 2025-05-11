// size
// memory allocation
// execution time

// types
// single linked_list
// double linked_list
// circular linked_list

// const lsit = [10, 4, 6, 21];

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    let current = this.head;
    let output = "";

    while (current) {
      output += current.data + "->";
      current = current.next;
    }

    console.log(output + "null");
  }

  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next && current.nex.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }
}

const list = new linkedList();

list.append(10);
list.append(20);
list.append(30);
list.print();

list.prepend(5);
list.print();

class Node{
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class Linkedlist{
    constructor() {
        this.head =null
    }

    append(data) {
        const newNode = new Node(data)

        if()
    }
}