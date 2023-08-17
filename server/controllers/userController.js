const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const userController = {
  getUserByemail: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email }); // Tìm kiếm người dùng theo email trong cơ sở dữ liệu

      if (!user) {
        // Nếu không tìm thấy người dùng, trả về thông báo lỗi
        return res.status(404).json({
          message: "User not found",
        });
      }

      // Nếu tìm thấy người dùng, trả về thông tin người dùng
      res.status(200).json({
        user,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },

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
      const { email, password, firstname, lastname, phonenumber, role } =
        req.body;
      console.log(req.body);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const maxId = await User.findOne({}, { id: 1 })
        .sort({ id: -1 })
        .limit(1)
        .exec();
      let newId = 1;
      if (maxId && maxId.id) {
        newId = maxId.id + 1;
      }
      const newUser = new User({
        id: newId,
        email,
        password: hashedPassword,
        username: `${firstname} ${lastname}`,
        firstname,
        lastname,
        role,
        id_card: `${email} not active id_card`,
        phonenumber,
      });
      // console.log(newUser);
      const result = await newUser.save();
      res.status(201).json("added");
    } catch (err) {
      console.error(err);
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
      const { _id } = req.body;
      const update = req.body; // Thông tin mới của người dùng
      console.log("update", update);
    
      const check = await User.findByIdAndUpdate(_id, update, { new: true });
      if (check) {
        res.json("updatedsuccess");
      } else {
        res.json("updatedfail");
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
