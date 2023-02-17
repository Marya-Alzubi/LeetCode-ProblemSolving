/**
 * @param {string} s
 * @return {string}
 */
 /**
 1.reverse the string => for i--
 2.two pointers and swap
  */
var reverseWords = function(s) {
    s=s.trim();
    let reversed=reverseFunc(s);
    console.log(reversed);

    let result="";
    let word="";
    for(let i=0;i<reversed.length;){
        while(reversed[i]==" "){
            i++;
        }
        word+=reversed[i];
        if(reversed[i+1]==" "|| i==reversed.length-1){
            console.log("word",word,"|")
            result+=reverseFunc(word);
            if(i!==reversed.length-1) result+=" ";
            word="";
            i++;
        }
        if(reversed[i]!==" "){
            i++
        }
    }
    return result;

};
const reverseFunc = (s)=>{
    let reversed="";
    for(let i=s.length-1;i>=0;i--){
        reversed+=s[i]
    }
    console.log("reverseFunc",reversed,"|")
    return reversed
}
