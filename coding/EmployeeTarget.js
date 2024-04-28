const hours = [5, 1, 4, 2, 2];
const target = 6;

var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) {
      count = count + 1;
    }
  }
  return count;
};

const res = numberOfEmployeesWhoMetTarget(hours, target);
console.log("res", res);
