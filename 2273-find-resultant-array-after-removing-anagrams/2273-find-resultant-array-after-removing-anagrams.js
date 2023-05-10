/**
 * @param {string[]} words
 * @return {string[]}
 */
 /**
 T: O(N* M*logM)
 S: O(1)
  */

// helper function 
const isAnagram = (s1, s2)=>{
    let arr1 = s1.split("").sort().join("");
    let arr2 = s2.split("").sort().join("");
    if(arr1!==arr2)return false
    return true;
}
var removeAnagrams = function(words) {
    // let result=[];
    // let map={};
    // for(let i=1;i<words.length;i++){
    //     let word=words[i].split("").sort().join("");
    //     let word2=words[i-1].split("").sort().join("");
    // }
    // return result

    for(let i =1;i<words.length; i++){
       if(isAnagram(words[i], words[i-1])){
           words.splice(i,1);
           //here is the trick 
           i--;
       }
   } 
    return words;
};