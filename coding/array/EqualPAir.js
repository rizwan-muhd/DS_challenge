// var divideArray = function (nums) {
//   let frequency = {};
//   for (let num of nums) {
//     frequency[num] = (frequency[num] || 0) + 1;
//   }

//   for (let key in frequency) {
//     if (frequency[key] % 2 !== 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const nums = [13, 15, 1000000000];
// // divideArray(nums);

// var minMoves = function (nums) {
//   let minNum = Math.min(...nums);
//   console.log(minNum);
//   return nums.reduce((sum, num) => sum + (num - minNum), 0);
// };
// minMoves(nums);
let num = 38;

var addDigits = function (num) {
  let sum = 0;

  while (sum < 10) {
    let val = num % 10; // Get the last digit
    sum += val; // Add it to sum
    num = num !== 0 ? Math.floor(num / 10) : sum; // Remove the last digit
  }

  console.log(sum);
};

addDigits(num); // Output: 11
