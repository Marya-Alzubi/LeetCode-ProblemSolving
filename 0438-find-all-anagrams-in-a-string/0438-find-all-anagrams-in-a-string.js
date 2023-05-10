/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 /**
 sliding fixed window + sorting
 T: O(n * m*logm) n=>s length, m=>p length
  */
// helper function to check is two object is equal
const isAnagram = (obj1, obj2) => {
    for (let [key,value] of obj1) {
        if (obj1.get(key) !== obj2.get(key)) {
            return false;
        }
    };
    return true;
}
var findAnagrams = function(s, p) {
    // edge case
    if (p.length > s.length || (p==""&& s=="")) return [];
    let result=[];

    ///////////////////////////////////////////////////
    let pCount = new Map();
    for(let char of p){
        if(!pCount.has(char)){
            pCount.set(char,1);
        }else{
            pCount.set(char,pCount.get(char)+1);
        }
    }

    ///////////////////////////////////////////////////    
    let sCount= new Map();
    let left =0;
    for(let right=0;right<s.length;right++){
        let char = s[right]
        if(!sCount.has(char)){
            sCount.set(char,1);
        }else{
            sCount.set(char,sCount.get(char)+1);
        }
        if(right-left+1 > p.length){
            if(sCount.get(s[left])>=1){
                sCount.set(s[left],sCount.get(s[left])-1)
            }else{
                sCount.delete(s[left]);
            }
            left++;
        }
        if(right-left+1 == p.length && isAnagram(pCount,sCount)){
                result.push(left)
        }
    }
    return result

    // time limit exceeded :(
    // let result=[];
    // let SWSize= p.length;
    // let sortedP= p.split("").sort().join("");
    // for(let i=0;i<s.length-SWSize+1;i++){ //T: O(N)
    //     let word= s.slice(i,i+SWSize).split("").sort().join(""); // T: O(M*logM)
    //     if(sortedP==word){
    //         result.push(i)
    //     }
    // }
    // return result
};