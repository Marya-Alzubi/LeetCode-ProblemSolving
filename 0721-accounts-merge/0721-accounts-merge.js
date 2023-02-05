/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let uf = new DSU(accounts.length);
    let mailsMap={};
    for(let i=0;i<accounts.length;i++){
        for(let j=1;j<accounts[i].length;j++){
            if(mailsMap[accounts[i][j]]===undefined){
                mailsMap[accounts[i][j]]=i
            }
            else{
                //union
                uf.union(i,mailsMap[accounts[i][j]])
            }
        }
    }
    let groupedMailArray=[];
    for(let i=0;i<accounts.length;i++){
        groupedMailArray.push([])
    }
    // console.log(mailsMap)
    // console.log(groupedMailArray)
    for(let key in mailsMap){
        const group = uf.find(mailsMap[key])
        groupedMailArray[group].push(key)
    }
    // console.log(groupedMailArray)
    for(let element of groupedMailArray){
        element.sort();
    }
    // console.log(groupedMailArray)
    const result=[];
    for(let i=0;i<groupedMailArray.length;i++){
        //console.log("groupedMailArray[i]",groupedMailArray[i])
        if(groupedMailArray[i].length){
            result.push([accounts[i][0],...groupedMailArray[i]])
        }
    }
    // console.log("-----------------------")
    // console.log(result)
    return result;
};
class DSU{
    constructor(numberOfNodes){
        this.rank = new Array(numberOfNodes + 1).fill(1);
        this.parent = new Array(numberOfNodes + 1);
        for (let i = 0; i < this.parent.length; i++) {
        this.parent[i] = i;
        }
        /*this.parent=[]
        this.rank=[]
 
        for(let i=0;i<numberOfNodes+1;i++){
            this.parent.push(i)
            this.rank.push(1)
        }*/
    }
    /*find(node){
        let p=this.parent[node]
        while(p!==this.parent[p]){
            p=this.parent[p]
        }
        return p;
    }*/
    find(node) {
        if (node === this.parent[node]) return node;
        const rep = this.find(this.parent[node]);
        this.parent[node] = rep;
        return rep;
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