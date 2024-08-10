const nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1;

const sortArray = (nums1, nums2, m, n) => {
  for (let i = 0; i <= nums1.length; i++) {
    if (i < m) {
      nums1[i] = nums1[i];
      console.log(nums1[i]);
    } else if (i >= n) {
      nums1[i] = nums2[i - n];
      console.log(nums1[i]);
    }
  }
  nums1.sort();
};

const res = sortArray(nums1, nums2, m, n);
console.log(nums1);
