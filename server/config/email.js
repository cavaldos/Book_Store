const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const sendEmail1 = async (email, confirmationCode) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Confirmation Code for Password Reset",
      text: `Your confirmation code is: ${confirmationCode}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent");
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
};

module.exports = { sendEmail1 };
