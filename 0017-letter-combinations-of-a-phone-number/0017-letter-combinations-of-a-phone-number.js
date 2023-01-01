/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    //edge case
    if(digits.length===0)return [];

    let result=[];
    //I can't do it by code since it may has 3 or 4 digis
    let map= {
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz",
    }
    const backtrack =(start,array)=>{
        console.log("array",array)

        //base case 
        if(start==digits.length){
            //issue the array element array is not string  [ 'a', 'd' ]=>['ad']
            result.push(array.join(""));
            //result.push(array);
            return;
        }
        //trick
        let chars=map[digits[start]];
        //console.log("chars",chars);
        for(let char of chars){
            //console.log("char",char)
            array.push(char);
            backtrack(start+1,array);
            //backtrack(start+1,array+char); // => if I want to do it on place without pushing it then pop it
            array.pop();
        }
    }
   backtrack(0,[]);
   return result;
};
