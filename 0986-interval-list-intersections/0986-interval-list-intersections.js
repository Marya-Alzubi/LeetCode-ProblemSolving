/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let result =[];
    for(let i=0,j=0;i<firstList.length && j<secondList.length;){
        //console.log("firstList[i]",firstList[i])
        //console.log("secondList[j]",secondList[j])
        const [start1,end1]=firstList[i];
        const [start2,end2]=secondList[j];
        if(end2>=start1 && end1>=start2){
            result.push([Math.max(start1,start2),Math.min(end1,end2)])
        }
        if(end1>end2){
            j++
        }else{
            i++
        }
    }
    return result
};
