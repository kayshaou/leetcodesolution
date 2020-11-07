const maxProfit = (prices) => {
    if (prices.length < 1 || (prices.length > 3 * Math.pow(10, 4))) {
        return 0;
    }
    // check price itself 

    var master = [];
    var map = new Map();
    var daybuysell = [];
    var bestPath = {};
    var bestpathary =[];
    for (let i = 0; i < prices.length; i++) {
        
        var stg = {}
        var max = 0;
        var datetobuy=0;
        var datetosell =0;
        for (let j = i + 1; j < prices.length; j++) {

            if (prices[i] < 0 || prices[i] > Math.pow(10, 4)) return 0;

            var base = prices[i];
            var running = prices[j];

                if (prices[j] - prices[i] > 0) { // sell 
                    //if (status === '' || status !== 'sell') {
                    stg = {
                        'key': '(buy@day' + (i + 1) + '@' + prices[i] + ') sell:day' + (j + 1) + ":profit(" + prices[j] + "-" + prices[i] + ")=" + (prices[j] - prices[i])
                    };
                    let profit = (prices[j] - prices[i]);
                    if(max < profit){
                        
                        max = profit;
                         datetobuy = (i + 1);
                         datetosell = (j + 1);
                        
                        daybuysell.push([datetobuy, datetosell, profit]);
                    
                    }
                    master.push(stg);
                    
                } else if (prices[j] - prices[i] < 0) { // buy
                    stg = { 'key': '(loop' + i + ')buy:day' + (j + 1) };
                    master.push(stg);
                 
                }
            // }

        }
        status = '';
        bestPath = { 'loop': (i+1), 'buy':datetobuy,'sell':datetosell, 'max': max};
        bestpathary.push(bestPath);
    }
    //console.log(master);
    //console.log(bestpathary);
    var innnerMax=0;
    var result = [];
    for (const [key, value] of bestpathary.entries()) {
        console.log(`${key}: ${value.max}`);
        
        if(innnerMax<value.max){
            innnerMax = value.max;
            result = innnerMax;
        }
        
    }

    return result;
};

console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([1, 2, 3, 4, 5]));
// console.log(maxProfit([7,6,4,3,1]));