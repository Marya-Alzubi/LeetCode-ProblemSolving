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
 /////////////////////
 mid in every step until I reach the last one
 
  */
var middleNode = function(head) {
    //the smarter sol by one iterate
    //when I reach the end of fast => by default the slow will reach the midd
    //fast moves twice as fast the slow pointer => fast =2*slow
    let fast = head;
    let slow = head;
    while (fast?.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        console.log("fast",fast)
        console.log("slow",slow)
    }
    return slow;
};