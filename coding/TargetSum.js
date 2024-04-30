const nums = [-6, 2, 5, -2, -7, -1, 3];
const target = -2;
var countPairs = function (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        count = count + 1;
      }
    }
  }
  return count;
};

const res = countPairs(nums, target);
console.log("res", res);
