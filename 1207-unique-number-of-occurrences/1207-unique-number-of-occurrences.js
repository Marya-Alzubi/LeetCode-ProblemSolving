/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let frequency ={};
    let result=[];
    for(let i=0;i<arr.length;i++){
        let element =arr[i];
        if(!frequency[element]){
            frequency[element]=1;
        }else{
            frequency[element]++;
        }
    }
    console.log(frequency);
    /*for(let i =0;i<Object.keys(frequency).length;i++){
        //console.log(Object.values(frequency).includes(frequency[key]));
        if(Object.values(frequency).indexOf(frequency[i][0])!= i && Object.values(frequency).includes(frequency[key]) ){
            return false;
        }
    }*/
    for(let key in frequency){
        if (result.includes(frequency[key])){
            return false
        }
        result.push(frequency[key]);
    }
    return true;
};