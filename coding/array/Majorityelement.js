const nums = [3, 2, 3];

var majorityElement = function (nums) {
  const obj = {};
  const result = [];
  const threshold = Math.floor(nums.length / 3);

  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }

  for (let key in obj) {
    if (obj[key] > threshold) {
      result.push(parseInt(key));
    }
  }

  return result;
};

const res = majorityElement(nums);
console.log(res);
