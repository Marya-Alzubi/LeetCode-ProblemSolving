class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start: int, end: int) -> float:
        adjanceyList=collections.defaultdict(list)
        maxHeap=[]
        maxDistance=collections.defaultdict(list)
        visited=set()
        for i in range(n):
            adjanceyList[i]=[]
            if i== start:
               maxDistance[i]=1
            else:
                maxDistance[i]=-1    
                
        # print(adjanceyList) 
        # initalize  
        for i in range(len(edges)):
            a=edges[i][0]
            b=edges[i][1]
            adjanceyList[a].append((b,succProb[i]))
            adjanceyList[b].append((a,succProb[i]))    
        
        # print(adjanceyList) 
        # print(maxDistance) 
        # heap
        heapq.heappush(maxHeap,(1,start))
        # print(maxHeap)
        ##################### BFS
        while(maxHeap):
            # print("maxHeap",maxHeap)
            # print("maxDistance",maxDistance)
            weight,vertex=heappop(maxHeap)
            # print("from",vertex)
            if vertex not in visited:
                visited.add(vertex)
                for neighbor,nWeight in adjanceyList[vertex]:
                    if neighbor not in visited:
                        maxDistance[neighbor]=max(abs(weight)*abs(nWeight),maxDistance[neighbor])
                        heapq.heappush(maxHeap,(-1*(abs(weight)*abs(nWeight)),neighbor)) 
        # print("sol:", maxDistance[end])   
        return 0 if maxDistance[end] == -1 else  maxDistance[end]        


                    
               



