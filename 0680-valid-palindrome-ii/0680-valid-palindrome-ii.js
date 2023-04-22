/**
 * @param {string} s
 * @return {boolean}
 */
 /**
 T: O(N)
 S: O(1)
  */
var validPalindrome = function(s) {
    const isPalindrome =(left,right)=>{
        while(left<=right){
            if(s[right]!==s[left])return false;
            left++;
            right--;
        }
        return true
    }
    let left=0;
    let right=s.length-1;
    while(right>=left){
        if(s[right]!==s[left]){
            return isPalindrome(left+1,right)||isPalindrome(left,right-1)
        }
        left++;
        right--;
    }
    return true
};