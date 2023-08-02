const User = require("../models/user");

const editprofileController = {
  editProfile: async (req, res, next) => {
    try {
      const { email, username, lastname, phonenumber, firstname } = req.body;
      // Validate that all fields are provided
      if (!email || !username || !lastname || !phonenumber || !firstname) {
        return res.status(400).json({ message: "Please provide all fields." });
      }

      // Update the user data in MongoDB
      await User.updateOne({ email }, { username, lastname, phonenumber, firstname });

      res.status(200).json({ message: "Profile updated successfully." });
    } catch (err) {
      console.error("Error updating profile:", err);
      res.status(500).json({ message: "An error occurred while updating profile." });
    }
  },

  getProfile: async (req, res, next) => {
    try {
      const { email } = req.body;
      // Fetch user data from MongoDB based on email
      const user = await User.findOne({ email });

      // Return the user data to the frontend
      res.status(200).json(user);
    } catch (err) {
      console.error("Error fetching profile:", err);
      res.status(500).json({ message: "An error occurred while fetching profile." });
    }
  },
};

module.exports = editprofileController;
