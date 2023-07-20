const express = require("express");
const router = express.Router();
const confirmationController = require("../controllers/confirmationController");

router.post("/confirmation/verify-confirmation-code", confirmationController.verifyConfirmationCode);

module.exports = router;