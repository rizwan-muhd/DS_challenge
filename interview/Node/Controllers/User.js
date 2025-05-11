const User = require("../Models/User");

const addUserController = async (req, res) => {
  try {
    const user = await User.create(...req.body);
    res.status(201).json({ user: user });
  } catch (err) {
    console.log("Error", err);
  }
};

const deleteUserController = () => {};

const getUserController = () => {};

module.exports = {
  addUserController,
  deleteUserController,
  getUserController,
};
