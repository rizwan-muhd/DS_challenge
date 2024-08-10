const n = 10;

const findNumbers = (n) => {
  let target = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      target = target + i;
    }
  }
  return target;
};

const res = findNumbers(n);

console.log(res);

const num1 = -10,
  num2 = 4;
const addIntegers = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
};

const sum = addIntegers(num1, num2);
console.log(sum);
