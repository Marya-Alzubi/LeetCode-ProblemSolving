/**
 * @param {number[]} prices
 * @return {number}
 */
 /**
 [7,     1,      5,      3,      6,       4]          min      max        profit
  i                                                    7        7            0
         i                                             1        1            0+0
                 i                                     1        5            0+4
                         i                            *3        3             
                                 i                     3        6            4+3=7  
                                          i            4        4     
 --------------------------------------------                                 
 [1,     2,      3,      4,      5]                               
  i                                                    1       1           0
         i                                             1       2           0+1           
                 i                                     2       3           0+1+1
                         i                             3       4           0+1+1+1
                                 i                     4       5           0+1+1+1+1
  */
var maxProfit = function(prices) {
    let max = -Infinity
    let min = Infinity
    let profit=0;
    for(let i=0;i<prices.length;i++){
        const price= prices[i];
        if(price<min){
            min=price
            max=price
        }else{
            max=Math.max(max,price);
            profit+=(max-min);
            min=price;
        }
        // if(max>min){
        // }
    }
    return profit;    
    ///////// amm sol => same idea without max => without if(max>min)

    // let min = Infinity
    // let profit =0;
    // for(let i=0;i<prices.length;i++){
    //     const price= prices[i];
    //     if(price<min){
    //         min=price
    //     }else{
    //         profit+=(price-min);
    //         min=price;
    //     }
    // }
    // return profit;    
};