var strStr = function (haystack, needle) {
  const arr = [];
  for (let i = 0; i < haystack.length; i++) {
    if (needle[i] === haystack[i]) {
      arr.push(i);
    } else if (arr.length === needle.length) {
      return arr[0];
    }
  }
  return -1;
};

const haystack = "sadbutsad",
  needle = "sad";

const res = strStr(haystack, needle);
console.log(res);
