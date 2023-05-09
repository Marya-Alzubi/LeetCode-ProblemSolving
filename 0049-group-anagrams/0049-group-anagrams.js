/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    /*
      strs = ["eat","tea","tan","ate","nat","bat"]
                |     |     |     |     |     |
sortedStrs = ['aet','aet','ant','aet','ant','abt']
                |     |     |     |     |     |
       map = {
               aet: [ 'eat', 'tea', 'ate' ],
               ant: [ 'tan', 'nat' ], 
               abt: [ 'bat' ] 
       }
    
     */
    //sort the chars inside every element
    let sortedStrs =[];
    for(let i=0;i<strs.length;i++){// T: m
        //console.log(strs[i])
        sortedStrs[i]=strs[i].split('').sort((a, b) => a.localeCompare(b)).join("");//T: nlogn
    }
    //console.log(sortedStrs)

    //based the sorted array .. store the values inside the map
    let map={};
    for(let i=0;i<sortedStrs.length;i++){ //T: m
        //console.log("sortedStrs[i]",sortedStrs[i])
        if(!map[sortedStrs[i]]){        
            map[sortedStrs[i]]=[strs[i]];
        }else{
            map[sortedStrs[i]].push(strs[i])
        }
    }
    //console.log(map)


    return Object.values(map);
    //time complixity: O(m*n*logn)
    //space complixity O(n) // why without sortedStr?

};