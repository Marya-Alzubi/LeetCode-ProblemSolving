/**
 * @param {string} s
 * @return {string}
 */
 /**
 like the least frequent
 
 hashMap={ 
            a: 2,
            b: 1 
        }
mpq = {
            element:a, priority:2,
            element:b, priority:1,
} 

 current & onHold

  */
var reorganizeString = function(s) {
    //1.hashMap
    let hashMap ={};
    for(let i=0;i<s.length;i++){
        const element=s[i];
        if(hashMap[element]){
            hashMap[element]++;
        }else{
            hashMap[element]=1;
        }
    }
    //console.log(hashMap);


    //2. MaxPriorityQueue
    const mpq =new MaxPriorityQueue();
    for(const key in hashMap){
        mpq.enqueue(key,hashMap[key]);
    }

    //3. result
    let result="";
    let onHold=null;
    while(mpq.size()){
        let current = mpq.dequeue();
        result+=current.element;
        if(onHold){
            mpq.enqueue(onHold.element,onHold.priority)
        }
        current.priority--;
        if(current.priority>0){
            onHold=current
        }else{
            onHold=null
        }
    }

    if(onHold) return "";

    return result;
};