/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 /**
 descreption in the previous submission

 T: O*logN + O(N)
 S: O(N)
  */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    let result = [];
    result.push(intervals[0])
    for(let i=1;i<intervals.length;i++){
        const [start,end]= intervals[i];
        //no overlapping
        if(result[result.length-1][1]<start){
            result.push(intervals[i])
        }
        //overlapping
        else{
            result[result.length-1][1]=Math.max(end,result[result.length-1][1])
        }
    }
    return result;
};