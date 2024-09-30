const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const ExcelJS = require("exceljs");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.post("/upload", async (req, res) => {
  const data = req.body; // Assuming req.body contains the data you want to export

  // Create a new workbook and a worksheet
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Data");

  // Add columns to the worksheet (assuming your data is an array of objects)
  worksheet.columns = Object.keys(data[0]).map((key) => ({
    header: key,
    key: key,
    width: 20, // Set column width
  }));

  // Add rows to the worksheet
  data.forEach((item) => {
    worksheet.addRow(item);
  });

  // Set response headers to download the Excel file
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader("Content-Disposition", "attachment; filename=data.xlsx");

  // Write the workbook to the response
  await workbook.xlsx.write(res);
  res.end();
});
app.listen(8080, () => {
  console.log("server runing on port 8080");
});
