/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 /**
 counter head -> tail
 current=head.next
 while(head.next)
 middle of it
 while(x<=counter)

 return 
 
  */
var middleNode = function(head) {
    let counter=1;
    let current= head
    while(current){
        current=current?.next
        counter++;
    }
    let midd =Math.ceil(counter/2);
    current=head;
    while(midd>1){
        current=current.next;
        midd--;
    }
    return current;
};