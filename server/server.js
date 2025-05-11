// const express = require("express");
// var bodyParser = require("body-parser");
// const cors = require("cors");
// const ExcelJS = require("exceljs");
// const app = express();

// const { lstat } = require("fs");

// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());
// app.use(cors());

// app.post("/upload", async (req, res) => {
//   const data = req.body; // Assuming req.body contains the data you want to export

//   // Create a new workbook and a worksheet
//   const workbook = new ExcelJS.Workbook();
//   const worksheet = workbook.addWorksheet("Data");

//   // Add columns to the worksheet (assuming your data is an array of objects)
//   worksheet.columns = Object.keys(data[0]).map((key) => ({
//     header: key,
//     key: key,
//     width: 20, // Set column width
//   }));

//   // Add rows to the worksheet
//   data.forEach((item) => {
//     worksheet.addRow(item);
//   });

//   // Set response headers to download the Excel file
//   res.setHeader(
//     "Content-Type",
//     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//   );
//   res.setHeader("Content-Disposition", "attachment; filename=data.xlsx");

//   // Write the workbook to the response
//   await workbook.xlsx.write(res);
//   res.end();
// });
// app.listen(8080, () => {
//   console.log("server runing on port 8080");
// });
// find the sum of prime number
// n = 10
// 2,3,5,7,11,13,17,19,23,29
// const checkPrime = (num1) => {
//   if (num1 < 2) {
//     return false;
//   }

//   for (let i = 2; i < num1; i++) {
//     if (num1 % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const sumOfPrimeNumber = (num) => {
//   let sum = 0;
//   let k = 0;
//   let number = 2;
//   while (k < num) {
//     const res = checkPrime(number);

//     if (res) {
//       sum = sum + number;
//       k++;
//     }
//     number++;
//   }

//   console.log(sum);
// };

// const num = 1;

// // sumOfPrimeNumber(num);

// // const num1 = 7;
// // const res = checkPrime(num1);
// // console.log(res);

// const changeWordOrder = (s) => {
//   let result = "";
//   let word = "";

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === " ") {
//       if (word !== "") {
//         result += word + " ";
//         word = "";
//       }
//     } else {
//       word = s[i] + word;
//     }
//   }

//   if (word !== "") {
//     result += word;
//   }
//   console.log(result);
//   return result;
// };
// const s = "hd fkdkjf sj  hello world jh ";
// // rizwan am i

// const arr1 = [2, 6, 13, 5, 8];

// const findSecondLarge = () => {
//   let secondLarge = null;
//   let large = arr1[0];
//   for (let i = 1; i < arr1.length; i++) {
//     if (arr1[i] < large) {
//       secondLarge = large;
//       large = arr1[i];
//     } else if (
//       (secondLarge === null || arr1[i] < secondLarge) &&
//       arr1[i] > large
//     ) {
//       secondLarge = arr1[i];
//     }
//   }

//   console.log(secondLarge);
// };

// findSecondLarge(arr1);
// const user = true;
// const promise = new Promise((resoleve, reject) => {
//   if (user) {
//     resoleve("user succes");
//   } else {
//     reject("user");
//   }
// });
// promise
//   .then((data) => {
//     console.log("see", data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

const demo = async () => {
  const userData = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then((data) => {
    console.log(data.body);
  });

  // const storeData = store();
};

demo();

// monogdb connection
const mongoose = require("mongoose");
const axios = require("axios");

mongoose.connect("https://mon").then;

const thirdPartyData = async () => {
  try {
    const data = axios.get("http://www.google.com/data");
    return data;
  } catch (err) {
    console.log(err);
  }
};

const jsonData = [
  {
    name: "rizwan",
    age: 24,
  },
  {
    name: "muhammed",
    age: 25,
  },
];

//backend
//server -> database
// route -> (/get)
// models -> user,prouct
// service -> mongo upda ,
// constroller->
//doata

//
