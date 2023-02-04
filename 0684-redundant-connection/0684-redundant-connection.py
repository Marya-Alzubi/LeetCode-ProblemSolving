class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        """
        parent [0, 1, 2, 3]
        rank:  [1, 1, 1, 1]
        //////////////// loop //////////////////
        edges: [[1, 2],  [1, 3],  [2, 3]]
                 |  |                       p1=1,p2=2 => p1!=p2 => rank[1]==rank[2]
        parent [0, 1, 1, 3]
                   |  |
        rank:  [1, 2, 1, 1]
                   |  |
        1-2
         
        ///////////////////////////////////////
        edges: [[1, 2],  [1, 3],  [2, 3]]
                          |  |              p1=1,p2=3 => p1!=p2 => rank[1]>rank[3]
        parent [0, 1, 1, 1]
                   |     |
        rank:  [1, 3, 1, 1]
                   |     |  
           1-2
          /
         3             
        ///////////////////////////////////////
        edges: [[1, 2],  [1, 3],  [2, 3]]
                                   |  |      p1=1, p2=1 => p1==p2 
                                             return [2,3]
                                        
        """
        # parent=list()
        # rank=list()

        # for i in range(len(edges)+1):
        #     parent.append(i)
        #     rank.append(1)
        ################ short hand ################
        parent=[i for i in range(len(edges)+1)]
        rank=[1]*(len(edges)+1)
        ############################################
        print(parent)    
        print(rank)

        # helper function to find the parent
        def find(node):
            p=parent[node]
            while p !=parent[p]:
                parent[p]=parent[parent[p]]
                p=parent[p]
            return p  

        # loop through the edges 
        for a,b in edges:
            p1,p2=find(a),find(b)
            if p1==p2: return [a,b]
            
            if rank[p1]>rank[p2]:
                parent[p2]=p1
                rank[p1]+=rank[p2]
            else:
                parent[p1]=p2
                rank[p2]+=rank[p1] 

        # print(parent)    
        # print(rank)

###################################### same way ##################
        # def union(a,b):
        #     p1,p2=find(a),find(b)
        #     if p1==p2: return False
        #    
        #     if rank[p1]>rank[p2]:
        #         parent[p2]=p1
        #         rank[p1]+=rank[p2]
        #     else:
        #         parent[p1]=p2
        #         rank[p2]+=rank[p1] 
        #     return True       
            
        # for a,b in edges:
        #     if not union(a,b): return [a,b]  

                                        
