export class ListNode {
  // constructor
  constructor(item, next) {
    this.item = item;
    this.next = next;
  }

  // methods
  setItem(data) {
    this.item = data;
  }

  getItem() {
    return this.item;
  }

  setNext(node) {
    this.next = node;
  }

  next() {
    return this.next;
  }

  toString() {
    return `Node [item=${this.item} next=${this.next}]`;
  }
}
