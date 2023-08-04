const User = require("../models/user");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");
const path = require("path");


const coverController = {
  setCoverPic: async (req, res, next) => {
    const { email } = req.body;
    const file = req.files.coverImage;
    console.log(file);
    console.log(email);

    if (!file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    // Check if the user exists based on the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    try {
    //   const tempDir = "temp/"; // Create a "temp" directory in your project
    //   fs.mkdirSync(tempDir, { recursive: true }); // Create the "temp" directory if it doesn't exist
    //   const tempFilePath = path.join(tempDir, req.files.coverImage.name);
    //   console.log(tempFilePath);

    //   // Save the data from req.files.croppedImage.data into the temporary file
    //   fs.writeFileSync(tempFilePath, req.files.coverImage.data);

      const result = await cloudinary.uploader.upload(tempFilePath, {
        folder: "cover_images",
      });

      // Update the user's coverUrl in the User schema
      user.coverUrl = result.secure_url;
      await user.save();

      // Delete the temporary file after uploading to Cloudinary
      fs.unlinkSync(tempFilePath);

      res.status(200).json({ success: true, message: "Cover image uploaded successfully" });
    } catch (error) {
      console.error("Error uploading cover image:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  },

  getCoverPic: async (req, res, next) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email not provided" });
    }

    try {
      // Find the user based on the provided email
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }

      // Return the coverUrl for the user
      res.status(200).json({ success: true, coverUrl: user.coverUrl });
    } catch (error) {
      console.error("Error getting cover image:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  },
};

module.exports = coverController;
