var nums = [2, 7, 11, 15];
let target = 9;
var pos = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == 9) {
      //   pos.push(i, j);
      pos[0] = i;
      pos[1] = j;
      break;
    }
  }
}
console.log(pos);
