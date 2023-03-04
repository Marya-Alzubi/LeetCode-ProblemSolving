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
var swapPairs = function(head) {
    //(0,head) => edge case => if while did not work because there is current but there is NO current.next
    let dummy=new ListNode(0,head);
    let prev=dummy
    let current=head
    while(current && current.next){
        let nextPair=current.next.next;
        let secondNode=current.next

        //reverse
        secondNode.next=current;
        current.next=nextPair;
        prev.next=secondNode; //dummy->2

        prev=current
        current=nextPair; //1->3 //will not reach 2 & 4
    }
    return dummy.next

    //////////////////////// did not work :(
    // if(!head)return null;
    // if(!head.next) return head;
    // let current=head;
    // prev=null;
    // let i=0;
    // while(current && current.next){
    //     i++;
    //     if(i%2==0){
    //         current.next=prev;
    //         prev.next=current.next.next;
    //     }
    //     console.log(current)
    //     prev=current;
    //     current=current.next;
    // }
    // return head.next;
};