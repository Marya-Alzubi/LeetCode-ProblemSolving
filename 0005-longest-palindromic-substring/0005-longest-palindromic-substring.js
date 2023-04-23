/**
 * @param {string} s
 * @return {string}
 */
 /**
t:o(n^2)
s:o(1)
  */
var longestPalindrome = function(s) {
    // amm's sol
    let max="";
    for(let i=0;i<s.length;i++){
        let subString1 = checkOddPalindrome(i,s)
        let subString2 = checkEvenPalindrome(i,s)
        if(subString1.length>max.length){
            max=subString1
        }
         if(subString2.length>max.length){
            max=subString2
        }
    }
    return max
};

function checkOddPalindrome(index,s){
    let l=index-1,r=index+1
    while(l>=0 && r<s.length && s[l]===s[r]){
        l--;
        r++;
    }
    l++;
    return s.substring(l,r)
}

function checkEvenPalindrome(index,s){
    let l=index-1,r=index
    while(l>=0 && r<s.length && s[l]===s[r]){
        l--;
        r++;
    }
    l++
    
    return s.substring(l,r)
}