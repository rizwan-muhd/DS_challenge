const e = require("cors");

// duplicate Elements
const arr = [2, 4, 5, 3, 2, 3, 4, 6];

const findDup = () => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(obj);
};

findDup(arr);
