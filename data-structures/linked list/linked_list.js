export class LinkedList {
  // constructor
  constructor(head) {
    this.head = head;

    if (head === null) {
      return null;
    }
  }

  // methods

  /**
   * inserts new node after the given previous node in the list
   */
  insertAfter(prevNode, newNode) {
    newNode.setNext(prevNode.next);
    prevNode.setNext(newNode);
  }

  /**
   * removes the next node from the given previous node in the list
   */
  removeAfter(prevNode) {
    prevNode.setNext(prevNode.next.next);
  }

  /**
   * swaps next two adjacent nodes with each other in a list after the given target k node
   *
   * Example:
   *
   * list: [1 2 3 4 5]
   * k = 2
   *
   * output: [1 2 4 3 5]
   *
   */
  swapAfter(k) {
    // validating if the target node and the next nodes are not null then only do swap operation
    if (
      k !== null ||
      first !== null ||
      second !== null ||
      afterSecond !== null
    ) {
      // lets suppose if our target k = 2 then:

      let first = k.next; // 3
      let second = first.next; // 4
      let afterSecond = second.next; // 5

      k.setNext(second); // updating the node link address: 2 -> 4
      second.setNext(first); // updating the node link address: 4 -> 3
      first.setNext(afterSecond); // updating the node link address: 3 -> 5

      /*
      after this swapping our final linked list will be : 1 -> 2 -> 4 -> 3 -> 5
      
      before: 1 -> 2 -> 3 -> 4 -> 5
      after:  1 -> 2 -> 4 -> 3 -> 5
      */
    }
  }

  /**
   * swaps the values of the kth node from the beginning and the kth node from the end.
   */
  swap(head, k) {
    // validating if the head or kth node is null
    if (head === null || k === null) {
      return;
    }
    
    let currentNode = this.head;
    let kthCount = 0; // position of kth item in the list which will be (kthCount - 1) index

    while (currentNode !== k) {
      kthCount += 1;
      currentNode = currentNode.next;
    }

    // setting the left pointer for the kth item
    currentNode = this.head;
    for (let i = 0; i < kthCount; i++) {
      currentNode = currentNode.next;
    }
    let leftNode = currentNode;

    // setting the right pointer
    let rightNode = this.head;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      rightNode = rightNode.next;
    }

    // swapping the values of nodes
    const tempNode = leftNode;
    leftNode.setItem(rightNode.getItem());
    rightNode.setItem(tempNode.getItem());

    return head;
  }

  /**
   * returns the string representation of all nodes in the linked list after iterating through all the nodes in the list
   */
  toString() {
    let currentNode = this.head;
    let str = "";
    while (currentNode !== null) {
      str += `${currentNode.item} `;
      currentNode = currentNode.next;
    }
    return str;
  }
}
