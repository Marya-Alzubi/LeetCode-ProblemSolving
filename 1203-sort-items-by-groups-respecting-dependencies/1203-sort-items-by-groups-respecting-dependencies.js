/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {

    //the nodes that does not belong to any group => it has thier own group
    for (let i = 0; i < n; i++) {
        if (group[i] == -1) {
            group[i] = m++;
        }
    }

    // graph group
    let graphGroup = [];
    let indegreeGG = Array(m).fill(0); 
    for(let i=0;i<m;i++){graphGroup.push(new Set())}

    // graph item
    let graphItem = []; 
    let indegreeGI = Array(n).fill(0);
    for(let i=0;i<n;i++){graphItem.push(new Set())}

    // console.log("graphGroup",graphGroup)
    // console.log("graphItem",graphItem)

    //update the values of: graphGroup && indegreeGG && graphItem && indegreeGI
    let result=[];
    for (let i = 0; i < n; i++) {
        let to = group[i];
        for (const x of beforeItems[i]) {
            let from = group[x];
            if (from != to && !graphGroup[from].has(to)) {
                graphGroup[from].add(to);
                indegreeGG[to]++;
            }
            if (!graphItem[x].has(i)) {
                graphItem[x].add(i);
                indegreeGI[i]++;
            }
        }
    }
    // console.log("graphGroup",graphGroup)
    // console.log("graphItem",graphItem)

    //Topological sort
    let ggOrder = topologicalSort(graphGroup, indegreeGG);
    let giOrder = topologicalSort(graphItem, indegreeGI);
    // console.log("ggOrder",ggOrder)
    // console.log("giOrder",giOrder)

    //edge case
    if (ggOrder.length == 0 || giOrder.length == 0) return [];

    //
    let group2Item = [];
    for (let i = 0; i < m; i++) { group2Item.push([]);};
    for (const item of giOrder) group2Item[group[item]].push(item);

    //
    for (const group_id of ggOrder) {
        for (const item of group2Item[group_id]) {
            result.push(item);
        }
    }
    return result;
};


const topologicalSort = (g, indegree) => {
    let res = [], q = [], len = indegree.length;
    for (let i = 0; i < len; i++) {
        if (indegree[i] == 0) q.push(i);
    }
    while (q.length) {
        let cur = q.shift();
        res.push(cur);
        for (const child of g[cur]) {
            if (--indegree[child] == 0) q.push(child);
        }
    }
    for (let i = 0; i < len; i++) {
        if (indegree[i] > 0) return [];
    }
    return res;
    //return res.length === n ? res : []; //pass n as a parameter
};
