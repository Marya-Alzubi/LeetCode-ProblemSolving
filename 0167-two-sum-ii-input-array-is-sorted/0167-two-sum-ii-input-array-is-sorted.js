/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    /*let left = 0;
    let right = numbers.length-1;
    //console.log("init right",numbers[right]);
    //console.log("init left",numbers[left]);
    while(left<right){
          if(numbers[left]+numbers[right] > target){
            right--;
            //console.log("right",numbers[right]);
            //console.log("left",numbers[left]);
        }else if(numbers[left]+numbers[right]<target){
            left++;
            //console.log("right",numbers[right]);
            //console.log("left",numbers[left]);
        }else{
            return [left+1, right+1];
        }
    }*/
    
    let left = numbers[0];
    let right = numbers[numbers.length-1];
    for(let i=0,j=numbers.length-1 ;i<numbers.length-1 ; ){
         //console.log("init right",right);
         //console.log("init left",left);
        if(left+right > target){
            right = numbers[j-1];
            j--;
            //console.log("right",right);
        }else if(left+right<target){
            left =numbers[i+1];
            i++;
            //console.log("left",left);
        }else if(left+right==target){
            return [i+1,j+1];
        }
    }
};