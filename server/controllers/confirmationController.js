const collection = require("../models/user");

exports.verifyConfirmationCode = async (req, res) => {
  try {
    const { email, confirmationCode } = req.body;

    const check = await collection.findOne({ email: email });

    if (check) {
      if (confirmationCode !== check.confirmationCode) {
        res.json("codenotexist");
      } else {
        res.json("success");
      }
    } else {
      res.json("notexist");
    }
  } catch (error) {
    console.error(error);
    res.json("fail");
  }
};
