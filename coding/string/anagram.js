const anagram = (text1, text2) => {
  text1 = text1.split("").sort().join("");
  text2 = text2.split("").sort().join("");

  return text1 === text2;
};

const s = "anagram";
const t = "nagar";
const res = anagram(s, t);
console.log(res);
