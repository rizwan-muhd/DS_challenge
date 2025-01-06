const haystack = "leetcode",
  needle = "leetco";
var strStr = function (haystack, needle) {
  let i = 0,
    j = 0;
  let start = -1;
  if (needle === "") {
    return 0;
  }
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      if (start === -1) {
        start = j;
      }
      i++;
      j++;
      if (j === needle.length) return start;
    } else {
      if (start !== -1) i = start + 1;
      else i++;
      j = 0; // Reset needle index
      start = -1;
    }
  }

  return -1;
};

const res = strStr(haystack, needle);
console.log(res);
