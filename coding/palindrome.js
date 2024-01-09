const palindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

const res = palindrome("helle");
console.log(res);
