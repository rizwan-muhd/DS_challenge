const fibnacciNumber = (n) => {
  console.log(n);
  const arr = [0, 1];
  while (arr.length < n + 1) {
    let val = arr[arr.length - 2] + arr[arr.length - 1];
    arr.push(val);
  }
  console.log(arr);
  return arr[n];
};

const res = fibnacciNumber(10);
console.log(res);

// 0 ,1,1,2
// return
