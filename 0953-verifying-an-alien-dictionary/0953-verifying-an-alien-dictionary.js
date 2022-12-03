/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let map= new Map();
    for(let i=0;i<order.length;i++){
        let element=order[i];
        map.set(element,i);
    }
    //console.log(map);
    for(let i=0;i<words.length-1;i++){
        let word1=words[i];
        let word2=words[i+1];
        for(let j=0;j<word1.length;j++){
            if(j==word2.length){
                return false;
            }
            let letter1=word1[j];
            let letter2=word2[j];
            if(map.get(letter1)!==map.get(letter2)){
                if(map.get(letter1)>map.get(letter2)){
                    return false;
                }
                break; 
            }
            /*else if(map.get(letter1)<map.get(letter2)){
                return true;
                break;
            }*/
        }
    }
    return true;
};