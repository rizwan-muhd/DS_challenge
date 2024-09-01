// var thirdMax = function (nums) {
//   if (nums.length < 3) {
//     return nums[1];
//   } else if (nums.length >= 3) {
//     let n = 0;
//     const arr = [];
//     while (n < nums.length) {
//       if (!arr.includes(nums[n])) {
//         arr.push(nums[n]);
//       }
//       n++;
//     }
//     arr.sort((a, b) => a - b);
//     const val = arr[arr.length - 1];
//     return val;
//   }
// };

// const nums = [5, 2, 2];
// const res = thirdMax(nums);
// console.log(res);

// 1365  solution

var smallerNumbersThanCurrent = function (nums) {
  let count = [];
  for (let i = 0; i < nums.length; i++) {
    let val = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        val = val + 1;
      }
    }
    count[i] = val;
    val = 0;
  }
  return count;
};

const nums = [6, 5, 4, 8];

const res = smallerNumbersThanCurrent(nums);

console.log(res);
