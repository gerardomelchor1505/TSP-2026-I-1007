import { Node } from "./node";

export class Queue {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value: number) {
    const newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }

  }
  dequeue(): Node | null {
    if (!this.head) {
      return null;
    }
    const removedNode = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    removedNode.next = null;
    return removedNode;
  }

  list(): void {
    let current = this.head;
    let values: number[] = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log("Queue:", values.join(" , "));
  }
}
