const rotate = () => {
  k = k % nums.length;
  console.log(k);
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  console.log(nums);
};

function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

// let nums = [1, 2, 3, 4, 5, 6, 7],
//   k = 3;

// rotate(nums, k);

// palindrome

const palindrome = (word) => {
  let lowerString = "";
  for (let i = 0; i < word.length; i++) {
    let str = word[i].toLowerCase();
    if ((str >= "a" && str <= "z") || (str >= "0" && str <= "9")) {
      lowerString += str;
    }
  }

  console.log(lowerString);

  let left = 0;
  let right = lowerString.length - 1;
  while (left < right) {
    if (lowerString[left] !== lowerString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// const word = "malay_alam";
// const res = palindrome(word);
// console.log(res);

const array = [-245, -81, -9, 4, 7, -45];

const secondLargest = (array) => {
  let largest = array[0];
  let secondLargest = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (
      (secondLargest === null || array[i] > secondLargest) &&
      array[i] < largest
    ) {
      secondLargest = array[i];
    }
  }

  console.log(secondLargest);
};

// secondLargest(array);

function NumberIsPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i * i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// const num = 17;
// const res = NumberIsPrime(num);
// console.log(res);

const firstNonRepeatingChar = () => {
  const charCount = {};

  // for (let i = 0;i<)
};

var binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
const nums = [-1, 0, 3, 5, 9, 12],
  target = -1;
const res = binarySearch(nums, target);
console.log(res);
