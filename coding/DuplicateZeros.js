// var duplicateZeros = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0 && i !== arr.length - 1) {
//       let temp = arr[i + 1];
//       arr[i + 1] = 0;
//       i++;
//       arr[i + 1] = temp;
//     }
//   }
//   console.log(arr);
// };

// const arr = [1, 0, 2, 3, 0, 4, 5, 0];
// duplicateZeros(arr);
// const nums = [6, 5, 4, 4];
// var isMonotonic = function (nums) {
//   let ace = true;
//   let des = true;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] < nums[i + 1]) {
//       des = false;
//     } else if (nums[i] > nums[i + 1]) {
//       ace = false;
//     }
//   }

//   return ace || des;
// };

// const res = isMonotonic(nums);
// console.log(res);

var findDifference = function (nums1, nums2) {
  let n = 0;
  let m = 0;
  let arr = [[], []];
  while (n < nums1.length || m < nums2.length) {
    if (!nums2.includes(nums1[n]) && !arr[0].includes(nums1[n])) {
      arr[0].push(nums1[n]);
    } else if (!nums1.includes(nums2[m]) && !arr[1].includes(nums2[m])) {
      arr[1].push(nums2[m]);
    }
    n++;
    m++;
  }
  console.log(arr);
};

const nums1 = [1, 2, 3],
  nums2 = [2, 4, 6];
findDifference(nums1, nums2);
