/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //since I want to see the frequency of each index it's better to use the Dictionary (frequency counter) insted of the built in Map()
    //let map = new Map();   // applicable but not the perfect sol since I'm counting the indices
    let frequency = {};
    let frequency2 = {};
    if(s.length!==t.length){
        return false;
    }
    for(let i=0;i<s.length;i++){
        let element = s[i];
        if(!frequency[element]){
            frequency[element]=1;
        }else{
            frequency[element]++;
        }
    }
    console.log(frequency);
    for(let i=0;i<t.length;i++){
        let element = t[i];
        if(frequency[element]){
            frequency[element]--;
        }
        else{
            return false;
        }
        
    }
    console.log(frequency);
    return true;
};