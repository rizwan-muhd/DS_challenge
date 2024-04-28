const arr = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];

var maximumWealth = function (arr) {
  let greatestSum = 0;
  let current = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      current += arr[i][j];
    }

    if (greatestSum < current) {
      greatestSum = current;
      current = 0;
    }
    current = 0;
  }
  return greatestSum;
};

const res = maximumWealth(arr);
console.log(res);
