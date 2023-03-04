/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 /**
 The TRICK:
 don't care about opperation 1 and operation2 
 just focus on the hashmap itself
    the 2 hashmaps should have:
        1. the same chars
        2. the same frequency values regardless to which chars it represents
  */
var closeStrings = function(word1, word2) {
    //edge case
    if(word1.length !== word2.length) return false;

    let hash1= new Map();
    let freq1=[]
    let hash2= new Map();
    let freq2=[]

    //hash1
    for(let i=0;i<word1.length;i++){
        let char=word1[i];
        if(!hash1.has(char)){
            hash1.set(char,1)
        }else{
            hash1.set(char,hash1.get(char)+1)
        }
    }

    //hash2
    for(let i=0;i<word2.length;i++){
        let char=word2[i];
        if(!hash2.has(char)){
            hash2.set(char,1)
        }else{
            hash2.set(char,hash2.get(char)+1)
        }
    }
    // console.log(hash1)
    // console.log(hash2)

    //check if they have the same chars
    if(hash1.size!==hash2.size)return false;
    for(let [key,value] of hash1){
        if(!hash2.has(key))return false;
        console.log("value",value)
        //freq1
        freq1.push(value);
        //freq2
        freq2.push(hash2.get(key));
    }
    // console.log(freq1)
    // console.log(freq2)

    //check if the values have the same frequency regardless the chars what they are represents
    freq1.sort((a,b)=>a-b)
    freq2.sort((a,b)=>a-b)
    for(let i=0;i<freq1.length;i++){
        let key1=freq1[i];
        let key2=freq2[i];
        if(key1!==key2)return false;
    } 
    
    //includes will increase the time complexity +++ maybe we will face a conflict (example: [1,2,3,4] [1,2,2,5])
    // for(let key of freq1){
    //     if(!freq2.includes(key))return false
    // }

    return true;
};