const nums = [3, 2, 2, 3];
const val = 3;
let count = 0;

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "_";
      count = count + 1;
    }
  }

  return count;
};

const res = removeElement(nums, val);
console.log(res);
