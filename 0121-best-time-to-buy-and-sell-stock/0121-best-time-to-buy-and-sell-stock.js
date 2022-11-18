/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy ;
    let sellIndex=prices.length-1;
    let sell ;
    let profit=0;
    for(let i=prices.length-1; i>=0;i--){
        buy=prices[i];
        sell=prices[sellIndex];
        if(buy-sell >=0){ //losing deal
            sellIndex =i;
        }else{
             if(profit<(sell-buy))profit=sell-buy;
        }
    }
    return profit;
};