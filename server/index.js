// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();

// // Kết nối đến MongoDB
// mongoose.connect(process.env.DB_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// // Kiểm tra kết nối đến MongoDB
// mongoose.connection.on('connected', () => {
//     console.log('Kết nối đến MongoDB thành công');
// });

// // Kiểm tra lỗi khi kết nối đến MongoDB
// mongoose.connection.on('error', (err) => {
//     console.log('Lỗi khi kết nối đến MongoDB: ' + err);
// });

// // Middleware để xử lý JSON
// app.use(express.json());

// // Route mặc định
// app.get('/', (req, res) => {
//     res.send('Chào mừng đến với ứng dụng backend của tôi!');
// });

// // Cổng mặc định cho server
// const PORT = process.env.PORT || 5000;

// // Khởi động server
// app.listen(PORT, () => {
//     console.log(`Server đang lắng nghe trên cổng ${PORT}`);
// });

// // Route GET đơn giản để lấy dữ liệu từ MongoDB
// app.get("/api/data", async (req, res) => {
//   try {
//     const data = await Data.find();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Middleware để xác thực người dùng
// function authenticateUser(req, res, next) {
//   // Kiểm tra xem người dùng đã đăng nhập chưa
//   if (!req.user) {
//     return res.status(401).json({ message: "Bạn chưa đăng nhập" });
//   }

//   // Nếu đã đăng nhập, tiếp tục xử lý yêu cầu
//   next();
// }

// // Route GET bảo vệ bởi middleware authenticateUser
// app.get("/api/data-protected", authenticateUser, async (req, res) => {
//   try {
//     const data = await Data.find();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// mongodb+srv://bookstore:<password>@borbon.gmpunex.mongodb.net/
// });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL1)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('connect false \n', err));

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});
