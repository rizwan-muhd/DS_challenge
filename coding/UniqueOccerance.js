const arr = [1, 2, 2, 1, 1, 3];
const newarr = [];
let count = 1;

const uniqueOccerance = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count = count + 1;
      }
    }
    console.log(`${arr[i]}`, count);

    for (const val of newarr) {
      if (!val.split("=")[0].trim()) {
        newarr.push(`${arr[i]} = ${count}`);
      }
    }
    count = 1;
  }
};

uniqueOccerance(arr);
console.log(newarr);
