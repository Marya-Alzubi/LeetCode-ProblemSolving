# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        #list1 = [1,2,4], list2 = [1,3,4]
        #         |                |         temp.next=1     list1=1    list2=1
        #         |                  |       temp.next=1     list1=1    list2=3
        #           |                |       temp.next=2     list1=2    list2=3
        #             |              |       temp.next=3     list1=4    list2=3
        #             |                |     temp.next=4     list2=4    list2=4
        #             |                   |  temp.next=4     list2=4    list2=None

        #edge case
        if not list1:
            return list2
        elif not list2:
            return list1    
            
        temp=ListNode()

        if list1.val<list2.val:
            head=list1
        else:
            head=list2
                 
        while list1 and list2:
            if list1.val<list2.val:
                temp.next=list1
                temp=temp.next
                list1=list1.next
            else:
                temp.next=list2
                temp=temp.next
                list2=list2.next
        if list2:
            temp.next=list2
        if list1:
            temp.next=list1            
        return head            

               

        