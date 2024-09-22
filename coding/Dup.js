const nums1 = [0, 1, 1, 0];

var getSneakyNumbers = function (nums) {
  let obj = {};
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
    if (obj[nums[i]] > 1) {
      arr.push(nums[i]);
    }
  }
  arr.sort((a, b) => a - b);
  console.log(obj);
  console.log(arr);
};

getSneakyNumbers(nums);

// 2614. Prime In Diagonal
let nums2 = [
  [1, 2, 3],
  [5, 17, 7],
  [9, 11, 10],
];
var diagonalPrime = function (nums) {
  let large = nums[0][0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (i === j) {
        for (let k = 2; k < Math.floor(nums[i][j] / 2); k++) {
          if (k !== nums[i][j] && nums[i][j] % k !== 0 && nums[i][j] > large) {
            large = nums[i][j];
          }
        }
      }
    }
  }

  console.log(large);
};

diagonalPrime(nums);

let nums = [
  [1, 2, 3],
  [5, 17, 7],
  [9, 11, 10],
];
let large = -1;
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 0; i * i < n; i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < nums.length; i++) {
  if (isPrime(nums[i][i]) && nums[i][i] > large) {
    large = nums[i][i];
  }
}

console.log(large);

const word = "ABCCED";
let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

// while (i < word.length) {

var exist = function (board, word) {
  let k = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (word[k] === board[i][j]) {
        // console.log(word[k]);
        k++;
        if (k === word.length - 1) {
          //   console.log(k);
          console.log("true");
          return true;
        }
      }
    }
  }
  //   console.log(k);
  return false;
};
const res = exist(board, word);

console.log(res);

//
