/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let headNode ;
    let tempNode;
    if(!list1 ){
        return list2;
    }else if(!list2){
        return list1;
    }
    if(list1.val < list2.val){
        headNode= list1;
        tempNode = headNode;
        list1=list1.next;
    }else{
        headNode= list2;
        tempNode = headNode;
        list2=list2.next;
    }
    while(list1!==null && list2!==null){
        if(list1.val < list2.val){
            tempNode.next = list1;
            list1=list1.next;
        }else{
            tempNode.next = list2;
            list2=list2.next;
        }
        tempNode= tempNode.next;
    }
    if(list1 ==null){
        tempNode.next=list2;
    }
    if(list2==null){
        tempNode.next =list1;
    }
  return headNode;      
};