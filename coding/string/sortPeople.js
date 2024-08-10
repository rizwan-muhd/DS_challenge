const names = ["Mary", "John", "Emma"],
  heights = [180, 165, 170];

const sortPeople = (names, heights) => {
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[i] < heights[j]) {
        let temp = heights[i];
        heights[i] = heights[j];
        heights[j] = temp;
        let string = names[i];
        names[i] = names[j];
        names[j] = string;
      }
    }
  }
  return names;
};

const res = sortPeople(names, heights);

console.log(res);
