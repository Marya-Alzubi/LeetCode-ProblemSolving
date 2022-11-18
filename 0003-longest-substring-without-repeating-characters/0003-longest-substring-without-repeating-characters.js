/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    ///////////////////// hash table ////////////////////////
    let map ={};
    let maxLength =0;
    let left=0;
    for(let right=0;right<s.length;right++){
       map[s[right]]=( map[s[right]] ||0)+1;
        while(map[s[right]]>1){
            map[s[left]]--;
            left++;
        }
        maxLength=Math.max(maxLength,(right-left+1));
    }
    
    return maxLength;
    //
    //
    ///////////////////// set [dynamic sliding window size] ////////////////////////  
    //
    //
    /*let set = new Set();
    let maxLength =0;
    let left=0;
    for(let right=0;right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength=Math.max(maxLength,(right-left+1));
    }
    return maxLength;*/
    
};