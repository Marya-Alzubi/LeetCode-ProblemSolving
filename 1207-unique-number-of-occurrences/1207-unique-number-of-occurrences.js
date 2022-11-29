/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // counting! so it's frequency array! 
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
    //console.log(frequency);

    // I tried to loop through the values but I failed
    /*for(let i =0;i<Object.keys(frequency).length;i++){
        //console.log(Object.values(frequency).includes(frequency[key]));
        if(Object.values(frequency).indexOf(frequency[i][0])!= i && Object.values(frequency).includes(frequency[key]) ){
            return false;
        }
    }*/
    //////////////// the whole idea is here how to check the values it self of the frequency object? I wil loop throgh the frequency , once I found a duplicated value I will return false;//////////////////

    //let values =Object.values(frequency);  // I didn't find a usefull solution with it
    
    for(let key in frequency){ 
        if (result.includes(frequency[key])){
            return false;
        }
        result.push(frequency[key]);
    }
    return true;
};