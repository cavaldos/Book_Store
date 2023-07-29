const fs = require("fs");
const path = require("path");
const Avatar = require("../models/avatar");
const cloudinary = require("cloudinary").v2;
const  upload  = require("../config/cloudinaryUpload");

cloudinary.config({
  cloud_name: "deo6kaqhj",
  api_key: "654553992794258",
  api_secret: "iFlLS3fOSJrpOH60qqMmLKEwIOQ",
});

const avatarController = {
  setProfilePic: async (req, res, next) => {
    try {
      console.log(req.files); // Add this line to check the req.files object

      if (!req.files || !req.files.croppedImage) {
        return res.status(400).json({ error: "No image file provided" });
      }

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

      // Lấy link ảnh từ kết quả upload
      const imageUrl = result.secure_url;

      // Lưu link ảnh vào MongoDB
      const avatar = new Avatar({ photoUrl: imageUrl });
      await avatar.save();

      res.status(200).json({ data: imageUrl });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = avatarController;

  
  
  
  
