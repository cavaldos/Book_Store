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
        res.json("deletedfail");
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  addUser: async (req, res) => {
    try {
      const { id, email, password, username, phonenumber, role } = req.body;

      const maxId = await User.findOne({}, { id: 1 })
        .sort({ id: -1 })
        .limit(1)
        .exec();
      console.log("Max id:", maxId.id);
      const newUser = new User({
        id: maxId.id + 1,
        email,
        password,
        username,
        phonenumber,
        role,
      });

      // Generate id if it doesn't exist
      console.log("usernew", newUser);
      const result = await newUser.save();
      res.status(201).json("added");
    } catch (err) {
      res.status(500).json("addfail");
    }
  },
 

  getNumberOfUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users.length);
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
