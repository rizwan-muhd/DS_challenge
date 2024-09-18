var firstMissingPositive = function (nums) {
  for (let i = 1; i <= nums.length + 1; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};

const nums = [1, 2, 0];

const res = firstMissingPositive(nums);

console.log(res);
