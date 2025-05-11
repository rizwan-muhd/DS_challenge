const express = require("express");
const Connection = require("./Connection/Database");
const {
  addUserController,
  deleteUserController,
  getUserController,
} = require("./Controllers/User");

const app = express();

Connection();

app.get("/test", (req, res) => {
  res.send("hello server");
});

app.post("/add-user", addUserController);
app.get("/get-user", getUserController);

app.listen(4005, () => {
  console.log("Server running on port", 4005);
});
