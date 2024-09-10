// var sentece = "   fly me   to   the moon  ";

// // console.log(sentece.charAt(sentece.length - 1));
// var word = sentece.split(" ");
// word = word.filter((w) => w !== "");
// // word.sort();
// console.log(word);

// console.log(word[word.length - 1].length);

// solution 79 Word search
// const board = [
//   ["A", "B", "C", "E"],
//   ["S", "F", "C", "S"],
//   ["A", "D", "E", "E"],
// ];

// const word = "ABCCED";
// var exist = function (board, word) {
//   let k = 0;
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       if (word[k] === board[i][j]) {
//         k = k + 1;
//       }
//     }
//   }
//   if (k === word.length) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const res = exist(board, word);
// console.log(res);

// function exist(board, word) {
//   const rows = board.length;
//   const cols = board[0].length;

//   function dfs(i, j, k) {
//     // Check if the current cell is out of bounds or doesn't match the current word character
//     if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[k]) {
//       return false;
//     }

//     // If all characters have been matched, return true
//     if (k === word.length - 1) {
//       return true;
//     }

//     // Temporarily mark the board cell as visited by replacing it with a placeholder (e.g., '#')
//     const temp = board[i][j];
//     board[i][j] = "#";

//     // Explore all four directions (up, down, left, right)
//     const found =
//       dfs(i + 1, j, k + 1) || // down
//       dfs(i - 1, j, k + 1) || // up
//       dfs(i, j + 1, k + 1) || // right
//       dfs(i, j - 1, k + 1); // left

//     // Restore the cell's original value
//     board[i][j] = temp;

//     return found;
//   }

//   // Iterate over each cell in the grid to start the search
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       // Start a DFS if the first character matches
//       if (dfs(i, j, 0)) {
//         return true;
//       }
//     }
//   }

//   // If no valid path was found, return false
//   return false;
// }

// // Example usage:
// const board = [
//   ["A", "B", "C", "E"],
//   ["S", "F", "C", "S"],
//   ["A", "D", "E", "E"],
// ];
// const word = "ABCCEDZ";
// console.log(exist(board, word)); // Output: true

// const nums = [1, 2, 3];
// var containsDuplicate = function (nums) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (obj[num]) {
//       obj[num] += 1;
//       if (obj[num] >= 2) {
//         return false;
//       }
//     } else {
//       obj[num] = 1;
//     }
//   }
//   return true;
// };

// const res = containsDuplicate(nums);

// console.log(res);

// const nums = [0, 1, 0, 3, 12];
// [1, 0, 0, 3, 12];
// var moveZeroes = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let n = nums.length - 1;
//     if (nums[i] === 0) {
//       if (nums[i + 1] !== 0) {
//         let temp = nums[i + 1];
//         nums[i + 1] = nums[i];
//         nums[i] = temp;
//       }
//     }
//   }
// };

// [ 1, 3, 12, 0, 0];
// j 3
// i 4

// var moveZeroes = function (nums) {
//   let j = 0; // Pointer to place the next non-zero element

//   // First pass: Move non-zero elements to the front of the array
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[j] = nums[i];
//       j++;
//     }
//     console.log("asdf", nums);
//   }
//   console.log("asdf", nums);
//   // Second pass: Fill the remaining positions with zeros
//   for (let i = j; i < nums.length; i++) {
//     nums[i] = 0;
//   }
// };

// // Example usage:
// const nums = [0, 1, 0, 3, 12];
// moveZeroes(nums);
// console.log(nums);
const nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
var intersect = function (nums1, nums2) {
  const countMap = new Map();
  const result = [];

  for (let num of nums1) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  console.log(countMap);
  for (let num of nums2) {
    if (countMap.get(num) > 0) {
      result.push(num);
      countMap.set(num, countMap.get(num) - 1); // Decrease the count
    }
  }
  console.log(result);
  return result;
};

intersect(nums1, nums2);
