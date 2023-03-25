/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 /**
 T: O(N)
 S: O(1)

 Greedy Teqneque => shitty question

    gas  = [1,    2,    3,    4,    5]   sum=15
    cost = [3,    4,    5,    1,    2]   sum=15
    --------------------------------------        15==15 => continue the quesion
    diff = [-2,  -2,   -2,    3,    3]

    total    0    0     0     3     6
    index    1    2     3               return 3

  */
var canCompleteCircuit = function(gas, cost) {
    let totalGas= 0;
    let totalCost=0;
    let diff=[];
    for(let i=0;i<gas.length;i++){
        totalGas+=gas[i];
        totalCost+=cost[i];
        diff.push((gas[i]-cost[i]))
    }
    console.log(diff)
    if(totalCost>totalGas)return -1;

    let total=0;
    let startingIndex=0

    for(let i=0;i<diff.length;i++){
        total+=diff[i]
        if(total<0){
            total=0;
            startingIndex=i+1;
        }
    }
    return startingIndex
};