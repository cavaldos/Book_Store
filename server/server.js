

// mongodb
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const db = require('./app/models')

const app = express();


app.use(express.json());

// Kết nối đến MongoDB

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Kết nối đến MongoDB thành công');
    })
    .catch(error => console.log(console.log(`Lỗi khi kết nối đến MongoDB: `+error)));


app.get('/', (req, res) => {
    res.json({'message': 'SERVE!'});
})

// Middleware để xử lý JSON
app.use(express.json());

// Route mặc định
app.get('/', (req, res) => {
    res.send('Chào mừng đến với backend của tiệm sách!');
});

// Cổng mặc định cho server
const PORT = process.env.PORT || 5000;

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server đang lắng nghe trên cổng ${PORT}`);
});

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
require('./app/routes/user.routes.js')(app);


// Middleware để xác thực người dùng
function authenticateUser(req, res, next) {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (!req.user) {
      return res.status(401).json({ message: "Bạn chưa đăng nhập" });
    }
  
    // Nếu đã đăng nhập, tiếp tục xử lý yêu cầu
    next();
  }
  
// Route GET bảo vệ bởi middleware authenticateUser
app.get("/api/data-protected", authenticateUser, async (req, res) => {
try {
    const data = await Data.find();
    res.json(data);
} catch (err) {
    res.status(500).json({ message: err.message });
}
});
  