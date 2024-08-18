const s = "abc",
  t = "ahbgdc";
const SubString = (s, t) => {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

const res = SubString(s, t);

console.log(res);
