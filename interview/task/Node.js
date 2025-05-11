// console.log(typeof null);

const { rejects } = require("assert");
const { response } = require("express");

// console.log(typeof NaN);

// console.log(typeof undefined);

// console.log(typeof 1);

// console.log(typeof "asdfg");

// console.log(a);

// let a = 5;

// primitive and non primitive data types
//Number           // object
//String            //array
//Boolean              //functions
// Undefined
// Null
//Symbol
//BigInt

// const sym1 = Symbol("id");
// const sym2 = Symbol("id");

// console.log(sym1 === sym2);

// let flowerbed = [1, 0, 0, 0, 1],
//   n = 1;
// var canPlaceFlowers = function (flowerbed, n) {
//   let count = 0; // To track placed flowers

//   for (let i = 0; i < flowerbed.length; i++) {
//     if (
//       flowerbed[i] === 0 &&
//       (i === 0 || flowerbed[i - 1] === 0) &&
//       (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
//     ) {
//       flowerbed[i] = 1; // Plant a flower
//       count++;
//       if (count >= n) return true; // No need to check further
//       i++; // Skip the next index to maintain the non-adjacent rule
//     }
//   }
// };

// canPlaceFlowers(flowerbed, n);
// console.log(flowerbed);

// var maximumProduct = function (nums) {
//   let sum = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     sum = sum * nums[i];
//   }
//   console.log(sum);
// };

// let nums = [1, 2, 3];
// maximumProduct(nums);

// let a = "1";
// console.log(typeof a);
// console.log(typeof 2);
// console.log(typeof NaN);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof );

// (function () {
//   console.log("demo function");
// })();

const promise = new Promise((reslove, reject) => {
  if (false) {
    reslove("success");
  } else {
    reject("error");
  }
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
