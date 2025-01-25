// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// const words = ["bella", "label", "roller"];
// var commonChars = function (words) {
//   for (let i = 0; i < words.length; i++) {}
// };

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
var merge = function (nums1, m, nums2, n) {
  nums1.slice(0, m);
  nums2.slice(0, n);
  // let underlinedNumbers = nums1.map((num) =>
  //   String(num)
  //     .split("")
  //     .map((char) => char + "\u0332")
  //     .join("")
  // );

  // console.log(underlinedNumbers);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b); // Correct numerical sort

  console.log("Sorted Merged Array:", nums1);
};

merge(nums1, m, nums2, n);
