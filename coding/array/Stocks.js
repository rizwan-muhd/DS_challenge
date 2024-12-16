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

// const prices = [7, 6, 4, 3, 1];

// bestTimeToBuyStock(prices);

//3151. Special Array I

// const nums = [2, 1, 4];

var isArraySpecial = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i - 1] % 2) {
      return false;
    }
  }

  return true;
};

// const res = isArraySpecial(nums);
// console.log(res);

//2057. Smallest Index With Equal Value

// const nums = [4, 3, 2, 1];
var smallestEqual = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) {
      return i;
    }
  }
  return -1;
};

// const res = smallestEqual(nums);
// console.log(res);
const nums = [-4, -2, 1, 4, 8];
var findClosestNumber = function (nums) {
  let smallest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (
      Math.abs(nums[i]) < Math.abs(smallest) ||
      (Math.abs(nums[i]) === Math.abs(smallest) && nums[i] > smallest)
    ) {
      smallest = nums[i];
    }
  }
  console.log(smallest);
  return smallest;
};

// findClosestNumber(nums);

const x = 23;
var sumOfTheDigitsOfHarshadNumber = function (x) {
  let num = x;
  let sum = 0;
  while (x > 0) {
    let r = x % 10;
    sum += r;
    x = Math.floor(x / 10);
  }

  if (num % sum === 0) {
    return sum;
  } else {
    return -1;
  }
};

const res = sumOfTheDigitsOfHarshadNumber(x);

console.log(res);
