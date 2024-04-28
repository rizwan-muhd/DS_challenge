const array = [1, 1, 1, 1, 1];

const sumArray = () => {
  const newArr = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = array[i] + sum;
    newArr.push(sum);
  }
  return newArr;
};

const res = sumArray(array);
console.log(res);
