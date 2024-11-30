import { ListNode } from "./list_node.js";
import { LinkedList } from "./linked_list.js";

// nodes
let n7 = new ListNode(7, null);
let n6 = new ListNode(6, n7);
let n5 = new ListNode(5, n6);
let n4 = new ListNode(4, n5);
let n3 = new ListNode(3, n4);
let n2 = new ListNode(2, n3);
let n1 = new ListNode(1, n2);

// linked lists
let list = new LinkedList(n1);

// inserting new node
const another = new ListNode(100, null);
list.insertAfter(n1, another);
console.log("After inserting: " + list.toString());

// removing node
list.removeAfter(n1);
console.log("After removing: " + list.toString());

// swapping adjacent nodes
list.swapAfter(n2);
console.log("After swapping: " + list.toString());
