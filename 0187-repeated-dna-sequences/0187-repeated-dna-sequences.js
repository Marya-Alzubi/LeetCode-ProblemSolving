/**
 * @param {string} s
 * @return {string[]}
 */
 /**
N => string length
K => letter-long 
T: o(N)
S: o(N - K)

 hashMap={
  'AAAAACCCCC' => 2,
  'AAAACCCCCA' => 1,
  'AAACCCCCAA' => 1,
  'AACCCCCAAA' => 1,
  'ACCCCCAAAA' => 1,   c are 5
  'CCCCCAAAAA' => 2,
  'CCCCAAAAAC' => 1,
  .....
  'ACCCCCCAAA' => 1,   c are 6
  'CCCCCCAAAA' => 1,
  .....
 }

 result=[]

 for=> hashMap = > push to result any value that is bigger than 1
  */

var findRepeatedDnaSequences = function(s) {
    const hashMap = new Map();
    const result = [];
    
    //edge case
    // if(s.length<=10){
        //return [];
    //}
    
    //s.length-9 ===> to keep the dna string with length 10
    for(let  i=0 ;i<s.length-9;i++){
        let dna = s.slice(i,i+10);
        // if(dna.length==10){
                if(!hashMap.has(dna)){
                    hashMap.set(dna, 1)
                }else{
                    hashMap.set(dna, hashMap.get(dna)+1);
                }   
        // }
    }

    console.log(hashMap);

    for(let [key, value] of hashMap){
        if(value>1){
            result.push(key);
            // console.log(key);
        }
    }
    return result;
};