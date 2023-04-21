/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let current=head;
    let hashMap ={};
    if(!head)return false;
    let i=0;
    while(current){
        hashMap[i]=current;
        i++;
        current=current.next;
    }
    // console.log(i)
    // console.log(hashMap)
    for(let j=0;j<(Math.floor(i/2));j++){
        // console.log("hashMap[j]",hashMap[j].val)
        // console.log("hashMap[i-j]",hashMap[i-j-1].val)
        if(hashMap[j].val!==hashMap[i-j-1].val)return false;
    }
    return true;
};