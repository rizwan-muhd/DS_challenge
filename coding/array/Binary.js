var countBits = function (n) {
  let arr = [];
  function convetBinary(decimal) {
    let binary = 0;
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
    return binary || 0;
  }
  for (let i = 0; i <= n; i++) {
    const res = convetBinary(i);
    arr.push(res);
  }

  console.log(arr);
};

countBits(5);
