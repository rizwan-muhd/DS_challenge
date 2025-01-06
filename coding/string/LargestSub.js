const num = "6777133339";
let val = num.charAt(0);
let large = null;
var largestGoodInteger = function (num) {
  for (let i = 1; i < num.length; i++) {
    // O(n)
    if (val.charAt(val.length - 1) === num[i]) {
      val += num[i];
      // console.log(val);
      if (val.length < 4 && (val > large || large === null)) {
        large = val;
      }
    } else {
      val = num[i];
    }
  }

  console.log(large);
};

largestGoodInteger(num);
