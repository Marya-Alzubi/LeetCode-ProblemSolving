/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    // let prev=null;
    // let next=null;
    // let i=1;
    // let current=head;
    // while(current){
        
    // }
    let start = head;
    let len = 0, l, count=0, first, second;

    if(!head.next) return head;

// obtain the required node value from end of the list
    while(start){
        start = start.next;
        len++;
    }
    l = len-k;

    if(k === l+1) return head;

// extract the values in required nodes of the list
   let begin = head;
   while(begin){
        count++;
        if(count === k){
            first = begin.val;
        } else if(count === l+1){
            second = begin.val;
        }
        begin = begin.next;
    }

// swapping the node values
	begin = head;
	count = 0;

    while(begin){
        count++;
        if(count === k) begin.val = second;
        else if(count === l+1) begin.val = first;
        begin = begin.next;
    }
    return head;  

};