heights = [1, 1, 4, 2, 1, 3];
var heightChecker = function (heights) {
  const count = 0;
  const normal = heights;
  console.log(normal);

  for (let i = 0; i < heights.length; i++) {
    if (normal[i] !== sortedHeight[i]) {
      count = count + 1;
    }
  }
  return count;
};

const res = heightChecker(heights);
console.log("res", res);
