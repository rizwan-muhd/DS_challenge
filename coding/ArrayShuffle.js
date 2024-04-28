const nums = [1, 2, 3, 4, 4, 3, 2, 1];

let n = 4;

const shuffleArray = () => {
  const newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(nums[i]);
    newArr.push(nums[i + n]);
  }
  return newArr;
};

const res = shuffleArray(nums);
console.log(res);
