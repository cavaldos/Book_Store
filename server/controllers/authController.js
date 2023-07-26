
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { sendEmail1 } = require("../config/email");
const authController = {
  signin: async (req, res) => {
    try {
      console.log("body:", req.body, "\n");
      const { email, password } = req.body;
      const check = await User.findOne({
        email: email,
        password: password,
      });
      if (check) {
        res.json("exist");
      } else {
        res.json("notexist");
      }
    } catch (err) {
      res.json("fail");

      res.status(500).json({
        message: err.message,
      });
    }
  },
  register: async (req, res) => {
    try {
      console.log("body:", req.body, "\n");
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        phonenumber: req.body.phonenumber,
        role: req.body.role,
      });
      const check = await User.findOne({
        email: req.body.email,
      });
      if (check) {
        res.json("exist");
      }
      const user = await newUser.save();
      res.status(200).json("success");
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  logout: async (req, res) => {
    try {
      res.json({ message: "logout" });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  resetpassword: async (req, res) => {
    try {
      res.json({ message: "fogotpassword loadding" });

      const { email, password, phonenumber, confirmationCode } = req.body;
      console.log(req.body);
      const check = await user.findOne({
        email: email,
        phonenumber: phonenumber,
      });
      const check2 = await user.findOne({
        confirmationCode: confirmationCode,
      });

      if (check) {
        if (confirmationCode !== check.confirmationCode) {
          res.json("code-no-texist");
        } else {
          // Cập nhật mật khẩu mới cho người dùng
          await user.updateOne(
            { email: email },
            { $set: { password: password } }
          );
          res.json("success");
        }
      } else {
        res.json("notexist");
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },

  sendConfirmationCode: async (req, res) => {
    try {
      const { email } = req.body;
      // Tạo confirmation code ngẫu nhiên
      const confirmationCode = Math.floor(100000 + Math.random() * 900000);
      console.log(confirmationCode);
      console.log(req.body);
      // Lưu confirmation code vào CSDL hoặc bất kỳ cách nào phù hợp
      await User.updateOne(
        { email: email },
        { $set: { confirmationCode: confirmationCode } }
      );
      // Gửi confirmation code đến địa chỉ email
      await sendEmail1(email, confirmationCode.toString());

      res.json("success");
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};
module.exports = authController;

