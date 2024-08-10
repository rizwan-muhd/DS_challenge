// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
// const rotateArray = (nums, k) => {
//   let j = 0;
//   while (j < k) {
//     let temp = null;
//     for (let i = 0; i < nums.length; i++) {
//       temp = nums[i + 1];
//       nums[i + 1] = temp ? temp : nums[i];
//     }
//     j = j + 1;
//   }
// };

// const { count } = require("console");

// rotateArray(nums, k);
// console.log(nums);

// // sleep
// const sleep = (millis) => {
//   setTimeout(() => {
//     return P;
//   }, millis);
// };

// const chessBoardColor = (coordinates) => {
//   const column = coordinates.charCodeAt(0) - "a".charCodeAt(0); // Convert letter to a number (0-7)
//   const row = parseInt(coordinates[1]) - 1;

//   console.log(column, row);
//   const x = coordinates[0];
//   const y = coordinates[1];
//   toString(x);
//   switch (x) {
//     case "a":
//       if (y % 2 === 0) {
//         return true;
//       } else {
//         return false;
//       }

//     case "b":
//       if (y % 2 === 0) {
//         return false;
//       } else {
//         return true;
//       }
//     case "c":
//       if (y % 2 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     case "d":
//       if (y % 2 === 0) {
//         return false;
//       } else {
//         return true;
//       }
//     case "e":
//       if (y % 2 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     case "f":
//       if (y % 2 === 0) {
//         return false;
//       } else {
//         return true;
//       }
//     case "g":
//       if (y % 2 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     case "h":
//       if (y % 2 === 0) {
//         return false;
//       } else {
//         return true;
//       }
//     default:
//       return false;
//   }
// };

// const res = chessBoardColor("a1");
// console.log(res);

// const heights = [1, 1, 4, 2, 1, 3];
// // [1,1,1,2,3,4]
// var heightChecker = function (heights) {
//   let count = 0;
//   let temp = [];
//   temp = heights.slice().sort((a, b) => a - b);

//   for (let i = 0; i < heights.length; i++) {
//     if (heights[i] !== temp[i]) {
//       count = count + 1;
//     }
//   }
//   return count;
// };

// const res = heightChecker(heights);
// console.log(res);
// const prices = [1, 2, 2],
//   money = 3;
// var buyChoco = function (prices, money) {
//   for (let i = 0; i < prices.length; i++) {
//     let val = prices[i] - money;
//     if (prices.includes(val)) {
//       return mo;
//     }
//   }
// };

// const s = "ab",
//   goal = "ab";
// var buddyStrings = function (s, goal) {
//   const letterOne = s.charAt(0);
//   const letterTwo = s.charAt(1);

//   const swapedWord = letterTwo + letterOne;
//   if (swapedWord === goal) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const res = buddyStrings(s, goal);

// console.log(res);
const s = "abcd",
  t = "abcde";
var findTheDifference = function (s, t) {
  for (let i = 0; i < t.length; i++) {
    console.log(t[i], s[i]);
    if (!t[i].includes(s)) {
      return t[i];
    }
  }
};

const res = findTheDifference(s, t);

console.log(res);
