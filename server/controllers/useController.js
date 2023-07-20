const User = require("../models/user");
const mongoose = require("mongoose");
const userController = {
  addUser: async (req, res) => {
    try {
        res.json({ message: "adduser" });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  editUser: async (req, res) => {
    try {
      res.json({ message: "edituser" });
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
