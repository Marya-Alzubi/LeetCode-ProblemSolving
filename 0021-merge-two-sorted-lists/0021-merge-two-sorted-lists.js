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
   
    let dummyList = new ListNode(-10000);
    let tempNode =dummyList; //point the dummyList
    while(list1 && list2){
        if(list1.val<list2.val){
            tempNode.next=list1;
            list1=list1.next;
            console.log("tempNode inside while",tempNode);
            console.log("dummy after while",dummyList);
        }else{
            tempNode.next=list2;
            list2=list2.next;  
            console.log("tempNode inside while",tempNode);
            console.log("dummy inside while",dummyList);          
        }
        tempNode=tempNode.next;  
            console.log("tempNode after while",tempNode);
            console.log("dummy after while",dummyList);  
        
    }
    if(list1 ==null) tempNode.next=list2;
    if(list2==null) tempNode.next =list1;
    console.log("tempNode",tempNode);
    console.log("dummy",dummyList);
    return dummyList.next;
//    let headNode ;
//    let tempNode;
//    if(!list1 ){
//        return list2;
//    }else if(!list2){
//        return list1;
//   }
//    if(list1.val < list2.val){
//        headNode= list1;
//        tempNode = headNode;
//        list1=list1.next;
//    }else{
//        headNode= list2;
//        tempNode = headNode;
//        list2=list2.next;
//    }
//    while(list1 && list2){
//        if(list1.val < list2.val){
//            tempNode.next = list1;
//            list1=list1.next;
//        }else{
//            tempNode.next = list2;
//            list2=list2.next;
//        }
//       // ba7arek tempNode evey loop
//        tempNode= tempNode.next;
//    }
//    if(list1 ==null) tempNode.next=list2;
//    if(list2==null) tempNode.next =list1;
//  return headNode; 
//
//    
};
//
//
//Time Complexity: O(N + M), where N and M are the size of list1 and list2 respectively
//Space Complexity: O(1)