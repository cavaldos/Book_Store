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
});

app.post("/send-confirmation-code", async (req, res) => {
    try {
      const { email } = req.body;
      // Tạo confirmation code ngẫu nhiên
      const confirmationCode = Math.floor(100000 + Math.random() * 900000);
  
      // Lưu confirmation code vào CSDL hoặc bất kỳ cách nào phù hợp
      await collection.updateOne({ email: email }, { $set: { confirmationCode: confirmationCode } });
  
      // Gửi confirmation code đến địa chỉ email
      await sendConfirmationEmail(email, confirmationCode.toString());
  
      res.json("success");
    } catch (error) {
      console.error(error);
      res.json("fail");
    }
  });


app.listen(8000,()=>{
    console.log("port connected");
})