/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
/*
the exaplenation in the prev submit

T: O(N)
S: O(1)
*/
var reverseBetween = function(head, left, right) {
    let next = null
    let prev= null
    let current=head;
    for(let i=0;i<left-1;i++){
        // next=current.next
        prev=current
        current=current.next
    }
    // console.log("prev",prev)
    // console.log("current",current)
    let lastLeftNode = prev;
    let firstNodeInReverse = current;
    prev=null;
    for(let i=0;i<right-left+1;i++){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    // console.log("prev",prev)
    // console.log("current",current)
    firstNodeInReverse.next=current;
    
    if(lastLeftNode!==null){
        lastLeftNode.next=prev;
    }else{
        head=prev
    }
    return head;

};