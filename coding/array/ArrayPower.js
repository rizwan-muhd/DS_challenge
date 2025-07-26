var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;

  //   return true;
};

const n = 0;
console.log(isPowerOfTwo(n));
