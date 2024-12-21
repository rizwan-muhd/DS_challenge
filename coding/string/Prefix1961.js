const s = "iloveleetcode",
  words = ["apples", "i", "love", "leetcode"];
var isPrefixString = function (s, words) {
  let str = "";
  for (let i = 0; i < words.length; i++) {
    str += words[i];
    if (str === s) {
      return true;
    }
  }
  return false;
};

const res = isPrefixString(s, words);
console.log(res);
