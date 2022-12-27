class Node {
  constructor(element) {
    this.value = element;
    this.next = undefined;
  }
}

class Lista {
  constructor() {
    this.head = undefined;
    this.count = 0;
  }
  push(element) {
    const node = new Node(element);

    let current;

    if(this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next != null) {
        current = current.next;
      }
      current.next = node
    }
    this.count++
  }
}

const lista = new Lista();
lista.push(15);
console.log(lista);