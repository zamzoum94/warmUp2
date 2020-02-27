/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
  // YOUR CODE HERE
  var pair = [];
  for(var i = 0; i < prices.length; i++){
    pair.push({day : i, price : prices[i]});
  }
  pair.sort(function(a, b){
    return a.price - b.price;
  });
  var max = 0;
  for(var i = 0; i < pair.length; i++){
    var x = Object.keys(pair[i]);
    for(var j = pair.length - 1; j>i ; j--){
      var y = Object.keys(pair[j]);
      x = parseInt(pair[i]["price"]);
      y = parseInt(pair[j]["price"]);
      var dayX = parseInt(pair[i]["day"]);
      var dayY = parseInt(pair[j]["day"]);
      if(y > x && dayY > dayX){
        max = pair[j].price - pair[i].price;
        console.log(max);
        return;
      }
    }
  }
  console.log(max);
};
