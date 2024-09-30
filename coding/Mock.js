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

// findDup(arr);
const num = 5;
const diamondStar = () => {
  let star = " ";
  for (let i = 1; i <= 2 * num - 1; i++) {
    let totalStar = i <= num ? i : 2 * num - i;
    let totalSpace = num - totalStar;
    for (let j = 0; j < 2 * totalSpace; j++) {
      star += " ";
    }
    for (let k = 1; k <= 2 * totalStar - 1; k++) {
      star += "* ";
    }
    console.log(star);
    star = " ";
  }
};

diamondStar(num);
