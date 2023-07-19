const user = require("../models/book");

const authController = {
  login: async (req, res) => {
    try {
        res.json({ message: "login" });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  register: async (req, res) => {
    try {
        res.json({ message: "register" });

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
  fogotpassword: async (req, res) => {
    try {
        res.json({ message: "fogotpassword" });

    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};
module.exports = authController;
