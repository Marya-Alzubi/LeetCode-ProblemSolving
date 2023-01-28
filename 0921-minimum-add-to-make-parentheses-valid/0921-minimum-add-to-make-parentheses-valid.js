/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(text=s) {
      const stack =[];
  let incorrectBrackets=0;
  
  for(let i=0;i<text.length;i++){
    if(text[i]==="("){
      stack.push("(")
    }else{
      if(stack.length)
        stack.pop()
      else{
        incorrectBrackets++
      }
    }
  }
  
  if(stack.length){
    incorrectBrackets+=stack.length
  }
  
  return incorrectBrackets
};