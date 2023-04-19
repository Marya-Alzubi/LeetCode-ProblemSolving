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
var oddEvenList = function(head) {
    //edge cases
    if(!head)return null;
    if(!head.next)return head;

    let currentOdd=head;
    let currentEven=head.next;
    let firstEven=currentEven;

    while(currentOdd.next && currentEven.next){
        //odd
        currentOdd.next=currentOdd?.next?.next; //it's granteed value (while()=>makes sure there is next.next)
        currentOdd=currentOdd.next;
        //even
        currentEven.next=currentEven?.next?.next //it's granteed value (while()=>makes sure there is next.next)
        currentEven=currentEven.next;
    }
    //link odd to even
    currentOdd.next=firstEven;

    return head;  
};