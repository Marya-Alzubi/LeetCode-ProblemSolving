class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adjanceyList=collections.defaultdict(list)
        minHeap=[]
        time=0
        visited= set()
        ################ initalizing data
        for u,v,w in times:
             adjanceyList[u].append((v,w))
        heapq.heappush(minHeap,(0,k))
        ##################### BFS ######################
        while minHeap:
            #destructring
            weight,vertex=heapq.heappop(minHeap)
            if vertex not in visited:
                visited.add(vertex)
                time=max(time,weight)
                #destructring
                for neighbor,nWeight in adjanceyList[vertex]:
                    if neighbor not in visited:
                        heapq.heappush(minHeap,(weight+nWeight,neighbor))
        return time if len(visited)==n else -1 