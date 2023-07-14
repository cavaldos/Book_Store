<<<<<<< HEAD
const express = require("express")
const collection = require("./config/dbConnect")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const { sendConfirmationEmail } = require("./config/email");
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "SteveGoldenApple@gmail.com",
//       pass: "augzmajizkaxottv",
//     },
//   });
  
//   const sendConfirmationEmail = async (email, confirmationCode) => {
//     try {
//       const mailOptions = {
//         from: "SteveGoldenApple@gmail.com",
//         to: email,
//         subject: "Confirmation Code for Password Reset",
//         text: `Your confirmation code is: ${confirmationCode}`,
//       };
  
//       await transporter.sendMail(mailOptions);
//       console.log("Confirmation email sent");
//     } catch (error) {
//       console.error("Error sending confirmation email:", error);
//     }
//   };


app.get("/signin",cors(),(req,res)=>{

})


app.post("/signin",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email, password:password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{firstname,lastname,email,password,phonenumber}=req.body


    const data={
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      phonenumber: phonenumber,
      confirmationCode: "",
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/reset-password", async (req, res) => {
    try {
        const { email, password, phonenumber, confirmationCode } = req.body;
    
        const check = await collection.findOne({ email: email, phonenumber: phonenumber });
        const check2 = await collection.findOne({ confirmationCode: confirmationCode});
    
        if (check) {
            if (confirmationCode !== check.confirmationCode) {
              res.json("codenotexist");
            } else {
              // Cập nhật mật khẩu mới cho người dùng
              await collection.updateOne(
                { email: email },
                { $set: { password: password } },
              );
              res.json("success");
            }
        } else {
            res.json("notexist");
        }
          
    } catch (error) {
        console.error(error);
        res.json("fail");
    }
=======
// const express = require('express');
// const app = express();

// // app.get('/api/products', (req, res) => {
// //     const products = [
// //         { id: 1, name: 'Nint
// //         endo Switch', price: 299.99 },

// app.get('/', (res, req) => res.send('Hello World!'));

// // const PORT = process.env.PORT || 5000;
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Kết nối đến MongoDB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
>>>>>>> khanh
});

// Kiểm tra kết nối đến MongoDB
mongoose.connection.on('connected', () => {
    console.log('Kết nối đến MongoDB thành công');
});

// Kiểm tra lỗi khi kết nối đến MongoDB
mongoose.connection.on('error', (err) => {
    console.log('Lỗi khi kết nối đến MongoDB: ' + err);
});

// Middleware để xử lý JSON
app.use(express.json());

// Route mặc định
app.get('/', (req, res) => {
    res.send('Chào mừng đến với ứng dụng backend của tôi!');
});

// Cổng mặc định cho server
const PORT = process.env.PORT || 5000;

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server đang lắng nghe trên cổng ${PORT}`);
});

// Route GET đơn giản để lấy dữ liệu từ MongoDB
app.get("/api/data", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


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