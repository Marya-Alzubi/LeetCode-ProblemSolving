/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let strWord1 ="" ;
     let strWord2  ="";
    for(let i=0 ; i < word1.length; i++){
        strWord1+= word1[i];
    }
    for(let i=0 ; i < word2.length; i++){
        strWord2+= word2[i];
    }
    
    
    if(strWord1 !== strWord2) return false;
    return true ;
    
};
// time complixity: O(N * K)
// space complixity: 0(N* K)