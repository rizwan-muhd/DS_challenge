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

  insertData(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
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
