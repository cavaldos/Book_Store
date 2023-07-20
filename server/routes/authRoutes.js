const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signin", authController.signIn);
router.post("/signup", authController.signUp);
router.post("/reset-password", authController.resetPassword);
router.post("/send-confirmation-code", authController.sendConfirmationCode);

module.exports = router;