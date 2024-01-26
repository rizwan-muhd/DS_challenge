class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // insert data

  insertFirstData(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertLastData() {
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

  size() {
    let count = 0;
    let current = this.head;
    while (current.next) {
      count++;
      current = current.next;
    }

    return count;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.log("invalid index");
      return;
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data + " -> ");
      current = current.next;
    }
    console.log("null");
  }
}

const linkedList = new LinkedList();

linkedList.insertData(5);
linkedList.insertData(6);
linkedList.insertData(8);

linkedList.display();
