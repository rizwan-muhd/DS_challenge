const bestTimeToBuyStock = (prices) => {
  let smallest = prices[0];
  let position = 0;
  let largest = null;
  let profit = null;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1] && prices[i] < smallest) {
      smallest = prices[i];
      position = i;
    } else if (
      smallest < prices[i] &&
      i > position &&
      prices[i] < prices[i + 1]
    ) {
      largest = prices[i + 1];
    }
    // else if (largest === prices[0]) {
    //   profit = 0;
    //   largest = 0;
    //   smallest = 0;
    // }
  }
  console.log("smallest", smallest);
  console.log("largest", largest);
  profit = largest - smallest;
  console.log(profit);
};

const prices = [7, 6, 4, 3, 1];

bestTimeToBuyStock(prices);
