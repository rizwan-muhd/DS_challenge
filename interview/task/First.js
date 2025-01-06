const arr = [3, 15, 7, 19, 34, 5];

const secondSmallest = (arr) => {
  let large = arr[0];
  let second = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < large) {
      second = large;
      large = arr[i];
    } else if ((second === null || second > arr[i]) && arr[i] > large) {
      second = arr[i];
    }
  }

  console.log(second);
};

secondSmallest(arr);
