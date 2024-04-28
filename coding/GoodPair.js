const arr = [1, 1, 1, 1];
var numIdenticalPairs = function (nums) {
  let totalPairs = 0;
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        totalPairs = totalPairs + 1;
      }
    }
  }
  return totalPairs;
};
// const res = numIdenticalPairs(arr);
// console.log(res);

// array words contain

let words = ["abc", "bcd", "aaaa", "cbc"];
let x = "a";
var findWordsContaining = function (words, x) {
  let count = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      count.push(i);
    }
  }
  return count;
};

const res = findWordsContaining(words, x);
console.log(res);

//
