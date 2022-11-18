/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count={};
    let maxLength =0;
    let mostCommon=0;
    left =0;
    for(let right=0;right<s.length;right++){
        count[s[right]] = (count[s[right]] || 0)+1;
        mostCommon=Math.max(mostCommon,count[s[right]])
        while((right-left+1)- mostCommon >k){
        count[s[left]]--;
        left++;
    }
    maxLength= Math.max(maxLength,right-left+1);
    }
    return maxLength;
};