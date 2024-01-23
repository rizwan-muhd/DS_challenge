const nums = [3, 3, 3, 2, 2];
const val = 3;
let filteredArray = [];

const removeElement = (nums, val) => {
  //   filteredArray = nums.filter((num) => {
  //     return num !== val;
  //   });
  //   const numbers = filteredArray;
  //   console.log(filteredArray);
  //   const removItems = nums.length - filteredArray.length;
  //   console.log(removItems);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1); // Remove the element at index i
      nums.push("_"); // Add an underscore to the end of the array
    }
  }
  return nums;
};

const ans = removeElement(nums, val);

console.log(ans);
