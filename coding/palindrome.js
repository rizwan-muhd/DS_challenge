const palindrome = (str) => {
  str = str
    .split("")
    .join("")
    .replace(/[\s_]/g, "")
    .replace(/[^\w]/g, "")
    .toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const res = palindrome("ab_a");
console.log(res);
