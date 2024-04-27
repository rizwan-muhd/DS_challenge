const arr = [1, 2, 1];

const concat = (arr) => {
  //   for (i = 0; i < arr.length; i++) {
  //     arr.push(arr[i]);
  //   }
  const newArr = arr;

  const res = arr.concat(newArr);
  console.log(res);
};

const res = concat(arr);
