/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let uf = new DSU(edges.length);
    for(let [a,b] of edges ){
        if(!uf.union(a,b)){
             return [a,b]
        }
    }
};
class DSU{
    constructor(numberOfNodes){
        this.parent=[]
        this.rank=[]

    for(let i=0;i<numberOfNodes+1;i++){
        this.parent.push(i)
        this.rank.push(1)
    }
    }
    find(node){
        let p=this.parent[node]
        while(p!==this.parent[p]){
            p=this.parent[p]
        }
        return p;
    }
    union(n1,n2){
        let p1=this.find(n1);
        let p2=this.find(n2);
        if(p1===p2)return false;
        if(this.rank[p1]>this.rank[p2]){
            this.parent[p2]=p1;
            this.rank[p1]+=this.rank[p2];
        }else{
            this.parent[p1]=p2;
            this.rank[p2]+=this.rank[p1];
        }
        return true
    }
}