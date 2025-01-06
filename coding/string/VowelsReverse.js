const s = "IceCreAm";

const reverseVowels = (s) => {
  let vowels = "aeiouAEIOU";
  let i = 0;
  let j = s.length - 1;
  let arr = s.split("");
  console.log(arr);
  while (i < j) {
    if (!vowels.includes(arr[i])) {
      i++;
    } else if (!vowels.includes(arr[j])) {
      j--;
    } else {
      let temp;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      i++;
      j--;
    }
  }
  const res = arr.join("");
};

reverseVowels(s);
