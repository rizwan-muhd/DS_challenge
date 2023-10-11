var nums = [2, 2, 1, 1, 1, 2, 2];
var num = 0;
for (let i = 0; i < nums.length; i++) {
  let count = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
      count++;
    }
  }
  if (count > nums.length / 2) {
    // return nums[i]
    num = nums[i];
    break;
    // console.log(nums[i]);
  }
}
console.log(num);
