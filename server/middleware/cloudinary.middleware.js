const express = require("express");
const app = express();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
require("../config/cloudinary.config");

const cloudinaryMiddleware = {
  uploadImage: async (req, res) => {
    const storage = await new CloudinaryStorage({
      cloudinary: cloudinary,
      params: {
        folder: "album_cover",
        allowedFormats: ["jpg", "png", "jpeg"],
        transformation: [{ width: 500, height: 500, crop: "limit" }],
      },
    });

    const upload = await multer({ storage: storage });

    upload.single("file")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }
      const imageUrl = req?.file?.path || "";
      return res.status(200).json({ imageUrl });
    });
  },
};
module.exports = cloudinaryMiddleware;

// const uploadImage = async (req, res) => {
//     try {
//       if (req.file) {
//         const result = await cloudinary.uploader.upload(req.file.path);
//         const imageUrl = result.secure_url;
//         res.json({ imageUrl: imageUrl });
//       } else {
//         res.status(500).json({ error: 'Error uploading file' });
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       res.status(500).json({ error: 'Error uploading file' });
//     }
// };
