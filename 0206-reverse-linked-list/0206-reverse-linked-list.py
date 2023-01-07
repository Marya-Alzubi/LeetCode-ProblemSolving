# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        current = head
        while current:
            #save the value => I will need it later
            temp=current.next
            current.next=prev
            prev=current # save it for the next loop
            #current=current.next => it's prev!!!!! => now I can use the temp
            current=temp
        # when I am retuerning the last node I reached it from the while loop [looped the linkedlist]
        # it's automaticlly pointing to the previous node and so on!    
        return prev
 
