// // hoisting
// // hoisting in javascript is concept that refer to the concept of moving declaration to the top their scope

// hoistingFunctin();

// function hoistingFunctin() {
//   console.log("Hoisting ");
// }
// let x;
// console.log(x);

// let y = null;
// console.log(y);

// const person = {
//   name: "John",
//   greet: function () {
//     console.log("hello", this.name);
//   },
// };

// person.greet();

// var n = 10;
// var m = "10";
// console.log(n == m);

// // closure
// // closure are functions that have access to variables from the outer function even after the outer function are finished executing

// function outer() {
//   var outerValue = "hello outer";

//   function inner() {
//     console.log(outerValue);
//   }

//   return inner();
// }

// // outer();

// // implicit type coercion
// var num1 = 10;
// var num2 = "4";

// console.log(num2 + num1);

// const obj1 = {
//   name: "Rizwan",
//   place: "bangalore",
// };

// const obj2 = { ...obj1, age: 20 };
// const obj3 = Object.assign({}, obj1);

// console.log(obj2, obj3);

// //HOF
// function multiplyByTow(num) {
//   return num * 2;
// }

// function applyOperation(num, operation) {
//   return operation(num);
// }

// const result = applyOperation(15, multiplyByTow);

// console.log(result);

// //function declaraion

// function mutiply(a, b) {
//   return a * b;
// }

// // function express

// const sum = function (a, b) {
//   return a + b;
// };

// // types of errors
// //syntax error
// // runtime error
// // logical error

// // Recursion Progrmaing technique helps to call function itself

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// const res = factorial(5);
// console.log(res);

// // constructor function in js
// function person1(name, email) {
//   this.name = name;
//   this.email = email;
// }

// //callback function passed as a arguments to another function which is then invoked inside the outer function its allows asynchronus or even driven programning

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = "data";
//     callback(data);
//   }, 1000);
// }

// function processData(data) {
//   console.log(data);
// }

// fetchData(processData);

// // promises

// function fetchData1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = "data";
//       resolve(data);
//     }, 2000);
//   });
// }

// fetchData1()
//   .then((data) => {
//     console.log("res", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //synchronus
// console.log("1");
// console.log("2");
// console.log("3");

// arrow function
// const add = (a, b) => a + b;

// console.log(add(2, 4));

// const arr = [20, 3, 56, 64, 3];

// arr.map((data) => {
//   console.log(data);
// });

// const unique = [...new Set(arr)];
// console.log(unique);

console.log(x);
var x;
