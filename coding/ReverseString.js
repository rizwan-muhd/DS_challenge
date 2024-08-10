// const s = ["h", "e", "l", "l", "o"];

// const reverseString = (s) => {
//   for (let i = 0; i < s.length / 2; i++) {
//     let temp = s[s.length - i - 1];

//     s[s.length - i - 1] = s[i];
//     s[i] = temp;
//   }
// };

// reverseString(s);

// console.log(s);

// const operations = ["--X", "X++", "X++"];

// const findValue = () => {
//   let X = 0;
//   for (let i = 0; i < operations.length; i++) {
//     if (operations[i] == "X++" || operations[i] == "++X") {
//       X = X + 1;
//     } else if (operations[i] == "X--" || operations[i] == "--X") {
//       X = X - 1;
//     }
//   }

//   return X;
// };

// const res = findValue(operations);
// console.log(res);

// var finalString = function (s) {
//   let revereString = "";
//   for (let i = 0; i < s.length; i++) {
//     console.log(s[i]);
//     if (s[i] == "i" || s[i] == "I") {
//       revereString = revereString.split("").reverse().join("");
//     } else {
//       revereString += s[i];
//     }
//   }
//   return revereString;
// };
// const s = "string";
// const output = finalString(s);
// console.log(output);

const arr = [2, 4, 6, 7, 2, 2, 4, 6];
const obj = {};

const countValues = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
};

countValues(arr);
console.log(obj);
