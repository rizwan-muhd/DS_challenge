let letters = ["x", "x", "y", "y"],
  target = "z";
let smallest = null;

const findsmallest = () => {
  target = target.toLowerCase();
  target = target.charCodeAt(0);
  //   console.log(target);
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i].toLowerCase();

    ascii_value = letter.charCodeAt(0);
    // let ascii_value_i = letters[i + 1].charCodeAt(0);
    // console.log(ascii_value);
    if (ascii_value > target) {
      smallest = letters[i];
      break;
    }
  }
  if (!smallest) {
    smallest = letters[0];
  }
  console.log(smallest);
};

findsmallest(letters, target);
