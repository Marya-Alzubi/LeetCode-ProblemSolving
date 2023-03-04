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
 //------------------------- copy and paste from educative :( //--------------------
function reverseEvenLengthGroups(head) {
    let prev = head; // Node immediately before the current group

    // The head doesn't need to be reversed since
    // it's a group of one node, so starts with length 2
    let lengthOfRevLinkedlist = 2;

    while (prev.next) {
        let node = prev;
        let n = 0;
        for (let i = 0; i < lengthOfRevLinkedlist; i++) {
            if (node.next == null) break;
            n++;
            node = node.next;
        }
        if (n % 2 !==0)
            // odd length
            prev = node;
        else {
            // even length
            let reverse = node.next;
            let curr = prev.next;
            let currNext;
            for (let j = 0; j < n; j++) {
                //swapping
                currNext = curr.next;
                curr.next = reverse;
                reverse = curr;
                curr = currNext;
            }
            let prevNext = prev.next;
            prev.next = node;
            prev = prevNext;
        }
        lengthOfRevLinkedlist++;
    }
    return head;
}