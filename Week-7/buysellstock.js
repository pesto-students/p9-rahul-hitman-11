var maxProfit = function (prices) {
  let minvalue = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minvalue) {
      minvalue = prices[i];
    }
    if (prices[i] - minvalue > profit) {
      profit = prices[i] - minvalue;
    }
  }
  return profit;
};
