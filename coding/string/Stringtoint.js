var myAtoi = function (s) {
  let i = 0;
  let sign = 1;
  let num = 0;
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  // Skip leading whitespace
  while (s[i] === " ") {
    i++;
  }

  // Handle optional sign
  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  // Process digits
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    num = num * 10 + (s[i] - "0");
    i++;
  }

  // Apply sign
  num *= sign;

  // Handle overflow
  if (num > INT_MAX) {
    return INT_MAX;
  }
  if (num < INT_MIN) {
    return INT_MIN;
  }

  return num;
};

const s = "words and 987";
myAtoi(s);

const checkValid = () => {
  let i = 0;
  let sign = 1;
  let num = 0;
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  while (s[i] === " ") {
    i++;
  }

  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  num *= sign;

  if (num > INT_MAX) {
    return INT_MAX;
  }

  if (num < INT_MIN) {
    return INT_MIN;
  }

  return num;
};
