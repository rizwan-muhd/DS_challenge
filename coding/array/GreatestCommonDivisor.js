var findGCD = function (nums) {
  nums.sort((a, b) => a - b); // sorting
  let small = nums[0]; // samllest
  let large = nums[nums.length - 1]; // largest
  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };
  // 0,      78
  return gcd(small, large);
};

const nums = [27, 7, 10, 2, 78];
const res = findGCD(nums);
console.log(res);
