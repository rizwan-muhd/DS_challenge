const checkArrayMedian = (arr1, arr2) => {
  const concatArray = arr1.concat(arr2).sort((a, b) => a - b);
  let medianPosition;
  let medianValue;
  console.log(concatArray);
  if (concatArray.length % 2 === 0) {
    medianPosition = Math.floor(concatArray.length / 2);
    let prevPosition = medianPosition - 1;
    medianValue = (concatArray[medianPosition] + concatArray[prevPosition]) / 2;
    console.log(medianValue);
  } else {
    medianPosition = Math.floor(concatArray.length / 2);
    medianValue = concatArray[medianPosition];
    console.log(medianValue);
  }
};

const arr1 = [3];
const arr2 = [-2, -1];

checkArrayMedian(arr1, arr2);
