/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
//    let i=0;
//    while(2**i<= n){
//        if (2**i === n )return true;
//        i++;
//    }
//    return false;
    if(Math.log2(n) % 1 === 0 ){
        return true;
    }else {
        return false;
    }
};