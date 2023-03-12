/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 /**
    *** the Kth least values *** so Max Priority Queue
    T: O(logk * N) => logK=> enqueue or dequeue
    S: O(K)

    points = [[1,3],[-2,2]]                    k=2
    mpq= [{element:[3,3], priority: 4.24 }] => enqueue
    mpq= [{element:[5,-1], priority: 5.09 },{element:[3,3], priority: 4.24 }] =>enqueue
    mpq= [{element:[-2,4], priority: 4.47 },{element:[3,3], priority: 4.24 }] =>enqueue &  dequeue[5,-1]

  */
var kClosest = function(points, k) {
    //I need the minimum number => maxPriorityQueue
    let mpq = new MaxPriorityQueue();
    for(let i=0;i<points.length;i++){
        const element = points[i];
        mpq.enqueue(element,sqrt(element[0],element[1]));
        if(mpq.size()>k){
            mpq.dequeue()
        }
    }

    // while(mpq.size()){
    //     console.log(mpq.dequeue().element)
    // }

    //result
    let result = [];
    while(mpq.size()){
        result.push(mpq.dequeue().element)
    }

    return result
};


const sqrt = (x,y)=>{
    let powX = x**2;
    let powY = y**2;
    let result = Math.sqrt(powX+powY);
    console.log(result)
    return result;
}