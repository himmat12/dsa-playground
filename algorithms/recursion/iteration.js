import { LinkedList } from "../../data-structures/linked list/singly linked list/linked_list.js";
import { ListNode } from "../../data-structures/linked list/singly linked list/list_node.js";

// nodes
const n5 = new ListNode("node 5", null);
const n4 = new ListNode("node 4", n5);
const n3 = new ListNode("node 3", n4);
const n2 = new ListNode("node 2", n3);
const n1 = new ListNode("node 1", n2);

// new linked list
let _newLinkedList = new LinkedList(n1);

// iterates the linked list elements
function printLinkedList(n) {
  if (n !== null) {
    console.log(n.getItem());
    printLinkedList(n.next);
  }
  console.log("Recursion ended: reached the end of linked list.");
}

printLinkedList(n1);
