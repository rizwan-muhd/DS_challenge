// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };
// const nums = [-1, 0, 3, 5, 9, 12],
//   target = 12;

// const res = search(nums, target);

// console.log(res);
// *    *
//  *  *
//    *
//  *  *
// *    *

function PrintX(n) {
  //   if (n % 2 === 0) {
  //     return "Please choose odd number";
  //   }

  //   for (let i = 0; i < n; i++) {
  //     let row = "";
  //     for (let j = 0; j < n; j++) {
  //       if (i === j || i + j === n - 1) {
  //         row += "*";
  //       } else {
  //         row += " ";
  //       }
  //     }
  //     console.log(row);
  //   }

  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < n; j++) {
      if (i <= j) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

PrintX(11);
