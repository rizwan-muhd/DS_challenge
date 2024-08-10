// /**
//  * @param {number} n
//  * @return {boolean}
//  */ var isUgly = function (n) {
//   if (n === 1) {
//     return true;
//   } else if (
//     n % 2 !== 0 &&
//     n % 4 !== 0 &&
//     n % 6 !== 0 &&
//     n % 7 !== 0 &&
//     n % 8 !== 0 &&
//     n % 9 !== 0
//   ) {
//     return false;
//   } else if (n % 3 === 0 || n % 5 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const res = isUgly(1);
// console.log(res);

//missing number
