class Solution:
    def sortItems(self, n: int, m: int, group: List[int], beforeItems: List[List[int]]) -> List[int]:
        dep_list = defaultdict(int)
        graph = defaultdict(list)
        
        grp_dep = defaultdict(int)
        grp_graph = defaultdict(list)
 
        grp_id = len(group)
        grps = defaultdict(list)
        for dst, values in enumerate(beforeItems):
            if group[dst] == -1:
                group[dst] = grp_id
                grp_id += 1
            
            grps[group[dst]].append(dst)
 
            dst_grp = group[dst]
            for src in values:
                if group[src] == -1:
                    group[src] = grp_id
                    grp_id += 1
 
    
                graph[src].append(dst)
                dep_list[dst] += 1
 
                src_grp = group[src]
                if src_grp != dst_grp:
                    grp_graph[src_grp].append(dst_grp)
                    grp_dep[dst_grp] += 1
 
        groups_order = []
        grp_que = deque()
        for grp in grps:
            if grp_dep[grp] == 0:
                grp_que.append(grp)
 
        while grp_que:
            grp = grp_que.popleft()
            groups_order.append(grp)
 
            for grp_child in grp_graph[grp]:
                grp_dep[grp_child] -= 1
                if grp_dep[grp_child] == 0:
                    grp_que.append(grp_child)
 
 
        if len(groups_order) != len(grps):
            return []
 
        res = []
 
        def BFS(que, parent_grop):
            while que:
                node = que.popleft()
                res.append(node)
 
                for child in graph[node]:
                    dep_list[child] -= 1
                    if dep_list[child] == 0 and group[child] == parent_grop:
                        que.append(child)
 
 
        for grp in groups_order: 
            que = deque()
            for node in grps[grp]:
                if dep_list[node] == 0:
                    que.append(node)
            BFS(que, grp)
 
        return res if len(res) == len(group) else []