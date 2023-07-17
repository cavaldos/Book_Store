const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.user_email,
        pass: process.env.user_password,
    },
});

const sendConfirmationEmail = async (email, confirmationCode) => {
    try {
        const mailOptions = {
            from: process.env.user_email,
            to: email,
            subject: 'Confirmation Code for Password Reset',
            text: `Your confirmation code is: ${confirmationCode}`,
        };

        await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent');
    } catch (error) {
        console.error('Error sending confirmation email:', error);
    }
};

// export default sendConfirmationEmail;
module.exports = { sendConfirmationEmail };
