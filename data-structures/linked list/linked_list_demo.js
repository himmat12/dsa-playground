import { ListNode } from "./singly linked list/list_node.js";
import { LinkedList } from "./singly linked list/linked_list.js";

/*
SINGLY LINKED LIST DEMO
*/
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

// inserting new node after the given node
// const another = new ListNode(100, null);
// list.insertAfter(n1, another);
// console.log("After inserting after the given node: " + list.toString());

// inserting new node before given node
const newNode = new ListNode(999, null);
list.insertBefore(n2, newNode);
console.log("After inserting before the given node: " + list.toString());

// removing node
list.removeAfter(n1);
console.log("After removing: " + list.toString());

// swapping adjacent nodes
// list.swapAfter(n2);
// console.log("Adjacent nodes swapping: " + list.toString());

// swapping non adjacent nodes "block the above swapAfter invoked line to see the output of this method
// (existing bug - different approach was implemented while writing this solution; was inspired from neetcode.io solution https://youtu.be/4LsrgMyQIjQ)"
list.swap(n1, n3);
console.log("Non adjacent nodes swapping: " + list.toString());

// change all item in linked list
list.changeAll("Hello-world");
console.log("Changed items: " + list.toString());

// change all item in linked list
list.changeAfter(n1, "new data");
console.log("Changed after: " + list.toString());

/*
DOUBLY LINKED LIST DEMO
*/
