const User = require("../models/user");

const { sendEmail1 } = require("../config/email");
const randomCode = Math.floor(100001 + Math.random() * 900000);

const authController = {
  signin: async (req, res) => {
    try {
      console.log("body:", req.body, "\n");
      const { email, password, role } = req.body;
      const check = await User.findOne({
        email: email,
        //password: password,
        role: role,
      });
      console.log("check", check);
      if (check && check.role === "admin") {
        res.json("adminsuccess");
      } else if (check && check.role === "user") {
        res.json("usersuccess");
      } else if (check && check.role === "employee") {
        res.json("employeesuccess");
      } else {
        res.json("siginfail");
      }
    } catch (err) {
      res.json("fail");

      res.status(500).json({
        message: err.message,
      });
    }
  },
  verifyEmailSignUp: async (req, res) => {
    try {
      const { email } = req.body;
      await sendEmail1(email, randomCode.toString());
      //find
      const check = await User.findOne({
        email: email,
      });
      if (check) {
        res.json("emailExist");
        return;
      }
      
      res.json("sendemailsuccess");
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },

  register: async (req, res) => {
    try {
      const maxId = await User.findOne({}, { id: 1 })
        .sort({ id: -1 })
        .limit(1)
        .exec();
      const {
        email,
        password,
        confirmpassword,
        firstname,
        lastname,
        role,
        confirmationCode,
      } = req.body;

      if (confirmationCode !== randomCode.toString()) {
        await res.json("confirmationCodefail");
        return;
      } else if (password !== confirmpassword) {
        await res.json("passwordnotmatch");
        return;
      }

      const newUser = new User({
        id: maxId.id + 1,
        email,
        password,
        firstname,
        lastname,
        username: firstname + "" + lastname,
        role,
        confirmationCode: confirmationCode,
      });
      const result = await newUser.save();
      if (result && result.role === "user") {
        res.json("RegisterUserSuccess");
        console.log("RegisterUserSuccess");
        return;
      } else if (result && result.role === "employee") {
        res.json("RegisterEmployeesUccess");
        console.log("RegisterEmployeesUccess");
        return;
      } else {
        res.json("RegisterFail");
        console.log("RegisterFail");
      }
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
      //res.json({ message: "fogotpassword loadding" });
      const { email, password, confirmationCode } = req.body;
      console.log(req.body);
      const check = await User.findOne({
        email: email,
      });
      const check2 = await User.findOne({
        confirmationCode: confirmationCode,
      });
      if (check && check2) {
        res.json("resetpasswordsuccess");
      } else {
        res.json("resetpasswordfail");
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  checkConfirmationcode: async (req, res) => {
    try {
      //res.json({ message: "fogotpassword loadding" });

      const { confirmationCode } = req.body;
      console.log(req.body);
      const check = await User.findOne({
        confirmationCode: confirmationCode,
      });

      if (check) {
        res.json("success");
      } else {
        res.json("notexist-code");
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

      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json("emailExist");
      }
      // Tạo confirmation code ngẫu nhiên
      const confirmationCode = Math.floor(100000 + Math.random() * 900000);
      console.log(confirmationCode);
      console.log(req.body);

      await sendEmail1(email, confirmationCode.toString());
      await User.updateOne(
        { email: email },
        { $set: { confirmationCode: confirmationCode } }
      );

      res.json("sendCodeSuccess");
    } catch (err) {
      res, json("fail");
      res.status(500).json({
        message: err.message,
      });
    }
  },

};
module.exports = authController;

