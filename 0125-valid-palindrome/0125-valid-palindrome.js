/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[\W_]/g, '').toLowerCase();
    for(let i=0, k=s.length-1;i<k;i++,k--){
        console.log(s[i]);
        console.log(s[k]);
        if(s[i]!=s[k]){
            return false;
        }
    }
    return true;
};