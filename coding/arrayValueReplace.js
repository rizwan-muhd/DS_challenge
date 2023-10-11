const arr = [0, 1, 2, 2, 3, 0, 4, 2];
let num = 2;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    arr.splice(i, 1, "_");
    count = count + 1;
  }
}
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == "_") {
      let temp = arr[i];
      if (arr[j] !== "_") {
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
console.log(count, arr);
