const User = require("../models/user");
const mongoose = require("mongoose");

const userController = {
  deleteUser: async (req, res) => {
    try {
      console.log("body:", req.body, "\n");
      const { email } = req.body;
      const check = await User.findOneAndDelete({
        email: email,
      });
      if (check) {
        res.json("deleted");
      } else {
        res.json("notexist");
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  editUser: async (req, res) => {
    try {
      const { id } = req.params;
      const update = req.body; // Thông tin mới của người dùng
      const check = await User.findByIdAndUpdate(id, update, { new: true });
      if (check) {
        res.json("updated");
      } else {
        res.json("notexist");
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  getAllusers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};

module.exports = userController;
