const fs = require("fs");
const path = require("path");
const User = require("../models/user");
const cloudinary = require("../config/cloudinary");

const avatarController = {
  setProfilePic: async (req, res, next) => {
    try {
      console.log(req.files); // Add this line to check the req.files object
      console.log(req.body.email)

      if (!req.files || !req.files.croppedImage) {
        return res.status(400).json({ error: "No image file provided" });
      }

      const email = req.body.email;

      // Manually create a temporary file
      const tempDir = "temp/"; // Create a "temp" directory in your project
      fs.mkdirSync(tempDir, { recursive: true }); // Create the "temp" directory if it doesn't exist
      const tempFilePath = path.join(tempDir, req.files.croppedImage.name);
      console.log(tempFilePath);

      // Save the data from req.files.croppedImage.data into the temporary file
      fs.writeFileSync(tempFilePath, req.files.croppedImage.data);

      // Upload the image to Cloudinary
      const result = await cloudinary.uploader.upload(tempFilePath);

      // Delete the temporary file after uploading to Cloudinary
      fs.unlinkSync(tempFilePath);

      // get link Url after upload
      const imageUrl = result.secure_url;

      // store image url to MongoDB
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Update the user's photoUrl field with the new image URL
      user.avatarUrl = imageUrl;
      await user.save();


      res.status(200).json({ data: imageUrl });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  },
  getAvatar: async (req, res, next) => {
    try {
      const { email } = req.query;

      // Find the user in the database using the email
      const user = await User.findOne({ email });
      if (!user || !user.avatarUrl) {
        return res.status(404).json({ error: "User avatar not found" });
      }

      // Return the user's avatar URL
      res.status(200).json({ photoUrl: user.avatarUrl });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = avatarController;

  
  
  
  
