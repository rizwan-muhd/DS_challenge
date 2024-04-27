const array = [81, 9, 4, 7, 45, 245];

const secondLargest = () => {
  let largest = array[0];
  let secondLarge = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLarge = largest;
      largest = array[i];
    } else if (
      array[i] < largest &&
      (secondLarge === null || secondLarge < array[i])
    ) {
      secondLarge = array[i];
    }
  }

  console.log("large", largest);
  console.log("second large", secondLarge);
};

secondLargest(array);
