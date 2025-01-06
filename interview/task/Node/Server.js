const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const login = () => {
  return (token = jwt.sign({ name: "Rizwan" }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  }));
};

const res = login();
console.log(res);

const verfiy = (token) => {
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = verified; // Add user payload to request
    // next();
    console.log(verified);
  } catch (err) {
    console.log(err);
    // res.status(400).json({ message: "Invalid token" });
  }
};

verfiy(res);

app.listen(5001, () => {
  console.log("Server runing on port 5001");
});
