const changeWordOrder = (s) => {
  let result = "";
  let word = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (word !== "") {
        result += word + " ";
        word = "";
      }
    } else {
      word = s[i] + word;
    }
  }

  if (word !== "") {
    result += word;
  }
  console.log(result);
  return result;
};
const s = "hd fkdkjf sj  hello world jh ";
// rizwan am i
const res = changeWordOrder(s);
// console.log(res);
