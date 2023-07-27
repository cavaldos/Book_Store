const mongoose = require('mongoose');

const db = require('../models/index.js');
require('dotenv').config();

// Kết nối đến database

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Kết nối đến MongoDB thành công');
    })
    .catch(error => console.log(console.log(`Lỗi khi kết nối đến MongoDB: `+error)));


// Route GET đơn giản để lấy dữ liệu từ MongoDB mau
// app.get("/api/data", async (req, res) => {
//     try {
//       const data = await Data.find();
//       res.json(data);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

// Include the other routes too

