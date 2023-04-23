/**
 * @param {string} s
 * @return {number}
 */
 /**
 hashmap
T: O(N)
S: O(N)

the idea is increase the counter if the cumulative value is (even)
BUTTTT => if there is "asb" the palindrome is only one char 

  */
var longestPalindrome = function(s) {
    let counter=0
    let hashMap={};
    for(let i=0;i<s.length;i++){
        if(hashMap[s[i]]){
            hashMap[s[i]]++
        }else{
            hashMap[s[i]]=1
        }
        if(hashMap[s[i]]%2==0)counter+=2
    }

    console.log(hashMap)

    // for(let key in hashMap){
    //     if(hashMap[key]%2==0)counter+=hashMap[key]
    //     // else counter+=hashMap[key]%2
    // }
    //trick when having single chars like: "abc"
    return s.length> counter ? counter+1: counter
}