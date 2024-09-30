var firstMissingPositive = function (nums) {
  for (let i = 1; i <= nums.length + 1; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};

// const nums = [1, 2, 0];
// firstMissingPositive(nums);

var countPrimes = function (n) {
  if (n <= 2) {
    return 0;
  }
  let count = 0;
  for (let k = 2; k < n; k++) {
    let isPrime = true;

    for (let i = 2; i * i <= k; i++) {
      if (k % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  console.log(count);
};

// const n = 10;
// countPrimes(n);
const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;

  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i]);
  }
  nums1.sort();
  console.log(nums1);
};

merge(nums1, m, nums2, n);
