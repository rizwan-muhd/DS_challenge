var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      console.log(parseInt(key));
    }
  }
  console.log(obj);
};
// const nums = [2, 2, 3, 2];

// singleNumber(nums);

// 2761. Prime Pairs With Target Sum
var findPrimePairs = function (n) {
  let primes = [];

  for (let i = 2; i < n; i++) {
    for (let j = 2; j * j < i; j++) {
      if (i % j === 0) {
        break;
      }
    }
    primes.push(i);
  }
  console.log(primes);
};

// const n = 10;
// findPrimePairs(n);

var maximum69Number = function (num) {
  let str = num.toString();
  const arr = str.split("");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "6") {
      arr[i] = "9";
      break;
    }
  }
  arr.join("");
  console.log(parseInt(arr.join("")));
};
// const num = 9669;
// maximum69Number(num);

var secondHighest = function (s) {
  const arr = s.split("");
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "0" && arr[i] <= "9") {
      if (!newArr.includes(parseInt(arr[i]))) {
        newArr.push(parseInt(arr[i]));
      }
    }
  }
  newArr.sort((a, b) => a - b);
  console.log(newArr);
  if (newArr.length === 1 || newArr.length === 0) {
    return -1;
  } else {
    return newArr[newArr.length - 2];
  }
};
// const s = "abc1111";
// const res = secondHighest(s);
// console.log(res);

var alternateDigitSum = function (n) {
  const arr = n.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sum += parseInt(arr[i]);
    } else {
      sum -= parseInt(arr[i]);
    }
  }
  console.log(arr);
  console.log(sum);
};

const n = 25;
alternateDigitSum(n);
