/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
        if(head===null || head.next===null){
        return;
    }
    let slow=head
    let fast=head.next
    while(fast?.next){
        slow=slow.next
        fast=fast.next?.next
    }
        fast=slow.next
        slow.next=null
        
    let p=null
    let c=fast
    let n=fast.next
    while(c){
        c.next=p
        p=c
        c=n
        n=n?.next
    }
    slow=head;
    fast=head.next
    let temp=p.next
    while(slow&&p){
        slow.next=p
        p.next=fast
        p=temp
        slow=fast
        fast=fast?.next
        temp=temp?.next
    }
    

};