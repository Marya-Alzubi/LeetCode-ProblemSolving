/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 
var insert = function(intervals, newInterval) {
    let result = []
    for(let i=0;i<intervals.length;i++){
        const [start,end]=intervals[i];
        //////////////////////////// 1. no overlap => rearrange ////////////////////
            //A. newInterval comes before the intervals[i][0]
        if(start>newInterval[1]){
            result.push(newInterval)
            result.push(...intervals.slice(i,intervals.length))
            return result ;//the rest
        }
            //B. intervals[i][1] comes before the newInterval
        else if(end<newInterval[0]){
            result.push([start,end])
        }
        /////////////////////// 2. overlapping //////////////////////////////////
        else{
            newInterval[0]=Math.min(start,newInterval[0]);
            newInterval[1]=Math.max(end,newInterval[1]);
        }
    }
    // edge case => no overlapping => the whole intervals array comes before the newInterval
    result.push(newInterval)
    return result
};