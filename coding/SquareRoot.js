// var sortedSquares = function (nums) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     arr.push(nums[i] * nums[i]);
//   }

//   arr.sort((a, b) => a - b);
//   console.log(arr);
// };

// const nums = [-4, -1, 0, 3, 10];

// sortedSquares(nums);
// const nums = [3, 6, 1, 0];
// console.log(nums);
// nums.length = 3;
// console.log(nums);
// var dominantIndex = function (nums) {
//   let large = nums[0];
//   let secondLarge = null;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > large) {
//       secondLarge = large;
//       large = nums[i];
//     } else if (
//       nums[i] < large &&
//       (secondLarge === null || secondLarge < nums[i])
//     ) {
//       secondLarge = nums[i];
//     }
//   }
//   if (secondLarge * 2 <= large) {
//     return nums.indexOf(large);
//   } else {
//     return -1;
//   }
// };

// const res = dominantIndex(nums);

// console.log(res);
const nums = [2, 0, 2, 1, 1, 0];
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
  console.log(nums);
};

sortColors(nums);
