/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //since I want to see the frequency of each index it's better to use the Dictionary (frequency counter) insted of the built in Map()
    //let map = new Map();   // applicable but not the perfect sol since I'm counting the indices
    let frequency = {};
    if(s.length!==t.length){   //edge case: lengths are not the same!
        return false;
    }
    for(let i=0;i<s.length;i++){  //fill out our frequency counter for the first string
        let element = s[i];
        if(!frequency[element]){
            frequency[element]=1;
        }else{
            frequency[element]++;
        }
    }
    //console.log(frequency); // s string frequency counter
    for(let i=0;i<t.length;i++){  // here is the core of the question!: how can I check the counter for each number? what should I do now? I will subtract it by 1 every loop until finishing the whole new array
        let element = t[i];
        if(frequency[element]){
            frequency[element]--;
        }
        else{ //1.if the element does not excit at all! //2. after subtract the element by 1 every loop *if* it reached 0 ----> so: if(frequency[element])is 0 (false) -> I will read the else statement 
            return false;
        }
        
    }
    //console.log(frequency);  //after subtract the frequency for each element in t string this is the output
    return true;
};