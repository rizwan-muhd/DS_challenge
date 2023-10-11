const arr = [2, 6, 3, 5, 1, 8];
const target = 9;
const values = [];

const targetFind = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        break;
      } else if (arr[i] + arr[j] == target) {
        values.push(i, j);
        return;
      }
    }
  }
};

targetFind();
console.log("values", values);
