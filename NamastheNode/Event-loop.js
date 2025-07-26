const { promiseHooks } = require("v8");

console.log("1 section");

setTimeout(() => {
  console.log("2 section");
}, 1000);

setTimeout(() => {
  console.log("3 section");
}, 0);

console.log("4 section");
