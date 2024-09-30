const checkPerfectSqaure = (num) => {
  for (let i = 1; i * i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
};
// const num = 100000001;
// const res = checkPerfectSqaure(num);
// console.log(res);
// 4
const nums = [3, 2, 1, 2, 1, 7];
// [1, 1, 2, 2, 3, 7];
var minIncrementForUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let moves = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      console.log(nums[i], nums[i - 1]);
      let incremnet = nums[i - 1] + 1 - nums[i];
      moves += incremnet;
      nums[i] = nums[i - 1] + 1;
    }
  }
  console.log(moves);
};

minIncrementForUnique(nums);
