// // roman to int
// var romanToInt = function (s) {
//   const romanMap = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let total = 0;
//   let prevValue = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     let currentValue = romanMap[s[i]];
//     console.log(currentValue);
//     if (currentValue < prevValue) {
//       total = total - currentValue;
//     } else {
//       total = total + currentValue;
//     }
//     prevValue = currentValue;
//   }

//   return total;
// };
// // const res = romanToInt("MCMXCIV");
// // console.log(res);

// //
// const nums = [1, 3, 4, 2, 2];
// var findDuplicate = function (nums) {
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       return nums[i];
//     }
//   }
// };

// const res = findDuplicate(nums);
// console.log(res);
const nums = [1, 3, 5, 6],
  target = 0;
let i = 0;
var searchInsert = function (nums, target) {
  while (i < nums.length) {
    if (nums.includes(target)) {
      return nums.indexOf(target);
    } else if (target < nums[i]) {
      return 0;
    } else if (target < nums[i + 1]) return i + 1;
    else if (target > nums[nums.length - 1]) {
      return nums.length;
    }
    i++;
  }
};

const res = searchInsert(nums, target);
console.log(res);
