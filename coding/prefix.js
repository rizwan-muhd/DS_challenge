strs = ["flower", "flow", "flight"];

let flag = false;
var minLength = strs[0].length;
for (let i = 1; i < strs.length; i++) {
  var length = strs[i].length;
  if (length < minLength) {
    minLength = length;
  }
}
console.log(minLength);

var prefix = "";
var letter = "";
for (let j = 0; j < minLength; j++) {
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].charAt(j) !== strs[i - 1].charAt(j)) {
      flag = true;
      break;
    }
    letter = strs[i].charAt(j);
  }

  if (flag) {
    break;
  }
  prefix += letter;
}

console.log(prefix);
