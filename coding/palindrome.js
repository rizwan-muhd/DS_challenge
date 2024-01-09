const palindrome = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

const res = palindrome("helleH");
console.log(res);
