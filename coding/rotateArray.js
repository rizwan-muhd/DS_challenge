var rotate = function (nums, k) {
  k = k % nums.length; // In case k is larger than nums.length
  console.log(k);
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7],
  //  [7,6,5,4,3,2,1],
  //   [5,6,7,4,3,2,1],

  k = 8;

rotate(nums, k);
console.log(nums); // Out

// var canJump = function (nums) {
//   let jump = 0;
//   for (let i = jump; i < nums.length; i++) {
//     if (i === 0) {
//       jump = 1;
//     } else {
//       jump = i + nums[i];
//       if (nums.length - 1 === jump) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
// const nums = [3, 2, 1, 0, 4];

// // const res = canJump(nums);
// // console.log(res);

// let maxReach = 0;
// for (let i = 0; i < nums.length; i++) {
//   if (i > maxReach) {
//     return false; // If current index is beyond the farthest reach, return false.
//   }
//   maxReach = Math.max(maxReach, i + nums[i]); // Update the farthest we can reach.
//   console.log(i, maxReach);
//   if (maxReach >= nums.length - 1) {
//     return true; // If we can reach or exceed the last index, return true.
//   }
// }
// return false;
