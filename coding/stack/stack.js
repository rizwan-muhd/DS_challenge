// Sack

//Operation

// Push()
// Pop()
// IsEmpty()
// IsFull()
// Peek()
// count()
// change()
// display()

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "stack is empty";
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join("<-"));
  }
}

const stack = new Stack();

stack.push(4);
stack.push(10);
stack.push(41);
stack.push(14);
stack.push(42);

stack.print();
stack.pop();

stack.pop();

stack.print();
