const convertTemprature = (celsius) => {
  const kelvin = celsius + 273.15;
  const Fahrenheit = celsius * 1.8 + 32.0;
  const arr = [];
  arr[0] = kelvin;
  arr[1] = Fahrenheit;
  return arr;
};

const celsius = 36.5;
const res = convertTemprature(celsius);

console.log(res);
