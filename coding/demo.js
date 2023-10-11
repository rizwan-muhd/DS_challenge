let num = -2147483648;

var pos = num.toString().split("");
var reverse = num.toString().split("").reverse().join("");

if (pos[0] === "-") {
  console.log("negative");
  var arr = reverse.toString().split("");
  // arr.splice(0, 0, "-");
  arr.pop(arr.length);
  var output = arr.join("");
  console.log(output);
  // 2147483648;
  if (output < Math.pow(2, 31)) {
    return output;
  }
  console.log("here");
  return 0;
}

// var arr = [];
// const arr = num.toString().split("");
// var l = "";
// var s = "";
// const temp = arr;
// console.log(arr);

// const dec = arr.sort().reverse();
// dec.map((num) => {
//   return (l += num);
// });
// console.log("larger", l);

// const output2 = temp.sort();
// output2.map((num) => {
//   return (s += num);
// });
// console.log("smaller", s);

//
