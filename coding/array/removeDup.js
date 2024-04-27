const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  let count = 0;
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!newArr.includes(nums[i])) {
      newArr.push(nums[i]);
      nums[count] = nums[i];
      count = count + 1;
    }
  }
  nums = newArr;
  return nums.length;
};

const res = removeDuplicates(arr);
console.log(res);
