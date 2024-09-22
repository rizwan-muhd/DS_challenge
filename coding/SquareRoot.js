var sortedSquares = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i] * nums[i]);
  }

  arr.sort((a, b) => a - b);
  console.log(arr);
};

const nums = [-4, -1, 0, 3, 10];

sortedSquares(nums);
