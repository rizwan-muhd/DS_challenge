var arr = [1];
var odd = [];

for (let i = 0; i < arr.length; i++) {
  var count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (i == j) {
      continue;
    } else {
      if (arr[i] === arr[j]) {
        count = count + 1;
      }
    }
  }
  if (count === 0) {
    odd.push(arr[i]);
  }
}
// arr.filter((val) => {
//   return val !== ;
// }); 26
console.log(odd);
