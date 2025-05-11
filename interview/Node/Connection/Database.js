const mongoose = require("mongoose");

const Connection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");

    console.log("Database Connected");
  } catch (err) {
    console.log("Error in connection", err);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Database Disconnect");
});

mongoose.connection.on("error", (error) => {
  console.log("Error in Connection ", error);
});

module.exports = Connection;
