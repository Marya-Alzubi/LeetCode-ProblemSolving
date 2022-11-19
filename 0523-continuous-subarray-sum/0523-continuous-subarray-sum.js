/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    
    
    let map= new Map();
    let sum =0;
    let remain;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        remain =sum%k;
        if(remain===0 && i>0){
            return true;
        }
        //console.log("i",i);
        //console.log("sum",sum);
        //console.log("remain",remain);
        //console.log("map before add",map);
        if(!map.has(remain)){
            map.set(remain,i);
            //console.log("map after add",map);
        }else{
            if(map.get(remain) <i-1){
                return true
            }else{
                //console.log("not acceptable the length is 1")
            }
        }
    }
    return false;
    
    /*let remainderMap ={0:-1};
    let sum =0;
    let remain;
    for(let i=0;i<nums.length; i++){
        sum+=nums[i];
        remain=sum%k;
        console.log("sum",sum);
        console.log("remain",remain);
        console.log("remainderMap[remain]",remainderMap[remain]);
         if(remain===0 && i>0){
            return true;
        }
        if(!(remainderMap[remain] in remainderMap)){
            remainderMap[remain] = i;
            console.log("remainderMap[remain]=i =>",remainderMap[remain]);
            console.log("remainderMap", remainderMap);
        }else if(i - remainderMap[remain]>1){
                return true;
        }
    }
    return false;*/
};