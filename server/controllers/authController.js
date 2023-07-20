const user = require("../models/user");

const authController = {
  signin: async (req, res) => {
    try {
      res.json({ message: "login success" });

      const check = await user.findOne({
        email: email,
        password: password,
      });
      if (check) {
        res.json({ message: "login success" });
      }
      res.json({ message: "login false" });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  register: async (req, res) => {
    const { firstname, lastname, email, password, phonenumber } = req.body;

    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      phonenumber: phonenumber,
      confirmationCode: "",
    };
    /**
    {
      "firstname": "Nguyen",
      "lastname": "Van A",
      "email": "asadf@gmail.com",
      "password": "123456",
      "phonenumber": "1234567890",
      "confirmationCode": "123456"
    } 

     */
    try {
      res.json({ message: "register loadding" });
      // const check = await collection.findOne({ email: email });
      // if (check) {
      //   res.json("exist");
      // } else {
      //   res.json("notexist");
      //   await collection.insertMany([data]);
      // }
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

      const check = await collection.findOne({
        email: email,
        phonenumber: phonenumber,
      });
      const check2 = await collection.findOne({
        confirmationCode: confirmationCode,
      });

      if (check) {
        if (confirmationCode !== check.confirmationCode) {
          res.json("code-no-texist");
        } else {
          // Cập nhật mật khẩu mới cho người dùng
          await collection.updateOne(
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

      // Lưu confirmation code vào CSDL hoặc bất kỳ cách nào phù hợp
      await collection.updateOne(
        { email: email },
        { $set: { confirmationCode: confirmationCode } }
      );

      // Gửi confirmation code đến địa chỉ email
      await sendConfirmationEmail(email, confirmationCode.toString());

      res.json("success");
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};
module.exports = authController;
