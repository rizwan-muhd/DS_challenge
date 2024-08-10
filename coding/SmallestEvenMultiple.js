// const EvenMultiple = (n) => {
//   let smallest;
//   let num = 2;
//   while (num >= 2) {
//     if (num % 2 === 0 && num % n === 0) {
//       smallest = num;
//       break;
//     } else {
//       num = num + 2;
//     }
//   }
//   return smallest;
// };

// const n = 6;
// const res = EvenMultiple(n);

// console.log(res);

// missing number

const findMissingNumber = () => {
  let value;
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      value = i;
    }
  }

  return value;
};

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const res = findMissingNumber(nums);

console.log(res);
