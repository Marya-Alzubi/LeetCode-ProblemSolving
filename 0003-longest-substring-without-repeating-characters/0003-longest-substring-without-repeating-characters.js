/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    /*let maxLength = 0;
    let length = 0;
    if(s.length ==1) return 1;
    for(let i=0;i<s.length;i++){
        if(s[i]!=s[i+1]){
            maxLength++;
        }
    }*/
    let map ={};
    let maxLength =0;
    let left=0;
    for(let right=0;right<s.length;right++){
       map[s[right]]=( map[s[right]] ||0)+1;
        /*if(!map[s[right]]){
            map[s[right]]=1;  
        }*/
        while(map[s[right]]>1){
            map[s[left]]--;
            left++;
        }
        maxLength=Math.max(maxLength,(right-left+1));
    }
    
    return maxLength;
    
    /*t result=[];
    for(let i=0;i<s.length;i++){
       if(!result.includes(s[i])){
            result.push(s[i]);
       }else{
           continue;
       }
    }
     return result.length;*/
};