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

 /**
 they said swap the values :)))))

  [1,  2,  3,  4,  5]    k=2
       |       |
  [1,  4,  3,  2,  5]
  */
var swapNodes = function(head, k) {
    let length = 0;
    let curr = head;

    //find the length
    while (curr) {
        length++;
        curr = curr.next;
    }

    //edge case
    if (k > length) {
        return head;
    }

    //find first
    let first = head;
    for (let i = 1; i <= k - 1; i++) {
        first = first.next;
    }

    //find second
    let second = head;
    for (let i = 1; i <= length - k; i++) {
        second = second.next;
    }

    //swap the values
    [first.val, second.val] = [second.val, first.val];

    return head;
    /////////////// did not work :( -> I tried to change the pointer //////////////
    // if(!head.next) return head;
    // let prev=null;
    // let next=null;
    // let length=0;
    // let count=0;
    // let current=head;
    // let nodeBefore;
    // let theFirstSwappingNode;
    // let theInnerNode;
    // let theLastInnerNode;
    // let theSecondSwappingNode;
    // while(current){
    //     prev=current;
    //     current=current.next;
    //     length++;
    // }
    // if(k === length+1) return head;
    // console.log(length)
    // current=head;
    // prev=null;
    // while(current){
    //     count++;
    //     if(count==k){
    //         nodeBefore=prev;
    //         theFirstSwappingNode=current;
    //         theInnerNode=current.next; 
    //     }
    //     else if(count==(length-k)) theLastInnerNode=current.next;
    //     else if(count==(length-k+1)){
    //         console.log("passed");
    //         console.log(current);
    //         theSecondSwappingNode=current;
    //     }  
    //     prev=current;
    //     current=current.next;      
    // }
    //
    // nodeBefore.next=theSecondSwappingNode;
    // theSecondSwappingNode.next=theInnerNode;
    // if(theLastInnerNode){   
    //     theLastInnerNode.next=theFirstSwappingNode;
    // }
    //
    //return head

};