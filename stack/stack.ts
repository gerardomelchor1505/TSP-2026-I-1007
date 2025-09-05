import { Node } from "./node";

class Stack {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value: number): void {
    const newNode = new Node(value);

    if (!this.head) {
      // Si la pila está vacía
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop(): Node | null {
    if (!this.head) {
      return null;
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (!this.head) {
      // Si ya no queda nada, tail también se limpia
      this.tail = null;
    }

    removedNode.next = null; // Limpieza
    return removedNode;
  }

  list(): void {
    let current = this.head;
    let values: number[] = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log("Stack:", values.join(" , "));
  }
}
