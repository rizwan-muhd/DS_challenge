var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};

const nums = [1, 2, 3, 1, 2, 3],
  k = 2;

const res = containsNearbyDuplicate(nums, k);
console.log(res);
