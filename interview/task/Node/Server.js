// const express = require("express");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");

// const app = express();
// dotenv.config();

// const login = () => {
//   return (token = jwt.sign({ name: "Rizwan" }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   }));
// };

// const res = login();
// console.log(res);

// const verfiy = (token) => {
//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     // req.user = verified; // Add user payload to request
//     // next();
//     console.log(verified);
//   } catch (err) {
//     console.log(err);
//     // res.status(400).json({ message: "Invalid token" });
//   }
// };

// verfiy(res);

// app.listen(5001, () => {
//   console.log("Server runing on port 5001");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/test20")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Optionally enforce name as required
  },
});

const UserModel = mongoose.model("User", userSchema);

const addUser = async () => {
  try {
    const user = new UserModel({ name: "Muhammed Rizwan" });
    await user.save();
  } catch (err) {
    console.log(err);
  }
};
addUser();

const router = express.Router();

router.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.use("/api", router);

app.listen(4001, () => {
  console.log("server running on port 4001");
});
