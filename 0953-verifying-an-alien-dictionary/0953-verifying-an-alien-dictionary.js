/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
// The idea in how can I reach the letters in every words
// COMPARE EVERY 2 WORDS TOGETHER  (first loop)
// compare the FIRST LETTER ONLY for each word (inside loop)
// if they are NOT the SAME && Word1[letter1]> word2[letter2] ->return false
// if they are NOT the SAME && every thing is okay (break)+(i++) "the happy senario" "test the next word"
// if they are the SAME then compare THE NEXT BESIDE LETTER IN EVERY WORD (j++) "looping until I find 2 letter I can compare between them"
    
//edge case: word2.length<word1.length ->return false
    
    
    let map= new Map();
    for(let i=0;i<order.length;i++){
        let element=order[i];
        map.set(element,i);
    }
    //console.log(map);
    for(let i=0;i<words.length-1;i++){ //the last element doesn't have i+1 // excluded it
        let word1=words[i];
        let word2=words[i+1];
        for(let j=0;j<word1.length;j++){
            //edge case ["apple","app"] 
            --> the trick is: THE LETTERS ARE THE SAME --> when I reach "l" I will return false
            //if they are NOT the same I will NOT reach this edge // read the next if statement
            if(j==word2.length){  
                return false;
            }
            let letter1=word1[j];
            let letter2=word2[j];
            if(map.get(letter1)!==map.get(letter2)){
                if(map.get(letter1)>map.get(letter2)){
                    return false; //worst senario
                }
                                  // happy senario ---> how to jump to the next pair?
                //the first "not equal letters" of the the words are NOT matching the condition above 
                // so everything is okay here -> let's test the next pair
                break; 
            }
            // I can't do this because I want to test the whole words 
            // maybe in the first 2 words is true but the next pair is not!

            /*else if(map.get(letter1)<map.get(letter2)){ 
                return true;
                break;
            }*/
        }
    }
    return true;
};